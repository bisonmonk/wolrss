WellFed.Models.Category = Backbone.Model.extend({
  urlRoot: "/api/categories/",
  
  feeds: function() {
    if (!this._feeds) {
      this._feeds = new WellFed.Collections.Feeds([], {
        feed: this
      });
    }
    return this._feeds;
  },
  
  parse: function(resp) {
    if (resp.feeds) {      
      this.feeds().set(resp.feeds, { parse: true });
      delete resp.feeds
    }
    return resp;
  }
});