WellFed.Views.EntriesView = Backbone.View.extend({
  tagName: "ul",
  
  render: function() {
    var that = this;
    
    this.collection.each(function(entry) {
      var entryView = new WellFed.Views.EntryView({
        model: entry
      });
      
      that.$el.append(entryView.render().$el);
    });
    return this;
  }
});