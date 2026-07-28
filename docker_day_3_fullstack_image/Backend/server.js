import express from "express"
const app = express()

const users = [{ name: "aman sahu" }, { name: "riya" }, { name: "jyoti" }, { name: "aditi" }, { name: "pankaj" }, { name: "harsh" }]
app.use(express.json())


app.get("/", (req, res) => {
    res.send({
        status: 200,
        message: "success",
        data: users
    })
})

app.listen(3000, () => { console.log("Server starts on port 3000") })