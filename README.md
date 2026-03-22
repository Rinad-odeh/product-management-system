# TypeScript CLI Products CRUD

##  Description

A simple CLI application to manage products using TypeScript, Sequelize, and PostgreSQL.
It supports basic CRUD operations through terminal commands.

---

## Requirements

Before running the project, make sure you have:

* Node.js (v18 or higher recommended)
* PostgreSQL (v14 or higher recommended)

---

## Setup

### 1. Install dependencies

```bash
yarn install
```

### 2. Create `.env` file

Create a `.env` file in the root folder and copy the content from `.env.example`, then update it with your local database credentials:

```env
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASS=yourpassword
DB_HOST=localhost
DB_PORT=5432
```

---

##  3. Usage & CLI Commands

###  Add a product

```bash
yarn tsx src/main.ts add <name> <price>
```

###  List all products

```bash
yarn tsx src/main.ts list
```

###  Get product by ID

```bash
yarn tsx src/main.ts get <id>
```

###  Update a product

```bash
yarn tsx src/main.ts update <id> <name> <price>
```

### Delete a product

```bash
yarn tsx src/main.ts delete <id>
```

