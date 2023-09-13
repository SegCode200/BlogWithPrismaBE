import cors from "cors"
import express,{ Application,Request, Response } from "express";
// import helmet from "helmet";
// import morgan from "morgan";


const mainApp =(app:Application)=>{
    app.use(cors())
    app.use(express.json())
    // app.use(morgan("dev"))
    // app.use(helmet())

    // app.set("view engine", "ejs")

    app.get("/", (req:Request, res:Response)=>{
        try {
            return res.status(200).json({
                message: "Sucessfully working server"

            })
        } catch (error) {
            return res.status(404).json({
                message: "Failed to connect to server"
            })
            
        }

    })

}