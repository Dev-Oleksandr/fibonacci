import express from 'express'
import router from "./routers/router";
import sequelize from './db/db'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.json())
app.use('/', router)

async function start() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()