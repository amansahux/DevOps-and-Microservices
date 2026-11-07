 import express from "express"

 const app = express()
 app.use(express.json())
 ap.use(express.static())

export default app