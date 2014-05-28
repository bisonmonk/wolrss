WellFed.Views.LeftBar = Backbone.View.extend({
  // className: "left-bar-wrapper",
  
  template: JST["leftnav"],
  
  events: {
    "click #home": "goHome",
    "click #articles": "listArticles",
    "click #user-feeds": "listFeeds"
  },
  
  goHome: function() {
    alert("click on home");
  },
  
  listArticles: function() {
    //alert("clicked on articles");
    $('#articles').toggleClass('clicked');
  },
  
  listFeeds: function() {
    alert("clicked on feeds");
  },
  
  render: function() {
    //debugger;
    var content = this.template({});
    
    this.$el.html(content);
    
    return this;
  }
});