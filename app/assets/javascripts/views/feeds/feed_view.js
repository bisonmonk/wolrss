WellFed.Views.FeedView = Backbone.CompositeView.extend({
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  className: "feed container",
  
  template: JST["feeds/show"],
  
  renderNav: function() {
    var navView = new WellFed.Views.NavView({
      model: this.model,
      collection: this.collection
    });
    
    $("#navigation").html(navView.render().$el);
  },
  
  renderEntries: function() {
    debugger;
    this.model.entries().each(function(entry) {
      var entryView = new WellFed.Views.EntryView({
        model: entry
      });
      this.addSubView("#entries", entryView.render());
    }, this);
  },
  
  render: function() {
    var content = this.template({
      feed: this.model,
    });
    
    this.$el.html(content);
    
    //add nav bar to top
    this.renderNav();
    
    this.renderEntries();
    
    return this;
  }
});