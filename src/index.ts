import express,{Application} from "express"
import dotenv from "dotenv"
import { PrismaClient } from '@prisma/client'
import mainApp from "./mainApp"
const prisma = new PrismaClient()
dotenv.config()



const app = express()

const realport = parseInt(process.env.PORT!)


mainApp(app)

const server = app.listen(realport || 4000,()=>{
    console.log("server is running", realport)
})


process.on("uncaughtException",(error: Error)=>{
    console.log(`shutting down due to uncaughtException, ${error}`)

    process.exit(1)
} )
process.on("unhandledRejection",(reason: any)=>{
    console.log(`shutting down due to unhandledRejection, ${reason}`)

    server.close(()=>{
        process.exit(1)
    })
} )


