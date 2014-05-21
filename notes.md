#WellFed
##structure:
-Categories/Discover Index (Tech, Business, Marketing etc.)
--Click Tech (goes to tech index page, shows multiple sources for that topic)
---Click TechCrunch (goes to tech crunch entries index page)
----Click single TechCrunch entry (goes to entry show page)


-Categories
--Feeds
---Entries




##Searching content
####JS Library: typeahead.js
in feeds and entries controller
make custom route
FeedsController
  def titles
    Feed.pluck(:name, :id)
  end
end

#Feeds

###Tech
TechCrunch:http://feeds.feedburner.com/TechCrunch/?fmt=xml
The Verge:http://www.theverge.com/rss/index.xml
Mashable:http://feeds.mashable.com/Mashable?format=xml
Wired:http://feeds.wired.com/wired/index
Gizmodo:http://feeds.gawker.com/gizmodo/full
Ars Technica:http://feeds.arstechnica.com/arstechnica/features
Lifehacker:http://lifehacker.com/rss
Engadget:http://www.engadget.com/rss.xml




