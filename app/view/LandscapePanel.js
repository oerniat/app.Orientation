Ext.define('ssbapp.view.LandscapePanel', {
    extend: 'Ext.Panel',
    alias: 'widget.landscapePanel',

    requires: [
        'ssbapp.view.NavigationView',
        'ssbapp.view.ContentView'
    ],

    config: {

        layout: {
            type: 'hbox'
        },
        defaults: {
            margin: '3 3 3 3',
        },
    }
});
