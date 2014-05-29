WellFed.Views.LeftBar = Backbone.View.extend({
  // className: "left-bar-wrapper",
  
  template: function() {
    if (currentUserId) {
      return JST["leftnav"];
    } else {
      return JST["guest-leftnav"];
      debugger;
      // $(".content").append(JST["modal"]);
    }
  },
  
  events: {
    "click #home": "goHome",
    "click #articles": "savedArticles",
    "click #user-feeds": "savedFeeds",
    "click #login": "showModal"
  },
  
  showModal: function() {
    $("#loginModal").modal({
      show: true,
      backdrop: true
    });
  },
  
  login: function() {
    var data = {
      entry_id: this.model.attributes.id,
      user_id: currentUserId
    };
    var userEntry = new WellFed.Models.UserEntry(data);
    userEntry.save({});
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
    var content = this.template({});
    
    this.$el.html(content);
    debugger;
    $(".container").append(JST["modal"]());
    
    return this;
  }
});