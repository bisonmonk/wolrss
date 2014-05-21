####WellFed



####Searching content
####JS Library: typeahead.js
in feeds and entries controller
make custom route
FeedsController
  def titles
    Feed.pluck(:name, :id)
  end
end