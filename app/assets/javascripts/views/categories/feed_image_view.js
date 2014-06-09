WellFed.Views.FeedImageView = Backbone.View.extend({
  template: ["categories/feed_image"],
  
  render: function() {
    var content = this.template({
      
    });
    
    this.$el.html(content);
    
    return this;
  }
});