#WellFed
##structure:
-Categories/Discover Index (Tech, Business, Marketing etc.)
--Click Tech (goes to tech index page, shows multiple sources for that topic)
---Click TechCrunch (goes to tech crunch entries index page)
----Click single TechCrunch entry (goes to entry show page)


-Categories
--Feeds
---Entries



#Changes to entry data
###Remove published_at - not standardized
###Remove json
##Differences between feedjira and simple-rss
###guid in simple-rss is url in feedjira 


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

###News
The New York Times:http://rss.nytimes.com/services/xml/rss/nyt/InternationalHome.xml
NPR:http://www.npr.org/rss/rss.php?id=1001
BBC:http://feeds.bbci.co.uk/news/rss.xml
CNN:http://rss.cnn.com/rss/cnn_topstories.rss
Reuters:http://www.reuters.com/rssFeed/topNews
  -img:http://s1.reutersmedia.net/resources/r/?m=02&d=20140521&t=2&i=898791334&w=&fh=&fw=&ll=580&pl=378&r=CBREA4K17S000

###Business
Business Insider:http://feeds2.feedburner.com/businessinsider
Entrepeneur:http://feeds.feedburner.com/entrepreneur/latest?fmt=xml

####Gaming
Kotaku:http://feeds.gawker.com/kotaku/vip
 -img: data-asset-url=\"http://i.kinja-img.com/gawker-media/image/upload/s--4wrJkwnq--/bw0isqudsymclfmsfdku.png\"
 
IGN:http://feeds.ign.com/ign/games-all

Joystiq:http://www.joystiq.com/rss.xml
Polygon:
Rock, Paper, Shotgun:


##Extract image tags from html
###http://stackoverflow.com/questions/5813446/extract-img-tags-in-ruby
require 'nokogiri' # gem install nokogiri
doc = Nokogiri::HTML( my_html_string )
img_srcs = doc.css('img').map{ |i| i['src'] } # Array of strings






