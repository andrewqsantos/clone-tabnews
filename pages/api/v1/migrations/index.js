import migrationRunner from "node-pg-migrate";
import { join } from "node:path";

async function migrations(request, response) {
  const migration = await migrationRunner({
    databaseUrl: process.env.DATABASE_URL,
    dryRun: true,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
  });
  response.status(200).json(migration);
}

export default migrations;
