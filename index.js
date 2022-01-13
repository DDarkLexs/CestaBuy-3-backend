import express from 'express'
import cors from 'cors'
import fs from 'fs-extra'
import ip from 'ip'
import { homedir } from "os" 
import cookieParser from "cookie-parser"
import session from "express-session"
import { encriptUTF8,encriptBase64 } from "./src/apps/encript"
import rotas from "./src/routes"
import ASCIIColorLog from 'ascii-color-log';
const log = new ASCIIColorLog();


const app = express()
const PORT = 3232

app.use(cors())

app.use(cookieParser())

app.use(session({secret:"é segredo"}))

rotas(app)

app.use(express.static("src/dist"))


      app.get("/",(req,res) => {

        
        // console.log(req.cookies)


        //  res.cookie("idf","112")
        // .json(req.cookies)
        
                
        })

 

app.listen(PORT, async () => {

        console.clear()
        
        log.success(`CestaBuy 3.0`)
        log.info(`Localhost: 127.0.0.1:${PORT}`)
        log.info(`Network: ${ip.address()}:${PORT}`)


})