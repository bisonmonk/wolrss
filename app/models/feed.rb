load 'opengraph.rb'
#http://rocky-atoll-7262.herokuapp.com/
class Feed < ActiveRecord::Base
  #validates :title, :url, presence: true
  
  has_many :entries, dependent: :destroy
  has_many :user_feeds
  has_many :users, through: :user_feeds
  
  def self.find_or_create_by_url(url)
    feed = Feed.find_by_url(url)
    return feed if !feed.nil?
    
    feed_data = Feedjira::Feed.fetch_and_parse(url)
    
    if feed_data.is_a?(Fixnum)
      return nil
    end

    feed = Feed.new(title: feed_data.title, url: feed_data.feed_url)
    
    feed.save
    
    0.upto(feed_data.entries.length - 1) do |index|
      Feed.add_entry!(feed_data.entries[index], feed.id)
    end
    
    return feed
  end
  
  def self.add_entry!(entry, feed_id)
    new_entry = Entry.new()
    new_entry.url = entry.url
    new_entry.title = entry.title
    new_entry.feed_id = feed_id
    new_entry.published_at = entry.published
    
    og = OpenGraph.fetch(entry.url)
    
    #if open graph object exists / is not false
    if og
      new_entry.image = og.image
      #new_entry.summary = og.description
    else
      #set attrs to shitty defaults
      new_entry.image = entry.image || Feed.find_image(entry.summary)
      new_entry.summary = entry.summary
    end
    
    new_entry.save!
  end
  
  #finds an image url if it exists and returns it
  def self.find_image(data)
    tags = Nokogiri::HTML(data)
    imgs = tags.css('img').map { |i| i['src'] }
    imgs.each do |img|
      if (img.include?(".jpg") || img.include?(".png"))
        return img
      end
    end
    return nil
  end
end
