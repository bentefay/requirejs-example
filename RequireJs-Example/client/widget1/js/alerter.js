define(function (require) {
    var $ = require("libs/jquery-1.11.2.min");

    function log(message) {
        $('<p>').html(message).appendTo('body');
    };
    return {
        writeLog: log
    };
});