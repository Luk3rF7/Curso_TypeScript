// Singleton -GoF | Factory Method
export class Database {
  private static database: Database;
  private constructor(
    private host: string,
    private user: string,
    private password: string
  ) {}

  connect(): void {
    console.log(`Conection: ${this.host},${this.user},${this.password}`);
  }
  static getDataBase(host: string, user: string, password: string): Database {
    if (Database.database) return Database.database;
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDataBase("Localhost mysql", "root:initial", "123465");
const db2 = Database.getDataBase("Localhost mysql", "root:initial", "123465");
db1.connect();
console.log(db1 === db2);
