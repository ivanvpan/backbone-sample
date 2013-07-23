fuse.warped.views.Carousel = Backbone.View.extend({
    template: 'Carousel',
    className: 'carousel',

    events: {
    },

    initialize: function() {
    },

    beforeRender: function() {
        fuse.warped.app.collection.each(function(model) {
            this.insertView('ul', new fuse.warped.views.CarouselItem({
                model: model
            }));
        }, this);
    },
    afterRender: function() {
        var $wrapper = this.$el.find('.list-wrapper');
        $wrapper.jcarousel({
            wrap: 'circular'
        });
        this.$el.find('.scroll-left').on('click', function(e){
            e.preventDefault();
            $wrapper.jcarousel('scroll', '-=8');
            return false;
        });
        this.$el.find('.scroll-right').on('click', function(e){
            e.preventDefault();
            $wrapper.jcarousel('scroll', '+=8');
            return false;
        });
    }
});
