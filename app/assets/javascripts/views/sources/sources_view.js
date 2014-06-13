WellFed.Views.SourcesView = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },
  
  className: "sources container",
  
  template: JST["sources/index"],
  
  renderNav: function() {
    var navView = new WellFed.Views.NavView({
      model: this.model,
      collection: this.collection,
      //need to modify this to make it more pertinent
      //maybe change the controller give entries for
      //each feed in sources
      entryUrl: "api/feeds",
      feedUrl: "/api/feeds",
      title: this.model.attributes.title,
      count: ""
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
    var feeds = this.model.feeds();
    feeds.each(function(feed) {
      var view = new WellFed.Views.SourceView({
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