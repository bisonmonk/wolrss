window.WellFed = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    //Will probably change to sources later
    WellFed.Collections.feeds = new WellFed.Collections.Feeds();
    WellFed.Collections.feeds.fetch({
      success: function() {
        new WellFed.Routers.Router();
        Backbone.history.start();
      }
    });
  }
};

$(document).ready(function(){
  WellFed.initialize();
});
