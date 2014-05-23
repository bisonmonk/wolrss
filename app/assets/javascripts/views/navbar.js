WellFed.Views.NavView = Backbone.View.extend({
  template: JST["navbar"],
  
  render: function() {
    var content = this.template({
      feed: this.model
    });
    
    this.$el.html(content);
    
    return this;
  }
});