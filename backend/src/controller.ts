import { Router } from "express";
import { db } from "./database";

const controller = Router();

// GETs
controller.get("/tryLogin/:cpf/:password", async (req, res) => {
  db.serialize(() => {
    db.all(
      "SELECT * FROM User WHERE cpf=? and password=?",
      [req.params.cpf, req.params.password],
      (error: any, rows: any) => {
        if (error) return res.status(500).json({ error, msg: error.message });
        if (rows.length == 0) return res.json({ tryLogin: "invalid" });
        res.json({ login: rows });
      }
    );
  });
});

controller.get("/user/:id", async (req, res) => {
  db.serialize(() => {
    db.all(
      "SELECT * FROM User WHERE id=?",
      [req.params.id],
      (error: any, rows: any) => {
        if (error) return res.status(500).json({ error, msg: error.message });
        res.json(...rows);
      }
    );
  });
});

controller.get("/card/:id", async (req, res) => {
  db.serialize(() => {
    db.all(
      "SELECT * FROM Card WHERE userFk=?",
      [req.params.id],
      (error: Error, rows: any) => {
        if (error) return res.status(500).json({ error, msg: error.message });
        res.json({ params: req.params, card: rows });
      }
    );
  });
});

// POSTs
controller.post("/user-register", async (req, res) => {
  db.serialize(() => {
    db.run(
      "INSERT INTO User (cpf, name, age, sex, email, password) VALUES (?,?,?,?,?,?)",
      [
        req.body.cpf,
        req.body.name,
        req.body.age,
        req.body.sex,
        req.body.email,
        req.body.password,
      ]
    );
  });
});

controller.post("/account-register", async (req, res) => {
  db.serialize(() => {
    db.run(
      "INSERT INTO Account (accountNumber, balance, userFk) VALUES (?,?,?)",
      [
        req.body.accountNumber,
        req.body.balance,
        req.body.userFk
      ]
    );
  });
});

controller.post("/card-register", async (req, res) => {
  db.serialize(() => {
    db.run(
      "INSERT INTO Card (number, ccv, expiration, plan, type, password, userFk) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        req.body.number,
        req.body.ccv,
        req.body.expiration,
        req.body.plan,
        req.body.type,
        req.body.password,
        req.body.userFk,
      ]
    );
  });
});

export { controller };
