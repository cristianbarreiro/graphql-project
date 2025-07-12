const { ApolloServer, gql } = require("apollo-server");

// Datos en memoria
const persons = [
  {
    name: "John Doe",
    phone: "123-456-7890",
    street: "123 Elm St",
    city: "Springfield",
    id: "1",
  },
  {
    name: "Jane Smith",
    phone: "987-654-3210",
    street: "456 Oak St",
    city: "Shelbyville",
    id: "2",
  },
  {
    name: "Alice Johnson",
    phone: "555-123-4567",
    street: "789 Pine St",
    city: "Capital City",
    id: "3",
  },
];

// Definir esquema GraphQL
const typeDefinitions = gql`
  type Person {
    name: String!
    phone: String!
    street: String!
    city: String!
    id: ID!
  }

  type Query {
    personCount: Int!
    allPersons: [Person!]!
  }
`;

// Resolvers
const resolvers = {
  Query: {
    personCount: () => persons.length,
    allPersons: () => persons,
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
