import express from "express";
import cors from "cors";
import { controller } from "./controller";
import { db } from "./database";

const PORT = 8000;
const app = express();

const createUserTable = async () => {
  db.serialize(() => {
    db.exec('CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY, cpf TEXT, name TEXT, age INTEGER, sex TEXT, email TEXT)')
  })
}

const createCardTable = async () => {
  db.serialize(() => {
    db.exec('CREATE TABLE IF NOT EXISTS Card (id INTEGER PRIMARY KEY, number TEXT, ccv TEXT, plan TEXT, type TEXT, password TEXT, userFk INTEGER, FOREIGN KEY (userFk) REFERENCES User(id))')
  })
}

app.listen(PORT, () =>
  console.log(
    `\x1b[32m[START]\x1b[0m Server is running on \x1b[35mhttp://localhost:${PORT}\x1b[0m`
  )
);

createUserTable()
createCardTable()
app.use(cors());
app.use(express.json());
app.use(controller);
