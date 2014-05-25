WellFed.Collections.Categories = Backbone.Collection.extend({
  model: WellFed.Models.Category,
  
  url: "api/categories",
  
  getOrFetch: function(id) {
    var category = this.get(id);
    if (category) {
      return category;
    } else {
      category = new WellFed.Models.Category({ id: id });
      category.fetch({
        success: function() {
          WellFed.Collections.categories.add(category);
        }
      });
      return category;
    }
  }
});