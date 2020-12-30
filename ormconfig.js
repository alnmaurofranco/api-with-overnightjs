module.exports = {
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT || 5432,
  username: process.env.TYPEORM_USER || "postgres",
  password: process.env.TYPEORM_PASS || "root",
  database: process.env.TYPEORM_DBNAME ||"overnightdb",
  synchronize: false,
  logging: false,
  entities: process.env.NODE_ENV === "production"
    ? ["dist/app/models/*.js"]
    : ["src/app/models/*.ts"],
  migrations: process.env.NODE_ENV === "production"
    ? ["dist/db/migrations/*.js"]
    : ["src/db/migrations/*.ts"],
  cli: {
    "entitiesDir": "src/app/models",
    "migrationsDir": "src/db/migrations"
  }
}
