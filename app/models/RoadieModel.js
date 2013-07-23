fuse.warped.models.RoadieModel = Backbone.Model.extend({
    defaults:{
        name: '',
        bio: '',
        interview: '',
        carouselImage: null,
        bioImage: null,
        videos: [],
        images: [],
    },

    initialize: function() {
        var slug = this.get('name').toLowerCase().replace(/ /g,'-').replace(/[^\w\-]+/g,'');
        this.set('slug', slug);

        var firstname = this.get('name').split(' ')[0];
        this.set('firstname', firstname);
    }
});
