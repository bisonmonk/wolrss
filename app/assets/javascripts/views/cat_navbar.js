WellFed.Views.CatNav = Backbone.View.extend({
  initialize: function(options) {
    this.feedUrl = options.feedUrl;
  },
  
  events: {
    "click #to-top": "toTop"
  },
  
  toTop: function() {
    $('body').animate({'scrollTop': 0}, 500)
  },
  
  template: JST["cat_nav"],
  
  feedEngine: function() {
    return new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('title'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      limit: 8,
      prefetch: {
        url: this.feedUrl,
        ttl: 30
      }
    });
  },
  
  render: function() {
    var content = this.template({
      // title: this.title,
      // count: this.count
    });
    
    this.$el.html(content);
    
    var feedTitles = this.feedEngine();
    
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

