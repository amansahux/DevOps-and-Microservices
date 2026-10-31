import express from "express";
const app = express()

app.get("/data", (req, res) => { 
    res.status(200).json({
        
    })
 })
app.get("/", (req, res) => {
    res.send("Hello World");
})
export default app
