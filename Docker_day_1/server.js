import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World!")
})
app.get("/user" , (req, res) => { 
    res.status(200).json({
       message:"user fetched successfully",
       users:[
        {
            id:1,
            name:"Ravi",
        },
        {
            id:2,
            name:"Ravi",
        },
        {
            id:3,
            name:"Ravi",
        },
        {
            id:4,
            name:"Ravi",
        },
        {
            id:5,
            name:"Ravi",
        },
        {
            id:6,
            name:"Ravi",
        },
        {
            id:7,
            name:"Ravi",
        },
        {
            id:8,
            name:"Ravi",
        },
        {
            id:9,
            name:"Ravi",
        },
        {
            id:10,
            name:"Ravi",
        },
       ]
    })
 })

app.listen(3000, () => {
    console.log("Server started on port 3000")
})
