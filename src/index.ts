import express,{Application} from "express"
import dotenv from "dotenv"
dotenv.config()



const app = express()


const server = app.listen(process.env.PORT || 4000,()=>{
    console.log("server is running")
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


