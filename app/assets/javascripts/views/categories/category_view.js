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
  
  render: function() {
    var content = this.template({
      category: this.model
    });
    
    this.$el.html(content);
    
    return this;
  }
});