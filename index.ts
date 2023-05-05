import dotenv from "dotenv"
import express, { Express, Request, Response } from "express"
import path from "path"
import cors from "cors"

dotenv.config

const app: Express = express()

app.use(express.json())
app.use(cors())

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world from the Typescript server!")
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("Server start on port " + port)
})