import express from "express";
import jwt from "jsonwebtoken";


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});


app.post("/api/register", (req, res) => {
    const { username, email, password } = req.body;

    const token = jwt.sign({ username, email }, "b6cc40ded10176d3225e79ba5adc352ae3e9895c1af5b0035fd6ef176c8ee1ef0fc7cac13e3e53abd7ea1dd48fc2bf68", { expiresIn: "15m" });

    res.status(201).json({ 
        message: "User registered successfully",
        data:{
            user:{username, email},
            token
        }
    });
});

export default app;