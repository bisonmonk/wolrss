WellFed.Views.EntryView = Backbone.View.extend({
  className: 'entry-item',
  
  template: JST["entries/show"],
  
  events: {
    
  },
  
  render: function() {
    var content = this.template({
      entry: this.model
    });
    
    this.$el.html(content);
    
    this.$el.css('background-image', 'url(' + this.model.image + ')');
    
    return this;
  }
});