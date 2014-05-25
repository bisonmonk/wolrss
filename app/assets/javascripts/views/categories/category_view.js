WellFed.Views.CategoryView = Backbone.View.extend({
  className: 'category-item col-xs-4',
  
  template: JST['categories/show'],
  
  events: {
    'click .category-wrapper': 'navigateToSources'
  },
  
  navigateToSources: function() {
    //debugger;
    Backbone.history.navigate("/categories/" + this.model.id, true);
    //alert("would navigate if i could");
  },
  
  render: function() {
    first_feed = this.model.feeds().models[0];
    sample_article = first_feed.entries().models[0];

    var content = this.template({
      category: this.model,
      article: sample_article
    });
    
    
    
    this.$el.html(content);
    this.$el.css('background-image', 'url(' + sample_article.attributes.image + ')');
    
    return this;
  }
});