import "reflect-metadata"
import dotenv from "dotenv"
import { DataSource } from "typeorm"
import { Todo } from "./modules/Todo/entity"
import { User } from "./modules/User/entity";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT) || 5432,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    synchronize: true,
    logging: true,
    migrationsRun: true,
    migrationsTableName: "migrations",
    entities: [Todo, User],
    migrations: [],
    subscribers: [],
})
