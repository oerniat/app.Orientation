Ext.define('ssbapp.view.PortraitPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.portraitPanel',

    requires: [
        'ssbapp.view.NavigationView',
        'ssbapp.view.ContentView'
    ],

    config: {

        layout: {
            type: 'vbox'
        },
        defaults: {
            margin: '3 3 3 3',
        }
    }
});