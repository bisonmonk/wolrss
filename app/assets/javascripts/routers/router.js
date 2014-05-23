WellFed.Routers.Router = Backbone.Router.extend({
  routes: {
    "feeds/:id": "feedShow"
  },
  
  feedShow: function(id) {
    var feed = WellFed.Collections.feeds.getOrFetch(id);
    
    var feedView = new WellFed.Views.FeedView({
      model: feed
    });
    
    this._swapView(feedView)
  },
  
  _swapView: function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    $("#content").html(this.currentView.render().$el);
  }
});