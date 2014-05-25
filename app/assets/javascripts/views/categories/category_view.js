WellFed.Views.CategoryView = Backbone.View.extend({
  template: JST['categories/show'],
  
  render: function() {
    first_feed = this.model.feeds().models[0];
    sample_article = first_feed.entries().models[0];

    var content = this.template({
      category: this.model,
      article: sample_article
    });
    
    this.$el.html(content);
    
    return this;
  }
});