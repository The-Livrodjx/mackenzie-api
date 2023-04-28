import * as dotenv from "dotenv";

dotenv.config();

export const mysqlConfig = {
  type: 'mysql',
  host: 'host.docker.internal',
  username: 'root',
  password: '@Python123',
  port: 3306,
  database: 'mackenzieapi',
  synchronize: true
};