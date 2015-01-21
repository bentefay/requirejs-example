define(function (require) {
    var alerter = require("./alerter");

    function get(number) {
        alerter.writeLog(number + " working!");
    }

    return {
        get: get
    };
});
