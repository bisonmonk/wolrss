WellFed.Views.EntryView = Backbone.View.extend({
  className: 'entry-item col-xs-4',
  
  template: JST["entries/show"],
  
  events: {
    "click span.glyphicon-bookmark":"bookmarkEntry"
  },
  
  bookmarkEntry: function() {
    alert("clicked a bookmark");
  },
  
  render: function() {
    var content = this.template({
      entry: this.model
    });
    
    this.$el.html(content);
    this.$el.css('background-image', 'url(' + this.model.attributes.image + ')');
    
    return this;
  }
});