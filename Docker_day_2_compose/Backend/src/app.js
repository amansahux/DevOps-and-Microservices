import express from "express"

const app = express()
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Hello World!")
})
app.get("/user", (req, res) => {
    res.status(200).json({
        message: "user fetched successfully",
        users: [
            {
                id: 1,
                name: "Ravi",
            },
            {
                id: 2,
                name: "Aman",
            },
            {
                id: 3,
                name: "smriti",
            },
            {
                id: 4,
                name: "janvii",
            },
            {
                id: 5,
                name: "suhani",
            },
            {
                id: 6,
                name: "tamana",
            },
            {
                id: 7,
                name: "kajal",
            },
            {
                id: 8,
                name: "ayushi",
            },
            {
                id: 9,
                name: "sakshi",
            },
            {
                id: 10,
                name: "divya",
            },
        ]
    })
})

export default app

