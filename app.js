const express = require("express");
const app = express();
const path = require("path");

app.listen(process.env.PORT || 3000, () => {
    console.log("Server 3030 is running.")
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.use(express.static("public"));

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.post("/crear",(req,res)=>{
    res.send("Recibi un formulario.")
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});