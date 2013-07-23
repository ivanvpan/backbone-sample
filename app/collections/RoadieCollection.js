fuse.warped.collections.RoadieCollection = Backbone.Collection.extend({
    model: fuse.warped.models.RoadieModel,
    url: '/apps/warped/app/mockdata/data.json',
    parse: function(response) {
        return response.roadies;
    }
});
