
const express = require("express");
const morgan = require("morgan");



const app = express();



app.use (express.static("public")); 
app.use(express.json()); 
app.use(morgan("dev")); 






app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get("/blog", (req, res) => {
    res.sendFile(__dirname + "/views/blog.html");
});

app.get("/data/projects", (req, res)=> {
    res.json(projects);
});

app.get("/data/articles", (req, res) => {
    res.json(articles);
});

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/views/not-found.html");
});






app.listen(5005, () => {
    console.log("Server listening port 5005");
});


