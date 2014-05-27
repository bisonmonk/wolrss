#WellFed
##structure:
-Categories/Discover Index (Tech, Business, Marketing etc.)
--Click Tech (goes to tech index page, shows multiple sources for that topic)
---Click TechCrunch (goes to tech crunch entries index page)
----Click single TechCrunch entry (goes to entry show page)


-Categories
--Sources
---Feeds
----Entries



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
#Feed Icons

##tech
TechCrunch:https://pbs.twimg.com/profile_images/469171480832380928/rkZR1jIh.png
Verge:https://pbs.twimg.com/profile_images/1450127603/TheVerge_Badge_Color1_400x400.png
Mashable:https://pbs.twimg.com/profile_images/3690637553/5c348fee8afbcefa1978004a864a51ce_400x400.png
Wired:https://pbs.twimg.com/profile_images/378800000703426078/f0e0491c473589ad484d976ca45d712b_400x400.png
Gizmodo:https://pbs.twimg.com/profile_images/1860214036/Gizmodo-Twitter-Avatar.jpeg
Ars Technica:https://pbs.twimg.com/profile_images/2215576731/ars-logo_400x400.png
Lifehacker:https://pbs.twimg.com/profile_images/1861146796/Twitter_-_Avatar.png
Engadget:https://pbs.twimg.com/profile_images/458692107188727808/pp_QyGUm.png
Digital Trends:https://pbs.twimg.com/profile_images/3705803887/0ca54f222527b7c5efc0a30e9a367729.png
ReadWrite:https://pbs.twimg.com/profile_images/2750899250/294d9c7b13ba263c7c3f634a487d468d.jpeg
Hacker News:https://pbs.twimg.com/profile_images/712101873/Y_Combinator_Logo_400.gif

###news
NYT:https://pbs.twimg.com/profile_images/2044921128/finals.png
NPR:https://pbs.twimg.com/profile_images/1796148436/nprnews_icon.jpg
Google News:https://twitter.com/googlenews
BBC:https://pbs.twimg.com/profile_images/662708106/bbc.png
CNN:https://pbs.twimg.com/profile_images/454309589777780736/5mfxlzAs.jpeg
Reuters:https://pbs.twimg.com/profile_images/3379693153/1008914c0ae75c9efb5f9c0161fce9a2.png
VICE:https://pbs.twimg.com/profile_images/3060284671/15e9fc92457c5b7633b5378a77b80c26.jpeg
The Guardian:https://pbs.twimg.com/profile_images/2814613165/f3c9e3989acac29769ce01b920f526bb.png

###business
Business Insider:https://pbs.twimg.com/profile_images/3381256262/28c6bc5924fb01f8ba4071e8939f85d7.png
Entrepeneur:https://pbs.twimg.com/profile_images/378800000547873895/5b9b3e8bd0344ad211ca6dc55ba65178.jpeg
Venture Beat:https://pbs.twimg.com/profile_images/1818169678/VB_twitter_logo.jpg
Fast Company:https://pbs.twimg.com/profile_images/435840321952288770/IaWfR33b.png
WSJ:https://pbs.twimg.com/profile_images/458681605477785600/cFOQ_6Ox.jpeg
Business Week:https://pbs.twimg.com/profile_images/461499999121981440/6RriLE4H.jpeg
Fortune:https://pbs.twimg.com/profile_images/459373605852172288/XtTZlC8V.png
Forbes:https://pbs.twimg.com/profile_images/1824717932/Forbes_Icon.png

###finance
MarketWatch:https://pbs.twimg.com/profile_images/459467961355366400/8FyQHMZc.jpeg
Financial Times:https://pbs.twimg.com/profile_images/466976697120587776/R0Exfy1i.png
CNN Money:https://pbs.twimg.com/profile_images/1344702851/fb_cnnmoney_new_logo_avatar.jpg
WSJ Markets:https://pbs.twimg.com/profile_images/3506611410/67f4571793d00237fc10ca0df7811f09.jpeg
The Economist:https://pbs.twimg.com/profile_images/461499742950678528/2JnpHjUo.png
Freakonomics:https://pbs.twimg.com/profile_images/464517238075060225/g295Q3ey.png


###gaming
Kotaku:https://pbs.twimg.com/profile_images/378800000483599841/b1e511e53161fb612a5bf00430f9687a.png
IGN:https://pbs.twimg.com/profile_images/433413072040898560/LXg26Ea9.png
Joystiq:https://pbs.twimg.com/profile_images/979078171/joystiq-square-icon.jpg
Polygon:https://pbs.twimg.com/profile_images/2785670422/b0f08dd3b999bd0debb5352a058707aa.png
Rock, Paper, Shotgun:https://pbs.twimg.com/profile_images/1443642491/twit.jpg

###design
Abduzeedo:https://pbs.twimg.com/profile_images/453209986563207168/9Gqvw5sX.png
Design Milk:https://pbs.twimg.com/profile_images/1765276661/DMLogoTM-carton-icon-facebook-twitter.jpg
Cool Hunting:https://pbs.twimg.com/profile_images/2663871909/f4f9ce5b92cda47354bd7ec77c81cce8.png
Colossal:https://pbs.twimg.com/profile_images/450852976337248256/fOVTBYJu.png
kottke:https://pbs.twimg.com/profile_images/421227828/apple-touch-icon_400x400.png

###fashion
Style:https://pbs.twimg.com/profile_images/420194919634857985/6h-wjKyF.png
Elle:https://pbs.twimg.com/profile_images/464083215309762560/n310Hj9y.png
GQ:https://pbs.twimg.com/profile_images/459795455266680832/hm8y6ohu.jpeg
The Sartorialist:https://pbs.twimg.com/profile_images/378800000059052332/60e6bc4dfba2dacd2fd12445abd6efb3.jpeg
Vogue:https://pbs.twimg.com/profile_images/344513261577911564/0aadb575a7e2fe5092ced30a46d31ff7.png
SF Style:https://pbs.twimg.com/profile_images/2794778110/95f5e27740f4fcebcaae18598d3021b1.png

###marketing

###cooking

###diy
Make:https://pbs.twimg.com/profile_images/2603942343/3guojccznm68za2ni4mw.png
Hack A Day:https://pbs.twimg.com/profile_images/459849834854223874/LpJMRYk4.png
Adafruit Industries:https://pbs.twimg.com/profile_images/459501419813302272/SCEy7D19.png
wikiHow:https://pbs.twimg.com/profile_images/378800000614975490/47a2a293d0fc5e52089829fcbac17a54.jpeg

###photography


###entertainment

###science
Popular Science:https://pbs.twimg.com/profile_images/420188322946748416/NWIs5Tde.jpeg
Science Daily:https://pbs.twimg.com/profile_images/69944301/apple-touch-icon.png
Discover:https://pbs.twimg.com/profile_images/463337805691633664/TjVhfH63.jpeg
Nature:https://pbs.twimg.com/profile_images/1158019862/nature-header.ed.png

###sports
NYT Sports:https://pbs.twimg.com/profile_images/2045368725/NYT_Twitter_sports.png
CBS Sports:https://pbs.twimg.com/profile_images/469871112155717632/AkhCJbjZ.png
Chicago Tribune Sports:https://pbs.twimg.com/profile_images/1180148852/ct-logo-concept-3b-blank.png

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
Digital Trends:http://www.digitaltrends.com/feed/
ReadWrite:http://www.readwriteweb.com/rss.xml
Hacker News:http://feeds.feedburner.com/hacker-news-feed-50?format=xml

###News
The New York Times:http://rss.nytimes.com/services/xml/rss/nyt/InternationalHome.xml
NPR:http://www.npr.org/rss/rss.php?id=1001
Google News:http://news.google.com/?output=rss
BBC:http://feeds.bbci.co.uk/news/rss.xml
CNN:http://rss.cnn.com/rss/cnn_topstories.rss
Reuters:http://www.reuters.com/rssFeed/topNews
VICE:http://www.vice.com/rss
The Guardian:http://www.theguardian.com/uk/rss

###Business
Business Insider:http://feeds2.feedburner.com/businessinsider
Entrepeneur:http://feeds.feedburner.com/entrepreneur/latest?fmt=xml
Venture Beat:http://feeds.feedburner.com/venturebeat
Fast Company:http://feeds.feedburner.com/fastcompany/headlines
WSJ:http://online.wsj.com/xml/rss/3_7014.xml
Business Week:http://www.businessweek.com/feeds/most-popular.rss
Fortune:http://rss.cnn.com/rss/magazines_fortune.rss
Forbes:http://www.forbes.com/most-popular/feed/

###Finance
MarketWatch:http://feeds.marketwatch.com/marketwatch/topstories/
Financial Times:http://www.ft.com/rss/home/us
CNN Money:http://rss.cnn.com/rss/money_topstories.rss
WSJ Markets:http://online.wsj.com/xml/rss/3_7031.xml
The Economist:http://www.economist.com/feeds/print-sections/79/finance-and-economics.xml
Freakonomics:http://freakonomics.com/feed/


####Gaming
Kotaku:http://feeds.gawker.com/kotaku/vip
IGN:http://feeds.ign.com/ign/games-all
Joystiq:http://www.joystiq.com/rss.xml
Polygon:http://www.polygon.com/rss/index.xml
Rock, Paper, Shotgun:http://feeds.feedburner.com/RockPaperShotgun

###Design

Abduzeedo:http://feeds.feedburner.com/abduzeedo
Design Milk:http://feeds.feedburner.com/design-milk
Cool Hunting:http://www.coolhunting.com/atom.xml
Colossal:http://feeds.feedburner.com/colossal
http://feeds.kottke.org/main

###Fashion
Style:http://www.style.com/stylefile/feed/rss2
Elle:http://www.elle.com/rss/fashion/
GQ:http://www.gq.com/services/rss/feeds/latest.xml
The Sartorialist:http://feeds.feedburner.com/TheSartorialist
Vogue:http://www.vogue.com/rss/just-in/
SF Style:http://feeds.feedburner.com/SFstyle


###Marketing

###Cooking

###DIY
Make:http://blog.makezine.com/index.xml
Hack A Day:http://www.hackaday.com/rss.xml
Adafruit Industries:http://www.adafruit.com/blog/feed/
wikiHow:http://www.wikihow.com/feed.rss

###Photography


###Entertainment

###Science
Popular Science:http://feeds.popsci.com/c/34567/f/632419/index.rss
Science Daily:http://feeds.sciencedaily.com/sciencedaily/top_news
Discover:http://feeds.feedburner.com/DiscoverTopStories
Nature:http://feeds.nature.com/nature/rss/current

###Sports
NYT Sports:http://rss.nytimes.com/services/xml/rss/nyt/Sports.xml
CBS Sports:http://www.cbssports.com/partners/feeds/rss/home_news
Chicago Tribune Sports:http://feeds.feedburner.com/chicagotribune/sports

###Health

###Entrepeneur




##Extract image tags from html
###http://stackoverflow.com/questions/5813446/extract-img-tags-in-ruby
require 'nokogiri' # gem install nokogiri
doc = Nokogiri::HTML( my_html_string )
img_srcs = doc.css('img').map{ |i| i['src'] } # Array of strings

##Extract article from html
Most content containers include words entry or article
Condition: if container includes words or article and only contians <p> or <img> tags then scrape it






