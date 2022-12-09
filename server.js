var port = 9901;
var url = "http://localhost:" + 9966;

var express = require("express");
var app = express();
app.use((req, res, next) => {
    console.log(`req url ===> `,req.url);
    next();
});
var nodeApp = require("./nodeApp");
nodeApp(url, app);

console.log("listening on " + url);
app.listen(port);