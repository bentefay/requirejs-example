//main module 
define(function(require) {

    //use the simplified syntax to add dependencies 
    var data = require("./data");
    var alerter = require("./alerter");
    var $ = require("libs/jquery-1.11.2.min");
    var html = require("text!./main.html");
    require("css!./main");

    $("body").append(html);    
    alerter.writeLog("Two working :)");
    data.get("Three");
});