window.WellFed = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    //Will probably change to sources later
    
    
    WellFed.Collections.feeds = new WellFed.Collections.Feeds();
    WellFed.Collections.userFeeds = new WellFed.Collections.UserFeeds();
    WellFed.Collections.titles = new WellFed.Collections.Titles();
    WellFed.Collections.categories = new WellFed.Collections.Categories();
    
    WellFed.Collections.feeds.fetch({
      success: function() {
        new WellFed.Routers.Router(WellFed.Collections.feeds);
        Backbone.history.start();
      }
    });
  }
};

$(document).ready(function(){
  WellFed.initialize();
});
