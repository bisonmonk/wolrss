WellFed.Views.CategoriesView = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  template: JST['categories/index'],
  
  renderCategories: function() {
    
    var that = this;
    
    this.collection.each(function(category) {
      var view = new WellFed.Views.CategoryView({
        model: category
      });
      this.addSubView('#categories', view.render());
    }, this);
  },
  
  render: function() {
    var content = this.template({
      categories: this.collection
    });
    
    this.$el.html(content);
    
    this.renderCategories();
    return this;
  }
});