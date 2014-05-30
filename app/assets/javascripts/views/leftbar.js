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
      //debugger;
      // $(".content").append(JST["modal"]);
    }
  },
  
  events: {
    "click #home": "goHome",
    "click #articles": "savedArticles",
    "click #user-feeds": "savedFeeds",
    "click #login": "showModal",
    "click #logout": "logOut"
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
    alert("click articles");
  },
  
  savedFeeds: function() {
    //alert("click feeds")
    Backbone.history.navigate("feeds/user_feeds", true);
  },
  
  logOut: function() {
    var that = this;
    $.ajax("/session", {
      type: "DELETE",
      complete: function() {
        window.currentUserId = undefined;
        debugger;
        that.render();
        //Backbone.history.navigate("", true);
        //WANT TO RERENDER, NEED TO REDELEGATE EVENTS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //that.render();
        //debugger;
      }
    });
  },
  
  render: function() {
    //debugger;
    var content = this.template({});
    
    this.$el.html(content());
    //debugger;
    $(".container").append(JST["modal"]());
    
    return this;
  }
});