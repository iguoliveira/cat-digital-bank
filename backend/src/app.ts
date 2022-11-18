import express from "express";
import cors from "cors";
import { controller } from "./controller";
import { createUserTable, createCardTable, createAccountTable } from "./helpers";

const PORT = 8000;
const app = express();

app.listen(PORT, () =>
  console.log(
    `\x1b[32m[START]\x1b[0m Server is running on \x1b[35mhttp://localhost:${PORT}\x1b[0m`
  )
);

createUserTable()
createCardTable()
createAccountTable()
app.use(cors());
app.use(express.json());
app.use(controller);
