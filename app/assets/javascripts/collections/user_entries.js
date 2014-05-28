WellFed.Collections.UserEntries = Backbone.Collection.extend({
  model: WellFed.Models.UserEntry,
  
  comparator: function(userEntry) {
    return -moment(userEntry.get("created_at"))._d;
  },
  
  url: function () {
    return "api/entries/user_entries"
  },
  
  getOrFetch: function(id) {
    var userEntry = this.get(id);
    
    if (userEntry) {
      return userEntry;
    } else {
      userEntry = new WellFed.Models.UserEntry({ id: id });
      userEntry.fetch({
        success: function() {
          WellFed.Collections.userEntries.add(userEntry);
        }
      });
      return userEntry
    }
  }
});