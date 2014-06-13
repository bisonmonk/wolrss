WellFed.Views.CategoryView = Backbone.CompositeView.extend({
  initialize: function() {
    this.catTitle = this.model.attributes.title;
    this.$el.attr('id', this.catTitle);
  },
  
  className: 'category-item col-xs-4',
  
  template: JST['categories/show'],
  
  events: {
    'click .category-wrapper': 'navigateToSources'
  },
  
  navigateToSources: function() {
    Backbone.history.navigate("/categories/" + this.model.id, true);
  },
  
  //renders four inner images
  // renderBackgroundImages: function() {
  //   var four_feeds = this.model.feeds().models.slice(0, 4);
  //       
  //   four_feeds.forEach(function(feed) {
  //     var view = new WellFed.Views.FeedImageView({
  //       feed: feed
  //     });
  //     
  //     //debugger;
  //     this.addSubView("#" + this.catTitle, view.render());
  //   }, this);
  //   
  //   
  //   
  //   // <% for (var i = 0; i < four.length - 1; i++) { %>
  //   //   <img class="inner-img" src="<%= four[i].attributes.image %>" />
  //   // <% } %>
  // },
  
  render: function() {
    
    //debugger;
    //sample_article = first_feed.entries().models[0];

    var content = this.template({
      category: this.model
    });
    
    this.$el.html(content);
    //this.$el.css('background-image', 'url(' + this.model.attributes.image + ')');
    
    
    //add this categories title to its class to attach background
    //images to appropriate tile.
    //this.renderBackgroundImages();
    
    return this;
  }
});