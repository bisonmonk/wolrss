WellFed.Views.EntryView = Backbone.View.extend({
  className: 'entry-item col-xs-4',
  
  template: JST["entries/show"],
  
  events: {
   "click span.glyphicon-bookmark":"bookmarkEntry",
  },

  bookmarkEntry: function() {
   if (currentUserId !== 'undefined') {
     var data = {
       entry_id: this.model.attributes.id,
       user_id: currentUserId
     };
     var userEntry = new WellFed.Models.UserEntry(data);
     userEntry.save({});
   
   } else {
     alert("show modal to sign up user");
   }
  },
  
  render: function() {
    //debugger;
    var content = this.template({
      entry: this.model.attributes
    });
    
    this.$el.html(content);
    
    this.$el.css('background-image', 'url(' + this.model.attributes.image + ')');
    
    return this;
  }
});