WellFed.Collections.Titles = Backbone.Collection.extend({
  model: WellFed.Models.Title,
  
  url: "api/feeds/titles",
  
  getOrFetch: function(id) {
    var title = this.get(id);
    if (title) {
      return title;
    } else {
      title = new WellFed.Models.Title({ id: id });
      title.fetch({
        success: function() {
          WellFed.Collections.titles.add(title);
        }
      });
      return title;
    }
  } 
});