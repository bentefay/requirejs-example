
define(function(require) {
    var data = require("./data");
    var alerter = require("./alerter");
    var $ = require("libs/jquery-1.11.2.min");
    var html = require("text!./main.html");
    require("less!./main");

    $("body").append(html);    
    alerter.writeLog("Two working :)");
    data.get("Three");
});