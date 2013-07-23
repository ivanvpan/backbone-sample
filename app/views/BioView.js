fuse.warped.views.Bio = Backbone.View.extend({
    template: 'Bio',
    className: 'roadie-bio',
    serialize: function() {
        return this.model.toJSON();
    },
    afterRender: function() {
        this.bindModal('.video', this.createVideoPlayer);
        this.bindModal('.photo', this.createImageViewer);
    },
    bindModal: function(elClass, modalType) {
        var self = this;
        var $items = this.$el.find(elClass);
        $items.find('img').each(function() {
            $(this).on('click', function(e) {
                e.preventDefault();
                var $li = $(this).parents('li');
                var $prev = $li.prev().find('img');
                var $next = $li.next().find('img');
                if ($prev.length === 0) {
                    $prev = $($li.siblings()[$li.siblings().length - 1]).find('img');
                }
                if ($next.length === 0) {
                    $next = $($li.siblings()[0]).find('img');
                }

                var modal = modalType.call(self, this);
                if (modal) {
                    $('#main').append(modal.$el);
                    modal.render();
                    modal.$el.find('.prev-btn').on('click', function(e) {
                        e.preventDefault();
                            modal.remove();
                            $prev.click();
                        return false;
                    });
                    modal.$el.find('.next-btn').on('click', function(e) {
                        e.preventDefault();
                            modal.remove();
                            $next.click();
                        return false;
                    });
                }
                    return false;
            });
        });
    },
    createVideoPlayer: function(el) {
        var id = $(el).attr('data-video-src');
        var video = _.find(this.model.get('videos'), function(video) {
            return video.src == id;
        });
        if (!id) {
            return false;
        }
        return new fuse.warped.views.VideoPlayer({video: video});
    },
    createImageViewer: function(el) {
        var url = $(el).parent().attr('href');
        if (!url) {
            return false;
        }
        return new fuse.warped.views.ImageViewer({imageUrl: url});
    }
});
