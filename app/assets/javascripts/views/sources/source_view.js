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
    //debugger;
    var sample_article = this.model.entries().models[1];
    var content = this.template({
      title: this.model.attributes.title
    });
    
    this.$el.html(content);
    this.$el.css('background-image', 'url(' + this.model.attributes.image + ')');
    
    return this;
  }
});