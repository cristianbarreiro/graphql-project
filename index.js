import { ApolloServer, gql } from "apollo-server";
import { v1 as uuid } from "uuid";
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
    allPersons: [Person!]!
    findPerson(name: String!): Person
  }

  type Mutation {
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
    allPersons: () => persons,
    findPerson: (parent, { name }) => {
      return persons.find((person) => person.name === name);
    },
  },
  Mutation: {
    addPerson: (root, args) => {
      const person = { ...args, id: uuid() };
      persons.push(person);
      return person;
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
