require.config({
    baseUrl: "../../",
    urlArgs: "cachebust=" + (new Date()).getTime(),
    paths: {
      js: "widget1/js"
    },
    map: {
        '*': {
            'css': 'require/plugins/require-css/css',
            'text': 'require/plugins/text'
        }
    },
    deps: [ "js/main" ]
});