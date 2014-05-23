WellFed.Collections.Feeds = Backbone.Collection.extend({
  model: WellFed.Models.Feed,
  
  url: "api/feeds",
  
  getOrFetch: function(id) {
    var feed = this.get(id);
    if (feed) {
      return feed;
    } else {
      feed = new WellFed.Models.Feed({ id: id });
      feed.fetch({
        success: function() {
          WellFed.Collections.feeds.add(feed);
        }
      });
      return feed;
    }
  } 
});

//WellFed.Collections.feeds = new WellFed.Collections.Feeds();