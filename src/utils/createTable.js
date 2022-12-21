import * as SQLite from "expo-sqlite";

export const createTable = () => {
  const db = SQLite.openDatabase("MainDB.db");

  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS " +
        "profiles " +
        "(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password TEXT, phoneNumber TEXT, position TEXT, skype TEXT);",
      [],
      () => {
        console.log("Table created successfully!");
      },
      (error) => {
        console.log("Error on creating table " + error.message);
      }
    );
  });
};
