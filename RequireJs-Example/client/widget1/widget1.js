require.config({
    urlArgs: "cachebust=" + (new Date()).getTime(),
    paths: {
        /* Prefixing paths with '..' is not supported, so prefix with a known folder. */
        libs: "js/../../libs",
        require: "js/../../require",
        common: "js/../../common"
    },
    map: {
        '*': {
            'css': 'require/plugins/require-css/css',
            'less': 'require/plugins/require-less/less',
            'text': 'require/plugins/text'
        }
    },
    deps: [ "js/main" ]
});