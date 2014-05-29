WellFed.Views.EntryView = Backbone.View.extend({
  className: 'entry-item col-xs-4',
  
  template: JST["entries/show"],
  
  render: function() {
    //debugger;
    var content = this.template({
      entry: this.model.attributes
    });
    
    this.$el.html(content);
    
    this.$el.css('background-image', 'url(' + this.model.attributes.image + ')');
    
    return this;
  }
});