WellFed.Views.CategoriesView = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    this.categoryData = [];
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
      
      this.categoryData.push(titleAndImage);
      
      this.addSubView('#categories', view.render());
    }, this);
  },
  
  renderBackgroundImages: function(category) {
    //debugger;
    var four_feeds = category.feeds().slice(0, 4);
    
    four_feeds.forEach(function(feed) {
      var view = new WellFed.Views.FeedImageView({
        feed: feed
      });
      
      //debugger;
      this.addSubView("#" + category.attributes.title, view.render());
    }, this);
    
    
    
    // <% for (var i = 0; i < four.length - 1; i++) { %>
    //   <img class="inner-img" src="<%= four[i].attributes.image %>" />
    // <% } %>
  },
  
  render: function() {
    var content = this.template({
      categories: this.collection
    });
        
    this.$el.html(content);
    
    this.renderCategories();
    
    if (this.categoryData.length > 0) {
      var that = this;
      this.collection.each(function(category) {
        that.renderBackgroundImages(category);
      });
      // for (var i = 0; i < this.categoryData.length; i++) {
      //   var selector = this.categoryData[i][0];
      //   var image = this.categoryData[i][1];
      //   this.renderBackgroundImages(selector, image);
      // }
      // 
      // this.catTitle = this.model.attributes.title;
      // this.$el.attr('id', this.catTitle);
      // this.renderBackgroundImages();
    }
    
    //debugger;
    
    return this;
  }
});