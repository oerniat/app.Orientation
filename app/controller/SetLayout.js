// Code von hier:
// http://www.mysamplecode.com/2012/04/sencha-touch-orientation-landscape.html

Ext.define('ssbapp.controller.SetLayout', {
    extend: 'Ext.app.Controller',

    config: {
       // profile: Ext.os.deviceType.toLowerCase(),
        refs: {
            myContainer: 'mainPanel'
        },
        control: {
            'mainPanel': {
                activate: 'onActivate'
            },
            'viewport': {
                //capture the orientation change event
                orientationchange: 'onOrientationchange'
            }
        }

    },

    onActivate: function () {
        console.log('Main container is active');
    },

    init: function () {
        console.log('Controller initialized');
    },

    onOrientationchange: function (viewport, orientation, width, height) {

        console.log('Viewport orientation just changed');
        Ext.Msg.alert("xOrientation", orientation);

        //remove all the items from the main panel
        mainPanel.removeAll(false, false);

        //add the landscape panel based on orientation 
        if (orientation == 'landscape') {
            landscapePanel.add([navigationView, contentView]);
            mainPanel.add([landscapePanel]);
        }

        //add the portrait panel based on orientation 
        if (orientation == 'portrait') {
            portraitPanel.add([navigationView, contentView]);
            mainPanel.add([portraitPanel]);
        }
    },

    launch: function () {

        console.log('Controller launched');

        // In einer globalen Variable ein Single Instance der Hauptfenster-Komponenten erzeugen.
        if (ssbapp.app.currentDeviceType == 'phone') {
            // Hauptfenster für ein Smartphone erzeugen und in einer globalen Variable speichern.
            // todo
        } else {
            // Hauptfenster für ein Tablet erzeugen und in einer globalen Variable speichern.
            navigationView = Ext.widget('navigationview');
            contentView = Ext.widget('contentview');
            landscapePanel = Ext.widget('landscapePanel');
            portraitPanel = Ext.widget('portraitPanel');
        }

        mainPanel = Ext.widget('mainPanel');

        //get the device orientation
        var orientation = Ext.Viewport.getOrientation();
        Ext.Msg.alert("xOrientation", orientation);

        //you can also get the height and width and determine the
        //orientation. This code just to show how to do it. You can
        // use either approach
        //var height = Ext.Viewport.getWindowHeight();
        //var width = Ext.Viewport.getWindowWidth();

        //set panels inside the main Panel based on orientation
        if (orientation == 'landscape') {
            console.log(landscapePanel);
            landscapePanel.add([navigationView, contentView]);
            mainPanel.add([landscapePanel]);
        }
        if (orientation == 'portrait') {
            portraitPanel.add([navigationView, contentView]);
            mainPanel.add([portraitPanel]);
        }
    },

});