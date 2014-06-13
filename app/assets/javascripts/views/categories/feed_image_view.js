WellFed.Views.FeedImageView = Backbone.View.extend({
  initialize: function(options) {
    this.feed = options.feed;
  },
  
  template: JST["categories/feed_image"],
  
  render: function() {
    var content = this.template({
      feed_image: this.feed.attributes.image
    });
    
    this.$el.html(content);

    return this;
  }
});