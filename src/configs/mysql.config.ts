import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from "dotenv";

dotenv.config();

export const mysqlConfig = {
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: process.env.DATABASE_PASS,
  port: 3306,
  database: 'mackenzieapi',
  synchronize: true
};