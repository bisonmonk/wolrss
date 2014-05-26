WellFed.Views.LeftBar = Backbone.View.extend({
  className: "left-bar-wrapper",
  
  template: JST["leftbar"],
  
  render: function() {
    debugger;
    var content = this.template({});
    
    this.$el.html(content);
    
    return this;
  }
});