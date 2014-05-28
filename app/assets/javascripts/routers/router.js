WellFed.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "categoriesIndex",
    "categories/:id": "categoryShow",
    "feeds/:id": "feedShow",
    "feeds/user_feeds": "usersFeedsIndex"
  },
  
  //page with each category listed
  //each category goes to that category's show page
  categoriesIndex: function() {
    var categoriesView = new WellFed.Views.CategoriesView({
      collection: WellFed.Collections.categories
    });
    
    WellFed.Collections.categories.fetch();
    this._swapView(categoriesView);
  },
  
  categoryShow: function(id) {
    //var
    var category = WellFed.Collections.categories.getOrFetch(id);
    //debugger;
    var sourcesView = new WellFed.Views.SourcesView({
      model: category
    });
    
    //WellFed.Collections.categories.fetch();
    
    this._swapView(sourcesView);
  },
  
  feedShow: function(id) {
    var feed = WellFed.Collections.feeds.getOrFetch(id);
    
    var feedView = new WellFed.Views.FeedView({
      model: feed,
      collection: WellFed.Collections.titles
    });
    
    WellFed.Collections.titles.fetch();
    
    this._swapView(feedView);
  },
  
  userFeedsIndex: function() {
    var userFeedsView = new WellFed.Views.UserFeedsView({
      collection: WellFed.Collections.userFeeds
    });
    
    WellFed.Collections.userFeeds.fetch();
    this._swapView(userFeedsView);
  },
  
  userFeedShow: function(id) {
    var user_feed = WellFed.Collections.userFeeds.getOrFetch(id);
    
    var feedView = new WellFed.Views.FeedView({
      model: feed,
      collection: WellFed.Collections.titles
    });
    
    WellFed.Collections.titles.fetch();
    
    this._swapView(feedView);
  },
  
  _swapView: function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    $("#content").html(this.currentView.render().$el);
  }
});