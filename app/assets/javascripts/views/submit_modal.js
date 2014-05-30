WellFed.Views.SubmitModal = Backbone.View.extend({
  events: {
    "submit": "createSession"
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
    var email = this.$('#email').val();
    var password = this.$('#password').val();
    //debugger;
    //debugger;
    $.ajax("/session", {
      type: "POST", 
      dataType: "JSON", 
      data: {
        user: {
          email: email, 
          password: password
        }
      },
      
      success: function() {
        console.log("great success!");
        $("#loginModal").modal({
          show: false
        });
      }
    });
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