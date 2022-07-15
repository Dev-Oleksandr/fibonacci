import {Sequelize} from "sequelize";
import dotenv from "dotenv";
dotenv.config()

export default new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_ROOT_USER,
    process.env.MYSQL_ROOT_PASSWORD,
    {
        dialect: "mysql",
        host: process.env.MYSQL_HOST,
        port: Number(process.env.MYSQL_PORT)
    }
)
