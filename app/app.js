(function (warped) {

    // Provide a global location to place configuration settings and module
    // creation.
    var app = {
        // The root path to run the application.
        root:"/apps/warped/",
        collection: new warped.collections.RoadieCollection()
    };

    // Make app a global event bus
    _.extend(app, Backbone.Events);

    // Localize or create a new JavaScript Template object.
    var JST = window.JST = window.JST || {};

// Configure LayoutManager with Backbone Boilerplate defaults.
  Backbone.LayoutManager.configure({
    manage:true,

    paths:{
      layout:"app/template/layouts/",
      template:"app/template/"
    },

    fetch:function (path) {
      path = path + ".hbs";

      if (!JST[path]) {
        $.ajax({ url:app.root + path, async:false }).then(function (contents) {
          JST[path] = Handlebars.compile(contents); //_.template(contents);
        });
      }

      return JST[path];
    },

    render:function (template, context) {
      return template(context);
    }
  });

  warped.app = app;
})(fuse.warped);
