WellFed.Collections.Entries = Backbone.Collection.extend({
  model: WellFed.Models.Entry,
  
  initialize: function(models, options) {
    this.feed = options.feed;
  },
  
  url: function () {
    return this.feed.url() + "/entries"
  },
  
  getOrFetch: function(id) {
    var entry = this.get(id);
    
    if (entry) {
      return entry;
    } else {
      entry = new WellFed.Models.Entry({ id: id });
      entry.fetch({
        success: function() {
          WellFed.Collections.entries.add(entry);
        }
      });
      return entry
    }
  }
});