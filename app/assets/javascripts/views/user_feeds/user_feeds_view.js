WellFed.Views.UserFeedsView = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
  },
  
  className: "sources container",
  
  template: JST["sources/index"],
  
  renderNav: function() {
    //debugger;
    var navView = new WellFed.Views.NavView({
      model: this.model,
      collection: this.collection,
      feedUrl: "/api/feeds/user_feeds",
      entryUrl: "/api/feeds/user_feeds/entries",
      title: "My Feeds"
    });
    
    $("#navigation").html(navView.render().$el);
  },
  
  renderLeftNav: function() {
    var leftNavView = new WellFed.Views.LeftBar({
      model: this.model
    });
    
    $("#left-navigation").html(leftNavView.render().$el);
  },
  
  renderSources: function() {
    //var feeds = this.model.feeds();
    this.collection.each(function(feed) {
      //debugger;
      var view = new WellFed.Views.UserFeedView({
        model: feed
      });
      this.addSubView('#feeds', view.render());
    }, this);
  },
  
  render: function() {
    var content = this.template({

    });
        
    this.$el.html(content);
    
    this.renderNav();
    this.renderLeftNav();
    
    this.renderSources();
    return this;
  }
});