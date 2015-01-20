define(function (require) {
    var $ = require("libs/jquery-1.11.2.min");
    var logs = [];
    function log(message) {
        logs.push(message);
        $('<p>').html(message).appendTo('body');
    };
    return {
        writeLog: log,
        logs: logs
    };
});