
# GraphQL Project 🕸️

Este proyecto es una API construida con **GraphQL** y **Apollo Server** sobre **Node.js** y **Express**, con un enfoque educativo. Además, integra un backend REST simulado con **json-server** para combinar datos REST y GraphQL en una arquitectura híbrida.

Implementa queries, mutations, tipos personalizados y resolvers que consumen datos desde una API REST local y datos en memoria.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- Apollo Server (GraphQL)
- json-server (API REST simulada)
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

3. **Iniciar el backend REST simulado con json-server**

```bash
npm run json-server
```

Esto levantará un servidor REST en `http://localhost:3000` con los datos simulados definidos en `db.json`.

4. **Ejecutar el servidor GraphQL en modo desarrollo**

En una nueva terminal, ejecutá:

```bash
npm run dev
```

Esto levantará el servidor GraphQL en `http://localhost:4000` (o el puerto configurado).

---

## 🧪 Scripts disponibles

| Comando       | Descripción                               |
| ------------- | -----------------------------------------|
| `npm run json-server` | Inicia el servidor REST simulado con json-server en el puerto 3000 |
| `npm run dev` | Inicia el servidor GraphQL con `nodemon` |
| `npm start`   | Inicia el servidor GraphQL con Node      |

---

## 📁 Estructura del proyecto

```
graphql-project/
│
├── src/
│   ├── data/              # Datos simulados en memoria
│   ├── schema/            # Definiciones de tipos y resolvers
│   └── index.js           # Punto de entrada GraphQL
│
├── db.json                # Datos JSON para json-server (API REST simulada)
├── package.json
└── README.md
```

---

## 🧠 Qué vas a encontrar

- Servidor REST simulado con `json-server` para exponer datos en `http://localhost:3000/persons`
- Servidor GraphQL que consume la API REST y datos en memoria mediante resolvers
- Queries y Mutations combinadas que usan datos REST y memoria local
- Tipos personalizados, filtros y resolvers asincrónicos
- Ejemplo de arquitectura híbrida REST + GraphQL

---

## 🌐 Acceso

- API REST simulada (json-server):  
  `http://localhost:3000/persons`

- Servidor GraphQL (Apollo Server):  
  `http://localhost:4000/` (Explorador GraphQL)

---

## 📌 Notas importantes

- El backend REST simulado corre en el puerto `3000` con `json-server`.
- El servidor GraphQL corre en el puerto `4000`.
- El proyecto usa módulos ES (`"type": "module"` en `package.json`).
- Los datos REST se encuentran en `db.json`.
- Mutaciones en GraphQL actualmente modifican datos en memoria, no en REST (puedes extender esto).
- Para producción, se recomienda reemplazar `json-server` por una base de datos real.

---

## ✨ Futuras mejoras

- Sincronizar mutaciones GraphQL con la API REST usando peticiones `POST`, `PUT` y `DELETE`.
- Integrar base de datos real (MongoDB, PostgreSQL).
- Añadir paginación, filtros avanzados y autenticación.
- Desplegar ambos servidores en entorno cloud.

---

## 📚 Aprendizaje

Este proyecto es una introducción práctica a GraphQL, mostrando cómo combinarlo con APIs REST existentes para migraciones progresivas o arquitecturas híbridas, manteniendo la flexibilidad y potencia de GraphQL.

---

Si querés puedo ayudarte a preparar los scripts npm y configuración para levantar ambos servidores en paralelo con un solo comando. ¿Te interesa?
