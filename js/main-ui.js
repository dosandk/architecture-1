require(
    [
        'main-default',
        'app'
    ],
    function(rConfig, App) {
        console.log(arguments);
        if (!Backbone.History || !Backbone.History.started) {

            //App.create('Router', 'router-ui', 'default');
            Backbone.history.start();
        }
    }
);
