Blogger.PostRoute = Ember.Route.Extend({
  model: function(params) {
    return posts.findBy('id', params.post_id);
  }
});

