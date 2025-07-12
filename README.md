# GraphQL Project 🕸️

Este proyecto es una API construida con **GraphQL** y **Apollo Server** sobre **Node.js** y **Express**, con un enfoque educativo. Implementa queries, mutations, tipos personalizados y resolvers para manejar un conjunto simulado de datos.

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- Apollo Server (GraphQL)
- JavaScript (ESModules)
- nodemon (desarrollo)

---

## 📦 Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/cristianbarreiro/graphql-project.git
cd graphql-project
git checkout main1
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Ejecutar el servidor en modo desarrollo**

```bash
npm run dev
```

---

## 🧪 Scripts disponibles

| Comando       | Descripción                      |
| ------------- | -------------------------------- |
| `npm run dev` | Inicia el servidor con `nodemon` |
| `npm start`   | Inicia el servidor con Node      |

---

## 📁 Estructura del proyecto

```
graphql-project/
│
├── src/
│   ├── data/              # Datos simulados (mock)
│   ├── schema/            # Definiciones de tipos y resolvers
│   └── index.js           # Punto de entrada
│
├── package.json
└── README.md
```

---

## 🧠 Qué vas a encontrar

- Tipos personalizados (`TypeDefs`)
- Queries y Mutations
- Resolvers con lógica básica
- Datos en memoria
- Separación por responsabilidades

---

## 🌐 Acceso

Una vez iniciado el servidor (`npm run dev`), accedé al entorno de pruebas en:

```
http://localhost:3000/
```

Desde ahí podés probar tus queries y mutations con el explorador GraphQL incorporado.

---

## 📌 Notas

- El servidor corre por defecto en el puerto `3000`
- El proyecto usa módulos ES (`"type": "module"` en `package.json`)
- Los datos son mockeados en memoria (sin base de datos)

---

## ✨ Futuras mejoras

- Integrar base de datos real (MongoDB o PostgreSQL)
- Agregar paginación y filtros
- Implementar autenticación

---

## 📚 Aprendizaje

Este proyecto está pensado como una introducción práctica a GraphQL desde cero, explorando cómo crear un servidor, definir tipos y manejar consultas reales.

---
