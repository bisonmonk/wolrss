WellFed.Views.LeftBar = Backbone.View.extend({
  // className: "left-bar-wrapper",
  
  template: JST["leftnav"],
  
  render: function() {
    //debugger;
    var content = this.template({});
    
    this.$el.html(content);
    
    return this;
  }
});