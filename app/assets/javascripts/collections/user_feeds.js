WellFed.Collections.UserFeeds = Backbone.Collection.extend({
  model: WellFed.Models.UserFeed,
  
  url: "api/feeds/user_feeds",
  
  getOrFetch: function(id) {
    var userFeed = this.get(id);
    if (userFeed) {
      return userFeed;
    } else {
      userFeed = new WellFed.Models.UserFeed({ id: id });
      userFeed.fetch({
        success: function() {
          WellFed.Collections.userFeeds.add(userFeed);
        }
      });
      return userFeed;
    }
  } 
});