WellFed.Views.EntryView = Backbone.View.extend({
  className: 'entry-item col-xs-4',
  
  template: JST["entries/show"],
  
  events: {
    "click span.glyphicon-bookmark":"bookmarkEntry"
  },
  
  bookmarkEntry: function() {
    //alert("clicked a bookmark");
    if (currentUserId !== 'undefined') {
      //debugger;
      alert("clicked a bookmark");
      var data = {
        title: this.model.attributes.id,
        feed_id: this.model.attributes.feed_id,
        user_id: currentUserId
      }  
    } else {
      alert("show modal to sign up user")
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