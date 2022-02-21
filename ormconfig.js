const developmentEnv = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: ["./src/entities/*.ts"],
    migrations: ["./src/database/migrations/*.ts"],
    cli: {
      migrationsDir: "./src/database/migrations",
    },
    ssl: false,
  };
  
  module.exports = developmentEnv;