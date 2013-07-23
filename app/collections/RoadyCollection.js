fuse.warped.collections.RoadyCollection = Backbone.Collection.extend({
    model: fuse.warped.models.RoadieModel,
    url: '/apps/warped/app/mockdata/data.json',
    parse: function(response) {
        return response.roadies;
    },
    select: function(slug) {
        this.each(function(model) {
            model.set('selected', (model.get('slug') === slug));
        });
    }
});
