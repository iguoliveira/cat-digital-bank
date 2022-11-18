import { db } from "./database"

export const createUserTable = async () => {
    db.serialize(() => {
        db.exec('CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY, cpf TEXT, name TEXT, age INTEGER, sex TEXT, email TEXT, password TEXT)')
    })
}

export const createCardTable = async () => {
    db.serialize(() => {
        db.exec('CREATE TABLE IF NOT EXISTS Card (id INTEGER PRIMARY KEY, number TEXT, ccv TEXT, expiration TEXT, plan TEXT, type TEXT, password TEXT, userFk INTEGER, FOREIGN KEY (userFk) REFERENCES User(id))')
    })
}

export const createAccountTable = async () => {
    db.serialize(() => {
        db.exec('CREATE TABLE IF NOT EXISTS Account (id INTEGER PRIMARY KEY, accountNumber TEXT, balance NUMERIC, userFk INTEGER, FOREIGN KEY (userFk) REFERENCES User(id))')
    })
}