WellFed.Models.User = Backbone.Model.extend({
  parse: function (resp) {
    if(resp.feeds) {
      this.feeds().set(resp.feeds, { parse: true });
      delete resp.feeds;
    }
    return resp;
  },

  feeds: function () {
    if(!this._feeds) {                                 //maybe feed?
      this._feeds = new Trellino.Collections.Feeds([], { user: this });
    }
    return this._feeds;
  },
  
  entries: function () {
    if(!this._entries) {                                 //maybe feed?
      this._entries = new Trellino.Collections.Entries([], { user: this });
    }
    return this._entries;
  }
});