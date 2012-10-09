Ext.define('ssbapp.view.MainPanel', {
    extend: 'Ext.Panel',
    alias: 'widget.mainPanel',

    requires: [
        'ssbapp.view.LandscapePanel',
        'ssbapp.view.PortraitPanel'
    ],

    config: {

        fullscreen: true,
        layout: {
            type: 'fit'
        },
        items: [
            {
                //xtype: 'landscapePanel',
            }
        ]
    }
});