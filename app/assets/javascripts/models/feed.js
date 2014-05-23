WellFed.Models.Feed = Backbone.Model.extend({
  urlRoot: "/api/feeds",
  
  entries: function() {
    if (!this._entries) {
      this._entries = new WellFed.Collections.Entries([], {
        feed: this
      });
    }
    
    return this._entries;
  },
  
  parse: function(resp) {
    if (resp.entries) {
      var list = new WellFed.Models.Entry();
      
      this.entries().set(resp.entries, { parse: true });
      delete resp.entries
    }
    return resp;
  }
});