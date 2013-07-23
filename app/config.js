// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps:["main"],

  paths:{
    // JavaScript folders.
    libs:"../assets/js/libs",
    plugins:"../assets/js/plugins",

    // Libraries.
    jquery:"../assets/js/libs/jquery",
    lodash:"../assets/js/libs/lodash",
    backbone:"../assets/js/libs/backbone",
    moment:"../assets/js/libs/moment",
    bootstrap:"../assets/js/libs/bootstrap",
    hbs:'../assets/js/plugins/hbs',
    handlebars:'../assets/js/libs/handlebars',
    
    // External
    fbui:"//connect.facebook.net/en_US/all.js"
  },

  shim:{
    // Backbone library depends on lodash and jQuery.
    backbone:{
      deps:["lodash", "jquery"],
      exports:"Backbone"
    },

    // Backbone.LayoutManager depends on Backbone.
    "plugins/backbone.layoutmanager":["backbone"],

    // jQuery Plugins
    "jquery.countdown":["jquery"]
  }

});
