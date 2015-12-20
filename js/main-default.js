require.config({
    paths: {
        underscore: 'lib/underscore',
        jquery: 'lib/jquery'
    },
    shim: {
        /*jquery: {
         deps: ['helpers/jquery'],
         exports: '$'
         }*/
    },
    // Turn of loading timeout
    waitSeconds: 0
});
