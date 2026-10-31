import express from "express";
const app = express()

app.get("/data", (req, res) => { 
    res.status(200).json([
        { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", role: "Software Engineer", age: 28 },
        { id: 2, name: "Bob Smith", email: "bob.smith@example.com", role: "Product Manager", age: 34 },
        { id: 3, name: "Charlie Brown", email: "charlie.brown@example.com", role: "DevOps Engineer", age: 30 },
        { id: 4, name: "Diana Prince", email: "diana.prince@example.com", role: "UX Designer", age: 26 },
        { id: 5, name: "Evan Wright", email: "evan.wright@example.com", role: "QA Engineer", age: 32 },
        { id: 6, name: "Fiona Gallagher", email: "fiona.gallagher@example.com", role: "Frontend Developer", age: 27 },
        { id: 7, name: "George Clark", email: "george.clark@example.com", role: "Backend Developer", age: 31 },
        { id: 8, name: "Hannah Abbott", email: "hannah.abbott@example.com", role: "Data Analyst", age: 29 },
        { id: 9, name: "Ian Malcolm", email: "ian.malcolm@example.com", role: "System Architect", age: 40 },
        { id: 10, name: "Julia Roberts", email: "julia.roberts@example.com", role: "Scrum Master", age: 35 }
    ]);
});

app.get("/", (req, res) => {
    res.send("Hello World");
})

export default app
