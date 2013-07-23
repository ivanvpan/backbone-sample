fuse.warped.views.CarouselItem = Backbone.View.extend({
    template: 'CarouselItem',
    tagName: 'li',
    className: 'carousel-item',
    serialize: function() {
        return this.model.toJSON();
    }
});
