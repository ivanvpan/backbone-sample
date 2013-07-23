fuse.warped.views.ImageViewer = Backbone.View.extend({
  template:'ImageViewer',
  className:'imageViewer warped-modal',

  initialize:function () {
  },

  serialize: function() {
      var image = {imageUrl: this.options.imageUrl};
      return image;
  },

  afterRender: function() {
      this.$el.find('.close-modal').on('click', _.bind(function(e) {
          e.preventDefault();
          this.remove();
          return false;
      }, this));
  }
});
