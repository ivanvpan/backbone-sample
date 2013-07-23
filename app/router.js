// Defining the application router, you can attach sub routers here.
fuse.warped.Router = Backbone.Router.extend({

  routes:{
    "":"index",
    "bio/:slug":"bio"
  },

  index:function () {
    var warped = fuse.warped;

    var featured = new warped.views.Featured();
    $('#main .bio-area').empty().append(featured.$el);
    featured.render();
    //mode outside
  },

  bio: function(slug) {
    var warped = fuse.warped,
        collection = warped.app.collection;

    var selected = warped.app.collection.find(function(roadie) {
        return roadie.get('slug') === slug;
    });

    var bio = new warped.views.Bio({model: selected});
    $('#main .bio-area').empty().append(bio.$el);
    bio.render();
  }
});
