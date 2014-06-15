WellFed.Views.CategoriesView = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    this.categoryData = false;
  },
  
  template: JST['categories/index'],
  
  renderCategories: function() {
    this.collection.each(function(category) {
      var view = new WellFed.Views.CategoryView({
        model: category
      });
      //debugger;
      //couplet containing the title and the image
      var titleAndImage = ["#" + category.attributes.title,
                           category.attributes.image];
      
      this.categoryData = true;
      
      this.addSubView('#categories', view.render());
    }, this);
  },
  
  //add this category's title to its class to attach background
  //images to appropriate tile.
  renderBackgroundImages: function(category) {
    var four_feeds = category.feeds().slice(0, 4);
    
    four_feeds.forEach(function(feed) {
      var view = new WellFed.Views.FeedImageView({
        feed: feed
      });
      
      this.addSubView("#" + category.attributes.title, view.render());
    }, this);
  },
  
  renderCategoryNav: function() {
    var catNavView = new WellFed.Views.CatNav({
      // model: this.model,
      // collection: this.collection,
      feedUrl: "/api/feeds"
    });
    //this.addSubView("#navigation", catNavView.render());
    $("#navigation").html(catNavView.render().$el);
  },
  
  render: function() {
    var content = this.template({
      categories: this.collection
    });
        
    this.$el.html(content);
    
    this.renderCategories();
    
    this.renderCategoryNav();
    
    if (this.categoryData) {
      var that = this;
      this.collection.each(function(category) {
        that.renderBackgroundImages(category);
      });
    }
    
    return this;
  }
});