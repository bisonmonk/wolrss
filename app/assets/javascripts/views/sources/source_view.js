WellFed.Views.SourceView = Backbone.View.extend({
  className: 'source-item col-xs-4',
  
  template: JST["sources/show"],
  
  events: {
    'click .source-wrapper': 'navigateToSource'
  },
  
  navigateToSource: function() {
    Backbone.history.navigate("/feeds/" + this.model.id, true);
  },
  
  render: function() {
    var sample_article = this.model.entries().models[1];
    var content = this.template({
      source: this.model,
      sample_article: sample_article
    });
    
    this.$el.html(content);
    this.$el.css('background-image', 'url(' + sample_article.attributes.image + ')');
    
    return this;
  }
});