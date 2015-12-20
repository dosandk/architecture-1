define(
    [
        'lib/backbone'
    ],
    function(Backbone) {
        console.log('Backbone', Backbone);

        var App = {
            ping: function() {
                console.error('this id global App');
            }
        };

        window.App = App;

        return App;
    }
);

