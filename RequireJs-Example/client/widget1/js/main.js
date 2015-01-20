//main module 
define(function(require) {

    //use the simplified syntax to add dependencies 
    var data = require("js/data");
    var alerter = require("js/alerter");
    var $ = require("libs/jquery-1.11.2.min");
    var html = require("text!js/main.html");
    require("css!js/main");

    $("body").append(html);

    //call a function on each module    
    alerter.writeLog("Starting app");
    data.get("getmovies2", { id: 25 });
});