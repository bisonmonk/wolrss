WellFed.Views.NavView = Backbone.View.extend({
  template: JST["navbar"],
  
  render: function() {
    var title = this.model.attributes.title;
    var count = "";
    if (!!this.model.entries) {
      count = this.model.entries().models.length + " articles";
    }
        
    var content = this.template({
      title: title,
      count: count
      //feed: this.model
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
        header: '<div class="search-title">Feeds</div>'
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
    
    return this;
  }
});


