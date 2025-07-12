🚀 GraphQL API con Apollo Server

Este proyecto es una API simple de GraphQL construida con Apollo Server en Node.js. La API expone un listado de personas en memoria. El objetivo es entender cómo funcionan los esquemas, queries y resolvers en GraphQL sin necesidad de una base de datos externa.

Basado en el video de referencia:  
https://www.youtube.com/watch?v=QG-qbmW-wes&list=PL2i4CEznA8jWqp8nsonAjddiN4XctqIuh&index=2

---

Tecnologías utilizadas:

- Node.js  
- Apollo Server (v3)  
- GraphQL  
- nodemon (modo desarrollo)

---

Instalación rápida (comandos del video):

npm init -y  
npm install apollo-server graphql  
npm install --save-dev nodemon  

Luego agregá los siguientes scripts al package.json:

"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}

---

Cómo empezar:

1. Clonar el repositorio (si aplica):

git clone https://github.com/tu-usuario/graphql-project.git  
cd graphql-project

2. Instalá las dependencias:

npm install

3. Iniciá el servidor

Modo desarrollo (recarga automática):

npm run dev

Modo normal:

npm start

---

Esquema GraphQL:

type Person {
  name: String!
  phone: String!
  street: String!
  city: String!
  id: ID!
}

type Query {
  allPersons: [Person!]!
}

---

Consultas de ejemplo:

Obtener todas las personas:

{
  allPersons {
    id
    name
    phone
    street
    city
  }
}

---

Estructura del proyecto:

graphql-project/
├── index.js          # Servidor Apollo
├── package.json
├── README.md
├── .gitignore

---

Recursos útiles:

- Apollo Server Docs: https://www.apollographql.com/docs/apollo-server/  
- GraphQL Docs: https://graphql.org/learn/  
- Video en YouTube: https://www.youtube.com/watch?v=QG-qbmW-wes&list=PL2i4CEznA8jWqp8nsonAjddiN4XctqIuh&index=2

---

Licencia:

Este proyecto está bajo la licencia MIT.
