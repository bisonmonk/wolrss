WellFed.Views.EntryView = Backbone.View.extend({
  className: 'entry-item col-xs-6',
  
  template: JST["entries/show"],
  
  render: function() {
    var content = this.template({
      entry: this.model
    });
    
    this.$el.html(content);
    this.$el.css('background-image', 'url(' + this.model.attributes.image + ')');
    
    return this;
  }
});