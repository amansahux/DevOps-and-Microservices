import express from "express"

const app = express()

const data = [
    {
        id: 1,
        name: "Aman Sahu",
        role: "Profissional Developer",
        email: "aman.sahu@example.com",
        age: 28,
        gender: "Male",
        phone: "+91-9876543210",
        department: "Engineering",
        salary: 95000,
        location: { city: "Bangalore", state: "Karnataka", country: "India" },
        skills: ["JavaScript", "Node.js", "React", "Docker", "MongoDB"],
        joinedAt: "2021-03-15",
        isActive: true,
        avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
        id: 2,
        name: "Priya Sharma",
        role: "UI/UX Designer",
        email: "priya.sharma@example.com",
        age: 25,
        gender: "Female",
        phone: "+91-9123456789",
        department: "Design",
        salary: 75000,
        location: { city: "Mumbai", state: "Maharashtra", country: "India" },
        skills: ["Figma", "Adobe XD", "CSS", "Illustrator", "Prototyping"],
        joinedAt: "2022-07-01",
        isActive: true,
        avatar: "https://i.pravatar.cc/150?img=5"
    },
    {
        id: 3,
        name: "Rahul Verma",
        role: "DevOps Engineer",
        email: "rahul.verma@example.com",
        age: 31,
        gender: "Male",
        phone: "+91-9988776655",
        department: "Infrastructure",
        salary: 105000,
        location: { city: "Hyderabad", state: "Telangana", country: "India" },
        skills: ["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD", "Linux"],
        joinedAt: "2020-01-10",
        isActive: true,
        avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
        id: 4,
        name: "Sneha Patel",
        role: "Data Analyst",
        email: "sneha.patel@example.com",
        age: 27,
        gender: "Female",
        phone: "+91-9765432109",
        department: "Analytics",
        salary: 80000,
        location: { city: "Pune", state: "Maharashtra", country: "India" },
        skills: ["Python", "SQL", "Tableau", "Power BI", "Excel", "Machine Learning"],
        joinedAt: "2022-02-20",
        isActive: false,
        avatar: "https://i.pravatar.cc/150?img=9"
    },
    {
        id: 5,
        name: "Vikram Singh",
        role: "Product Manager",
        email: "vikram.singh@example.com",
        age: 34,
        gender: "Male",
        phone: "+91-9654321098",
        department: "Product",
        salary: 120000,
        location: { city: "Delhi", state: "Delhi", country: "India" },
        skills: ["Agile", "Scrum", "JIRA", "Roadmapping", "Stakeholder Management"],
        joinedAt: "2019-06-05",
        isActive: true,
        avatar: "https://i.pravatar.cc/150?img=15"
    }
]
app.get("/api/data", (req, res) => {
    res.status(200).json({
        data: data
    })
})

app.listen(3000, () => { console.log('Server is started on port 3k') })