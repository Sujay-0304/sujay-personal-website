
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set ('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req,res){
    res.render("home")
});
app.get("/home", function(req,res){
    res.render("home")
});
app.get("/about_me", function(req,res){
    res.render("about_me")
});

app.get("/skills", function(req,res){
    res.render("skills")
});

app.get("/projects", function(req,res){
    res.render("projects")
});
app.get("/contact_me", function(req,res){
    res.render("contact_me")
});
app.get("/project1", function(req,res){
    res.render("project1")
});
app.get("/thanks", function(req,res){
    res.render("thanks")
});









app.listen(process.env.PORT || 3000,function() {
    console.log("server started at 3000");
});