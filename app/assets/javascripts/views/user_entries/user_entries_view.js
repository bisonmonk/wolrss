WellFed.Views.UserEntries = Backbone.View.extend({
  //tagName: "ul",
  initialize: function() {
    this.listenTo(this.collection, "sync", this.render);
  },
  
  // renderNav: function() {
  //   var navView = new WellFed.Views.NavView({
  //     model: this.model,
  //     collection: this.collection,
  //     entryUrl: "/api/feeds/" + this.model.id + "/entries",
  //     feedUrl: "/api/feeds",
  //     title: this.model.attributes.title,
  //     count: this.model.entries().models.length + " articles"
  //   });
  //   
  //   $("#navigation").html(navView.render().$el);
  // },
  // 
  renderLeftNav: function() {
    var leftNavView = new WellFed.Views.LeftBar({
      model: this.model
    });
    
    $("#left-navigation").html(leftNavView.render().$el);
  },
  
  render: function() {
    var that = this;
    
    this.collection.each(function(entry) {
      var entryView = new WellFed.Views.EntryView({
        model: entry
      });
      
      that.$el.append(entryView.render().$el);
    });
    
    this.renderLeftNav();
    
    return this;
  }
});