WellFed.Views.NavView = Backbone.View.extend({
  template: JST["navbar"],
  
  // events: {
  //   "keypress #search-input": "findItem"
  // },
  // // 
  // // initialize: function() {
  // //   //this.listenTo(this.collection, )
  // // },
  // 
  // findItem: function(event) {
  //   if (event.which === 13) {
  //     event.preventDefault();
  //     //debugger;
  //     alert("woulda searched for something");
  //   }
  // },
  
  render: function() {
    var content = this.template({
      feed: this.model
    });
    
    var locals = [];
    
    this.$el.html(content);
    
    var entryTitles = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      limit: 12,
      prefetch: "/api/feeds/" + this.model.id + "/entries/titles"
    });
      
    var feedTitles = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      limit: 12,
      prefetch: "api/feeds/titles"
    });
    
    entryTitles.initialize();
    feedTitles.initialize();
  
    this.$('#search-input .typeahead').typeahead({
      highlight: true,
      hint: false
    },
    {
      name: 'feed-titles',
      displayKey: 'title',
      source: feedTitles.ttAdapter(),
      templates: {
        header: '<div class="search-title"><strong>Feeds</strong></div>'
      }
    },
    {
      name: 'entry-titles',
      displayKey: 'title',
      source: entryTitles.ttAdapter(),  
      templates: {
        header: '<div class="search-title">Articles</div>'
      }
    }
    ).on('typeahead:selected', function(obj, datum) {
      if (!datum.feed_id) {
        Backbone.history.navigate("/feeds/" + datum.id, true);
      }
    });
    
    //debugger;
    
    return this;
  }
});


