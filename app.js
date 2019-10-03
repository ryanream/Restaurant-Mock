var express = require("express"),
    app     = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

// Homepage
app.get("/", function(req, res){
    res.render("home");
});

// Menu Page
app.get("/menus", function(req, res){
    res.render("menus");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Restaurant Server is now running.");
});