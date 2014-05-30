WellFed.Views.SubmitModal = Backbone.View.extend({
  events: {
    "click #submit-modal": "createSession"
  },
  
  template: JST['login_form'],
  
  render: function() {
    var content = this.template({
    });
    
    this.$el.html(content);
    return this;
  },
  
  createSession: function(event) {
    event.preventDefault();
    
    alert("wooo hooo")
    //debugger;
    // $.ajax("/session", {
    //   type: "POST", 
    //   dataType: "JSON", 
    //   data: {
    //     user: {
    //       email: "matt", 
    //       password: "password"
    //     }
    //   } 
    // });
  }
});

// $.ajax("api/auth/logged_in", {
//   type: "GET",
//   dataType: "json",
//   success: function() {
//     return callback(true);
//   },
//   error: function() {
//     return callback(false);
//   }
// });