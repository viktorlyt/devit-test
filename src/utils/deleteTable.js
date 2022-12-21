import * as SQLite from "expo-sqlite";

export const deleteTable = () => {
  const db = SQLite.openDatabase("MainDB.db");

  db.transaction((tx) => {
    tx.executeSql(
      "DROP TABLE " + "profiles", [],
      () => {
        console.log("Table deleted successfully!");
      },
      (error) => {
        console.log("Error on deleting table " + error.message);
      },
    );
  });
};
