WellFed.Views.SourcesView = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.model, 'sync', this.render)
  },
  
  template: JST["sources/index"],
  
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
    
    this.renderSources();
    return this;
  }
});