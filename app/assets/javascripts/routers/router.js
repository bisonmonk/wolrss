WellFed.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "categoriesIndex",
    "categories/:id": "categoryShow",
    "feeds/user_feeds": "userFeedsIndex",
    "entries/user_entries": "userEntriesIndex",
    "feeds/:id": "feedShow"
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
    var category = WellFed.Collections.categories.getOrFetch(id);

    var sourcesView = new WellFed.Views.SourcesView({
      model: category
    });
    
    //WellFed.Collections.categories.fetch();
    
    this._swapView(sourcesView);
  },
  
  userFeedsIndex: function() {
    var userFeedsView = new WellFed.Views.UserFeedsView({
      collection: WellFed.Collections.userFeeds
    });
    //debugger;
    WellFed.Collections.userFeeds.fetch();
    this._swapView(userFeedsView);
  },
  
  userEntriesIndex: function() {
    var userEntriesView = new WellFed.Views.UserEntries({
      collection: WellFed.Collections.userEntries
    });
    WellFed.Collections.userEntries.fetch();
    this._swapView(userEntriesView);
  },
  
  feedShow: function(id) {
    //debugger;
    var feed = WellFed.Collections.feeds.getOrFetch(id);
        
    var feedView = new WellFed.Views.FeedView({
      model: feed,
      collection: WellFed.Collections.titles
    });
    
    WellFed.Collections.titles.fetch();
    
    this._swapView(feedView);
  },
  // 
  // userFeedShow: function(id) {
  //   var user_feed = WellFed.Collections.userFeeds.getOrFetch(id);
  //   
  //   var feedView = new WellFed.Views.FeedView({
  //     model: feed,
  //     collection: WellFed.Collections.titles
  //   });
  //   
  //   WellFed.Collections.titles.fetch();
  //   
  //   this._swapView(feedView);
  // },
  
  _swapView: function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    $("#content").html(this.currentView.render().$el);
  }
});