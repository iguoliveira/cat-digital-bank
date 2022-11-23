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

controller.get("/accountIsValid/:accountId", async (req, res) => {
  db.serialize(() => {
    db.all(
      "SELECT * FROM Account WHERE accountId=?",
      [req.params.accountId],
      (error: any, rows: any) => {
        if (error) return res.status(500).json({ error, msg: error.message });
        if (rows.length == 0) return res.json({ accountIsValid: "invalid" });
        res.json({ account: rows });
      }
    );
  });
});

controller.get("/user/:id", async (req, res) => {
  db.serialize(() => {
    db.all(
      "SELECT * FROM User WHERE userId=?",
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
      "SELECT * FROM Card WHERE cardAccountNumberFk=?",
      [req.params.id],
      (error: Error, rows: any) => {
        if (error) return res.status(500).json({ error, msg: error.message });
        res.json({ params: req.params, card: rows });
      }
    );
  });
});

controller.get("/user/:id/info", async (req, res) => {
  db.serialize(() => {
    db.all(
      "SELECT * FROM Account a INNER JOIN Card c ON c.cardAccountNumberFk=a.accountId INNER JOIN User u ON u.userAccountNumberFk=a.accountId WHERE a.accountId=?",
      [req.params.id],
      (error: Error, rows: any) => {
        if (error) return res.status(500).json({ error, msg: error.message });
        res.json({ rows });
      }
    );
  });
});

controller.get("/user/:id/transactions", async (req, res) => {
  db.serialize(() => {
    db.all(
      "SELECT * FROM TransactionPerAccount WHERE accountSender=? OR accountReceiver=?",
      [req.params.id, req.params.id],
      (error: Error, rows: any) => {
        if (error) return res.status(500).json({ error, msg: error.message });
        res.json({ rows });
      }
    );
  });
});

controller.get("/user/accounts/:id", async (req, res) => {
  db.serialize(() => {
    db.all(
      `SELECT * FROM Account WHERE accountId LIKE '%${req.params.id}%'`,
      (error: Error, rows: any) => {
        if (error) return res.status(500).json({ error, msg: error.message });
        res.json({ rows });
      }
    );
  });
});

// POSTs
controller.post("/user-register", async (req, res) => {
  db.serialize(() => {
    db.run(
      "INSERT INTO User (cpf, name, age, sex, email, password, userAccountNumberFk) VALUES (?,?,?,?,?,?,?)",
      [
        req.body.cpf,
        req.body.name,
        req.body.age,
        req.body.sex,
        req.body.email,
        req.body.password,
        req.body.userAccountNumberFk,
      ]
    );
  });
});

controller.post("/account-register", async (req, res) => {
  db.serialize(() => {
    db.run("INSERT INTO Account (accountId, balance) VALUES (?,?)", [
      req.body.accountId,
      req.body.balance,
    ]);
  });
});

controller.post("/card-register", async (req, res) => {
  db.serialize(() => {
    db.run(
      "INSERT INTO Card (cardNumber, ccv, expirationMonth, expirationYear, plan, type, cardPassword, cardAccountNumberFk) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        req.body.cardNumber,
        req.body.ccv,
        req.body.expirationMonth,
        req.body.expirationYear,
        req.body.plan,
        req.body.type,
        req.body.cardPassword,
        req.body.cardAccountNumberFk,
      ]
    );
  });
});

controller.post("/transaction-register", async (req, res) => {
  db.serialize(() => {
    db.run(
      "INSERT INTO TransactionPerAccount (transactionValue, transactionType, accountSender, accountReceiver) VALUES (?,?,?,?)",
      [
        req.body.transactionValue,
        req.body.transactionType,
        req.body.accountSender,
        req.body.accountReceiver,
      ]
    );
  });
});

// PATCHes
controller.patch("/transaction/remove-from-balance", async (req, res) => {
  db.serialize(() => {
    db.run("UPDATE Account SET balance=balance-? WHERE accountId=?", [
      req.body.valueTransfer,
      req.body.accountId,
    ]);
  });
});

controller.patch("/transaction/add-in-balance", async (req, res) => {
  db.serialize(() => {
    db.run("UPDATE Account SET balance=balance+? WHERE accountId=?", [
      req.body.valueTransfer,
      req.body.accountId,
    ]);
  });
});

export { controller };
