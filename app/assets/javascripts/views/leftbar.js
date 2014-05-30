WellFed.Views.LeftBar = Backbone.View.extend({
  // className: "left-bar-wrapper",
  initialize: function() {
    //this.listenTo(this, "change", this.render);
  },
  
  template: function() {
    if (currentUserId) {
      return JST["leftnav"];
    } else {
      return JST["guest-leftnav"];
    }
  },
  
  events: {
    "click #home": "goHome",
    "click #articles": "savedArticles",
    "click #prev-page": "previousPage",
    "click #user-feeds": "savedFeeds",
    "click #login": "showModal",
    "click #logout": "logOut"
  },
  
  previousPage: function() {
    Backbone.history.navigate("/categories/" + this.model.attributes.category_id, true);
  },
  
  showModal: function() {
    $(".modal-body").empty();
    $("#loginModal").modal('show');
    
    var submitModalView = new WellFed.Views.SubmitModal({
      view: this
    });
    
    $(".modal-body").html(submitModalView.render().$el);
  },
  
  goHome: function() {
    Backbone.history.navigate("", true);
  },
  
  savedArticles: function() {
    Backbone.history.navigate("entries/user_entries", true);
  },
  
  savedFeeds: function() {
    Backbone.history.navigate("feeds/user_feeds", true);
  },
  
  logOut: function() {
    var that = this;
    $.ajax("/session", {
      type: "DELETE",
      complete: function() {
        window.currentUserId = undefined;
        that.render();
      }
    });
  },
  
  render: function() {
    var content = this.template({});
    
    this.$el.html(content());
    $(".container").append(JST["modal"]());
    
    return this;
  }
});