import { db } from "./database";

export const createAccountTable = async () => {
  db.serialize(() => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS Account (accountId TEXT PRIMARY KEY, balance NUMERIC)"
    );
  });
};

export const createUserTable = async () => {
  db.serialize(() => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS User (userId INTEGER PRIMARY KEY, cpf TEXT, name TEXT, age INTEGER, sex TEXT, email TEXT, password TEXT, userAccountNumberFk TEXT, FOREIGN KEY (userAccountNumberFk) REFERENCES Account(accountId))"
    );
  });
};

export const createCardTable = async () => {
  db.serialize(() => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS Card (cardId INTEGER PRIMARY KEY, cardNumber TEXT, ccv TEXT, expirationMonth TEXT, expirationYear TEXT, plan TEXT, type TEXT, cardPassword TEXT, cardAccountNumberFk TEXT, FOREIGN KEY (cardAccountNumberFk) REFERENCES Account(accountId))"
    );
  });
};

export const createTransactionTable = async () => {
  db.serialize(() => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS TransactionPerAccount (transactionId INTEGER PRIMARY KEY, transactionValue NUMERIC, accountSender TEXT, accountReceiver TEXT, FOREIGN KEY (accountSender) REFERENCES Account(accountId), FOREIGN KEY (accountReceiver) REFERENCES Account(accountId))"
    );
  });
};
