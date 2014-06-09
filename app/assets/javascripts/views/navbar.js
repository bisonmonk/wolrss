WellFed.Views.NavView = Backbone.View.extend({
  initialize: function(options) {
    this.listenTo(this.model, "change", this.render)
    this.entryUrl = options.entryUrl;
    this.feedUrl = options.feedUrl;
    this.title = options.title;
    this.count = options.count;
  },
  
  events: {
    "click #to-top": "toTop",
    "click #refresh": "refreshCollection",
  },
  
  refreshCollection: function() {
    this.model.fetch();
  },
  
  toTop: function() {
    $('body').animate({'scrollTop': 0}, 500)
  },
  
  template: JST["navbar"],
  
  entryEngine: function() {
    return new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      limit: 8,
      prefetch: {
        url: this.feedUrl,
        ttl: 30
      }
      //prefetch: this.entryUrl
    });
  },
  
  feedEngine: function() {
    return new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      limit: 8,
      prefetch: {
        url: this.feedUrl,
        ttl: 30
      }
      // prefetch: this.feedUrl
    });
  },
  
  render: function() {
    var content = this.template({
      title: this.title,
      count: this.count
    });
    
    this.$el.html(content);
    
    var entryTitles = this.entryEngine();
      
    var feedTitles = this.feedEngine();
    
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
    ).on('typeahead:selected', function(event, datum) {
      //issue: only returns 112 datums not all of them???
      //
      if (!datum.feed_id) {
        //debugger;
        Backbone.history.navigate("/feeds/" + datum.id, {trigger: true});
      } else {
        window.open(datum.url, '_blank')
      }
    });
    
    return this;
  }
});


