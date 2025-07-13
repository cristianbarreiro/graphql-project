import { ApolloServer, gql, UserInputError } from "apollo-server";
import { v1 as uuid } from "uuid";
import axios from "axios";
// Datos en memoria
const persons = [
  {
    age: 23,
    name: "John Doe",
    phone: "123-456-7890",
    street: "123 Elm St",
    city: "Springfield",
    id: "1",
  },
  {
    age: 17,
    name: "Jane Smith",
    phone: "987-654-3210",
    street: "456 Oak St",
    city: "Shelbyville",
    id: "2",
  },
  {
    age: 36,
    name: "Alice Johnson",
    phone: "555-123-4567",
    street: "789 Pine St",
    city: "Capital City",
    id: "3",
  },
];

// Definir esquema GraphQL
const typeDefinitions = gql`
  enum YesNo {
    YES
    NO
  }

  type Address {
    street: String!
    city: String!
  }

  type Person {
    name: String!
    phone: String!
    address: Address!
    city: String!
    id: ID!
    canDrink: Boolean!
  }

  type Query {
    personCount: Int!
    allPersons(phone: YesNo): [Person!]!
    findPerson(name: String!): Person
  }

  type Mutation {
    editNumber(name: String!, phone: String!): Person
    addPerson(
      name: String!
      phone: String!
      street: String!
      city: String!
      age: Int!
    ): Person
    editPerson(
      id: ID!
      name: String
      phone: String
      street: String
      city: String
      age: Int
    ): Person
    deletePerson(id: ID!): Person
    deleteAllPersons: [Person!]!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    personCount: () => persons.length,
    allPersons: async (root, args) => {
      const { data: personsFromRestApi } = await axios.get(
        "http://localhost:3000/persons"
      );
      console.log(personsFromRestApi);

      if (!args.phone) return personsFromRestApi;

      const byPhone = (person) =>
        args.phone === "YES" ? !!person.phone : !person.phone;

      return personsFromRestApi.filter(byPhone);
    },
    findPerson: (parent, { name }) => {
      return persons.find((person) => person.name === name);
    },
  },
  Mutation: {
    editNumber: (root, args) => {
      const person = persons.find((p) => p.name === args.name);
      if (!person) return null;

      const updatedPerson = { ...person, phone: args.phone };

      const index = persons.findIndex((p) => p.id === person.id);
      persons[index] = updatedPerson;
      return updatedPerson;
    },
    addPerson: (root, args) => {
      if (persons.find((p) => p.name === args.name)) {
        throw new UserInputError("Name must be unique", {
          invalidArgs: args.name,
        });
      }
      const person = { ...args, id: uuid() };
      persons.push(person);
      return person;
    },

    editPerson: (root, args) => {
      const personIndex = persons.findIndex((p) => p.id === args.id);
      if (personIndex === -1) return null;

      const updatedPerson = { ...persons[personIndex], ...args };
      persons[personIndex] = updatedPerson;
      return updatedPerson;
    },

    deletePerson: (root, { id }) => {
      const index = persons.findIndex((p) => p.id === id);
      if (index === -1) return null;
      const [removed] = persons.splice(index, 1);
      return removed;
    },

    deleteAllPersons: () => {
      const deleted = [...persons];
      persons.length = 0;
      return deleted;
    },
  },
  Person: {
    address: (root) => ({
      street: root.street,
      city: root.city,
    }),
    canDrink: (root) => root.age >= 18,
  },
};

// Crear el servidor
const server = new ApolloServer({
  typeDefs: typeDefinitions,
  resolvers,
});

// Iniciar el servidor
server.listen().then(({ url }) => {
  console.log(`🚀 Servidor listo en ${url}`);
});
