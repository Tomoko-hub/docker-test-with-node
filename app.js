const express = require("express");

const app = express();

app.get("/", (req, res)=> {
    res.send("<h1>Node.js with docker works!Here comes some change.</h1>")
});

app.listen(5000, ()=>{
    console.log("App running on port 5000!");
})