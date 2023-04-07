# Backend

This folder contains the code for the backend of the Great Antelope A... web application.

## How to run

### Secrets

Copy the contents of the `.env.example` file into `.env`

```
cp .env.example .env
```

### Database Setup

Follow the following steps to install PostgreSQL on your local machine, and create an authorized user `me` for the `antelopes` database.

1. `brew install postgresql`
2. `brew services start postgresql`
3. `psql postgres`
4. `CREATE DATABASE "antelopes";`
5. `\c antelopes';`
6. `CREATE ROLE "me" WITH LOGIN PASSWORD 'password';`
7. `ALTER ROLE "me" CREATEDB;`

To populate the database with the antelope data, run the following command:

```
npm run populate-database
```

### Web setup

Install Node.JS dependencies using the standard command.

```
npm install
```

Then, run the dev server.

```
npm run start
```

The app is now running - navigate to [`http://localhost:3001/`](http://localhost:3001/) and you should see a message that says "Hello World".
