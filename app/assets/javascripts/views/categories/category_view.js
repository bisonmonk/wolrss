WellFed.Views.CategoryView = Backbone.View.extend({
  template: JST['categories/show'],
  
  render: function() {
    var content = this.template({
      category: this.model
    });
    
    this.$el.html(content);
    
    return this;
  }
});