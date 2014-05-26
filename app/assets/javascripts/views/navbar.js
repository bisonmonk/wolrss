WellFed.Views.NavView = Backbone.View.extend({
  template: JST["navbar"],
  
  initialize: function() {
    // var titles = new Bloodhound({
    //   datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    //   queryTokenizer: Bloodhound.tokenizers.whitespace,
    //   limit: 12,
    //   prefetch: {
    //     url: '/api/feeds/titles',
    //     
    //     filter: function(list) {
    //       return
    //     }
    //   }
    // });
  },
  
  render: function() {
    var content = this.template({
      feed: this.model
    });
    debugger;
    this.$el.html(content);
    
    return this;
  }
});