fuse.warped.views.VideoPlayer = Backbone.View.extend({
  template:'VideoPlayer',
  className:'videoPlayer warped-modal',

  initialize:function () {
  },

  serialize: function() {
      var video = this.options.video;
      _.extend(video, {width: 620, height: 350});
      video[video.resourceType] = true;
      return video;
  },

  afterRender: function() {
      this.$el.find('.close-modal').on('click', _.bind(function(e) {
          e.preventDefault();
          this.remove();
          return false;
      }, this));
  }
});
