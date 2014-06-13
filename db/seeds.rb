# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
ActiveRecord::Base.transaction do
  categories = Category.create!([
    {title: "News"},
    {title: "Technology"},
    {title: "Business"},
    {title: "Finance"},
    {title: "Gaming"},
    {title: "Design"},
    {title: "Fashion"},
    {title: "Marketing"},
    {title: "Cooking"},
    {title: "DIY"},
    {title: "Photography"},
    {title: "Entertainment"},
    {title: "Science"},
    {title: "Sports"},
    {title: "Health"},
    {title: "Entrepeneur"}
  ])


  id = Category.find_by_title("News").id
  
  Feed.find_or_create_by_url("http://rss.nytimes.com/services/xml/rss/nyt/InternationalHome.xml",
  "https://pbs.twimg.com/profile_images/2044921128/finals.png", id)
  
  Feed.find_or_create_by_url("http://www.npr.org/rss/rss.php?id=1001",
  "https://pbs.twimg.com/profile_images/1796148436/nprnews_icon.jpg", id)
  
  # DOESN'T WORK 
  # Feed.find_or_create_by_url("http://news.google.com/?output=rss",
  # "https://pbs.twimg.com/profile_images/1843856587/news_icon_big.png", id)
  
  Feed.find_or_create_by_url("http://feeds.bbci.co.uk/news/rss.xml",
  "https://pbs.twimg.com/profile_images/662708106/bbc.png", id)
  
  
  
  
  Feed.find_or_create_by_url("http://rss.cnn.com/rss/cnn_topstories.rss",
  "https://pbs.twimg.com/profile_images/454309589777780736/5mfxlzAs.jpeg", id)
  
  Feed.find_or_create_by_url("http://www.reuters.com/rssFeed/topNews",
  "https://pbs.twimg.com/profile_images/3379693153/1008914c0ae75c9efb5f9c0161fce9a2.png", id)
  
  Feed.find_or_create_by_url("http://www.vice.com/rss",
  "https://pbs.twimg.com/profile_images/3060284671/15e9fc92457c5b7633b5378a77b80c26.jpeg", id)
  
  Feed.find_or_create_by_url("http://www.theguardian.com/uk/rss",
  "https://pbs.twimg.com/profile_images/2814613165/f3c9e3989acac29769ce01b920f526bb.png", id)
  

  id = Category.find_by_title("Technology").id
  
  Feed.find_or_create_by_url("http://feeds.feedburner.com/TechCrunch/?fmt=xml",
  "https://pbs.twimg.com/profile_images/469171480832380928/rkZR1jIh.png", id)
  
  Feed.find_or_create_by_url("http://www.theverge.com/rss/index.xml",
  "https://pbs.twimg.com/profile_images/1450127603/TheVerge_Badge_Color1_400x400.png", id)
  
  Feed.find_or_create_by_url("http://feeds.mashable.com/Mashable?format=xml",
  "https://pbs.twimg.com/profile_images/3690637553/5c348fee8afbcefa1978004a864a51ce_400x400.png", id)
  
  Feed.find_or_create_by_url("http://feeds.wired.com/wired/index",
  "https://pbs.twimg.com/profile_images/378800000703426078/f0e0491c473589ad484d976ca45d712b_400x400.png", id)
  
  Feed.find_or_create_by_url("http://feeds.gawker.com/gizmodo/full",
  "https://pbs.twimg.com/profile_images/1860214036/Gizmodo-Twitter-Avatar.jpeg", id)
  
  Feed.find_or_create_by_url("http://feeds.arstechnica.com/arstechnica/features",
  "https://pbs.twimg.com/profile_images/2215576731/ars-logo_400x400.png", id)
  
  Feed.find_or_create_by_url("http://lifehacker.com/rss",
  "https://pbs.twimg.com/profile_images/1861146796/Twitter_-_Avatar.png", id)
  
  Feed.find_or_create_by_url("http://www.engadget.com/rss.xml",
  "https://pbs.twimg.com/profile_images/458692107188727808/pp_QyGUm.png", id)
  
  Feed.find_or_create_by_url("http://www.digitaltrends.com/feed/",
  "https://pbs.twimg.com/profile_images/3705803887/0ca54f222527b7c5efc0a30e9a367729.png", id)
  
  Feed.find_or_create_by_url("http://www.readwriteweb.com/rss.xml",
  "https://pbs.twimg.com/profile_images/2750899250/294d9c7b13ba263c7c3f634a487d468d.jpeg", id)
  
  #DOESN'T WORK
  # Feed.find_or_create_by_url("http://feeds.feedburner.com/hacker-news-feed-50?format=xml",
  # "https://pbs.twimg.com/profile_images/712101873/Y_Combinator_Logo_400.gif", id)
  # 
  
  id = Category.find_by_title("Business").id
  
  Feed.find_or_create_by_url("http://feeds2.feedburner.com/businessinsider",
  "https://pbs.twimg.com/profile_images/3381256262/28c6bc5924fb01f8ba4071e8939f85d7.png", id)
  
  Feed.find_or_create_by_url("http://feeds.feedburner.com/entrepreneur/latest?fmt=xml",
  "https://pbs.twimg.com/profile_images/378800000547873895/5b9b3e8bd0344ad211ca6dc55ba65178.jpeg", id)
  
  Feed.find_or_create_by_url("http://feeds.feedburner.com/venturebeat",
  "https://pbs.twimg.com/profile_images/1818169678/VB_twitter_logo.jpg", id)
  
  Feed.find_or_create_by_url("http://feeds.feedburner.com/fastcompany/headlines",
  "https://pbs.twimg.com/profile_images/435840321952288770/IaWfR33b.png", id)
  
  Feed.find_or_create_by_url("http://online.wsj.com/xml/rss/3_7014.xml",
  "https://pbs.twimg.com/profile_images/458681605477785600/cFOQ_6Ox.jpeg", id)
  
  # Feed.find_or_create_by_url("http://www.businessweek.com/feeds/most-popular.rss",
  # "https://pbs.twimg.com/profile_images/461499999121981440/6RriLE4H.jpeg", id)
  
  Feed.find_or_create_by_url("http://rss.cnn.com/rss/magazines_fortune.rss",
  "https://pbs.twimg.com/profile_images/459373605852172288/XtTZlC8V.png", id)
  
  Feed.find_or_create_by_url("http://www.forbes.com/most-popular/feed/",
  "https://pbs.twimg.com/profile_images/1824717932/Forbes_Icon.png", id)
  
  
  id = Category.find_by_title("Finance").id
  # 
  # 
  Feed.find_or_create_by_url("http://feeds.marketwatch.com/marketwatch/topstories/",
  "https://pbs.twimg.com/profile_images/459467961355366400/8FyQHMZc.jpeg", id)
  
  Feed.find_or_create_by_url("http://www.ft.com/rss/home/us",
  "https://pbs.twimg.com/profile_images/466976697120587776/R0Exfy1i.png", id)
  
  Feed.find_or_create_by_url("http://rss.cnn.com/rss/money_topstories.rss",
  "https://pbs.twimg.com/profile_images/1344702851/fb_cnnmoney_new_logo_avatar.jpg", id)
  
  
  
  Feed.find_or_create_by_url("http://online.wsj.com/xml/rss/3_7031.xml",
  "https://pbs.twimg.com/profile_images/3506611410/67f4571793d00237fc10ca0df7811f09.jpeg", id)
  
  # #DOESN'T WORK
  # Feed.find_or_create_by_url("http://www.economist.com/feeds/print-sections/79/finance-and-economics.xml",
  # "https://pbs.twimg.com/profile_images/461499742950678528/2JnpHjUo.png", id)
  
  Feed.find_or_create_by_url("http://freakonomics.com/feed/",
  "https://pbs.twimg.com/profile_images/464517238075060225/g295Q3ey.png", id)
  
  
  id = Category.find_by_title("Gaming").id
  
  
  Feed.find_or_create_by_url("http://feeds.gawker.com/kotaku/vip",
  "https://pbs.twimg.com/profile_images/378800000483599841/b1e511e53161fb612a5bf00430f9687a.png", id)
  
  Feed.find_or_create_by_url("http://feeds.ign.com/ign/games-all",
  "https://pbs.twimg.com/profile_images/433413072040898560/LXg26Ea9.png", id)
  
  Feed.find_or_create_by_url("http://www.joystiq.com/rss.xml",
  "https://pbs.twimg.com/profile_images/979078171/joystiq-square-icon.jpg", id)
  
  Feed.find_or_create_by_url("http://www.polygon.com/rss/index.xml",
  "https://pbs.twimg.com/profile_images/2785670422/b0f08dd3b999bd0debb5352a058707aa.png", id)
  
  Feed.find_or_create_by_url("http://feeds.feedburner.com/RockPaperShotgun",
  "https://pbs.twimg.com/profile_images/1443642491/twit.jpg", id)
  
  
  id = Category.find_by_title("Design").id
  
  Feed.find_or_create_by_url("http://feeds.feedburner.com/abduzeedo",
  "https://pbs.twimg.com/profile_images/453209986563207168/9Gqvw5sX.png", id)
  
  Feed.find_or_create_by_url("http://feeds.feedburner.com/design-milk",
  "https://pbs.twimg.com/profile_images/1765276661/DMLogoTM-carton-icon-facebook-twitter.jpg", id)
  
  Feed.find_or_create_by_url("http://www.coolhunting.com/atom.xml",
  "https://pbs.twimg.com/profile_images/2663871909/f4f9ce5b92cda47354bd7ec77c81cce8.png", id)
  
  Feed.find_or_create_by_url("http://feeds.feedburner.com/colossal",
  "https://pbs.twimg.com/profile_images/450852976337248256/fOVTBYJu.png", id)
  
  Feed.find_or_create_by_url("http://feeds.kottke.org/main",
  "https://pbs.twimg.com/profile_images/421227828/apple-touch-icon_400x400.png", id)
  # 
  # 
  # id = Category.find_by_title("Fashion").id
  # 
  # Feed.find_or_create_by_url("http://www.style.com/stylefile/feed/rss2",
  # "https://pbs.twimg.com/profile_images/420194919634857985/6h-wjKyF.png", id)
  # 
  # Feed.find_or_create_by_url("http://www.elle.com/rss/fashion/",
  # "https://pbs.twimg.com/profile_images/464083215309762560/n310Hj9y.png", id)
  # 
  # Feed.find_or_create_by_url("http://www.gq.com/services/rss/feeds/latest.xml",
  # "https://pbs.twimg.com/profile_images/459795455266680832/hm8y6ohu.jpeg", id)
  # 
  # Feed.find_or_create_by_url("http://feeds.feedburner.com/TheSartorialist",
  # "https://pbs.twimg.com/profile_images/378800000059052332/60e6bc4dfba2dacd2fd12445abd6efb3.jpeg", id)
  # 
  # Feed.find_or_create_by_url("http://www.vogue.com/rss/just-in/",
  # "https://pbs.twimg.com/profile_images/344513261577911564/0aadb575a7e2fe5092ced30a46d31ff7.png", id)
  # 
  # Feed.find_or_create_by_url("http://feeds.feedburner.com/SFstyle",
  # "https://pbs.twimg.com/profile_images/2794778110/95f5e27740f4fcebcaae18598d3021b1.png", id)

  # Category.find_by_title("Marketing")
  # 
  # Category.find_by_title("Cooking")
  # 
  # Category.find_by_title("DIY")
  # 
  # Category.find_by_title("Photography")
  # 
  # Category.find_by_title("Entertainment")
  # 
  # Category.find_by_title("Science")
  # 
  # Category.find_by_title("Sports")
  # 
  # Category.find_by_title("Health")
  # 
  # Category.find_by_title("Entrepeneur")

end