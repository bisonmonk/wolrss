WellFed.Views.SubmitModal = Backbone.View.extend({
  initialize: function(options) {
    this.leftNavView = options.view;
    //debugger;
  },
  
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
    var that = this;
    //email and password both use to have this in front
    // var email = this.$('#email').val();
    // var password = this.$('#password').val();
    // 
    event.preventDefault();
    var email = $('#email').val();
    var password = $('#password').val();
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
      
      success: function(data) {
        window.currentUserId = data.id;
        $("#loginModal").modal('hide');
        that.leftNavView.render();
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