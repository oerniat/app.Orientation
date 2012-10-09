Ext.Loader.setConfig({
    enabled: true
});

//<debug>
Ext.Loader.setPath({
    'Ext': 'lib/st2/src'
});
//</debug>

/**
 * Ext.application is the heart of your app. It sets the application name, can specify the icon and startup images to
 * use when your app is added to the home screen, and sets up your application's dependencies - usually the models,
 * views and controllers that your app uses.
 */
Ext.application({
    name: 'ssbapp',

    // **********************************************************************
    // ** Globale Variablen
    // **********************************************************************

    // Aktueller DeviceTyp.
    currentDeviceType: undefined,

    glossOnIcon: false,
    icon: {
        57: 'resources/icons/icon.png',
        72: 'resources/icons/icon@72.png',
        114: 'resources/icons/icon@2x.png',
        144: 'resources/icons/icon@114.png'
    },

    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    currentConstants: undefined,

    stores: [
    ],

    models: [
    ],

    //loads the views used by the app from the app/view folder
    views: [
        'MainPanel',
        'ContentView',
        'NavigationView',
        'PortraitPanel',
        'LandscapePanel',
    ],

    controllers: [
        'SetLayout',
    ],

    //the Kitchen Sink has Phone and Tablet modes, which rearrange the screen based on the type
    //of device detected
 //   profiles: ['Tablet', 'Phone'],

    //profiles: {
    //    portraitPhone: function() {
    //        return Ext.is.Phone && Ext.orientation == 'portrait';
    //    },
    //    landscapePhone: function() {
    //        return Ext.is.Phone && Ext.orientation == 'landscape';
    //    },
    //    portraitTablet: function() {
    //        return !Ext.is.Phone && Ext.orientation == 'portrait';
    //    },
    //    landscapeTablet: function() {
    //        return !Ext.is.Phone && Ext.orientation == 'landscape';
    //    }
    //},

    launch: function () {

        if (Ext.os.is.Phone) {
            this.currentDeviceType = 'phone';
        } else {
            this.currentDeviceType = 'tablet';
        }

        Ext.Viewport.on('orientationchange', 'handleOrientationChange', this, { buffer: 50 }); // todo

    },

    

});
