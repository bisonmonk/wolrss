#WellFed
##structure:
-Categories/Discover Index (Tech, Business, Marketing etc.)
--Click Tech (goes to tech index page, shows multiple sources for that topic)
---Click TechCrunch (goes to tech crunch entries index page)
----Click single TechCrunch entry (goes to entry show page)







##Searching content
####JS Library: typeahead.js
in feeds and entries controller
make custom route
FeedsController
  def titles
    Feed.pluck(:name, :id)
  end
end