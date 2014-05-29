WellFed.Views.LeftBar = Backbone.View.extend({
  // className: "left-bar-wrapper",
  
  template: function() {
    if (currentUserId) {
      return JST["leftnav"]
    } else {
      return JST["guest-leftnav"]
    }
  },
  
  events: {
    "click #home": "goHome",
    "click #articles": "savedArticles",
    "click #user-feeds": "savedFeeds"
  },
  
  goHome: function() {
    alert("click on home");
  },
  
  savedArticles: function() {
    alert("click articles")
  },
  
  savedFeeds: function() {
    alert("click feeds")
  },
  
  render: function() {
    debugger;
    var content = this.template({});
    
    this.$el.html(content);
    
    return this;
  }
});