import express from "express"
import morgan from "morgan"

const app = express()
app.use(morgan("dev"))
app.get("/", async (req, res) => {
    let sum = 0;
    for (let i = 0; i <= 1000064600; i++) {
        sum += i
    }
    await res.status(200).json({
        message: "Server Running ",
        Sum: sum
    })
})


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})