WellFed.Views.FeedShow = Backbone.View.extend({
  className: "feed",
  
  template: JST["feeds/show"],
  
  events: {
    
  },
  
  render: function() {
    var renderableContent = this.template({
      feed: this.model,
    });
    
    this.$el.html(renderableContent);
    
    var entriesView = new WellFed.Views.EntriesView({
      collection: this.model.entries()
    });
    
    this.$('#entries').html(entriesView.render().$el);
    
    return this;
  }
});