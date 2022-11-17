import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('banco.sqlite3')

export { db }