WellFed.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "categoriesIndex",
    "categories/:id": "categoryShow",
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
    var feeds = WellFed.Collections.categories.getOrFetch(id);
    
    var categoryView = new WellFed.Views.CategoryView({
      
    });
    
    this._swapView(categoryView);
  },
  
  feedShow: function(id) {
    var feed = WellFed.Collections.feeds.getOrFetch(id);
    
    var feedView = new WellFed.Views.FeedView({
      model: feed
    });
    
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