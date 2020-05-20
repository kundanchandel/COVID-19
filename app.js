var express = require("express")
var fetch   = require("node-fetch")
var app     = express()

app.get("/", async function(req, res){
    fetch("https://api.rootnet.in/covid19-in/stats/latest")
    .then(res => res.json())
    .then((data) => {
        // do something with JSON
        res.render("index.ejs", {data: data})
        console.log(data)
    });
})

app.listen(7000, function(){
    console.log("Server is running...")
})
