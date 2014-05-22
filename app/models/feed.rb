load 'opengraph.rb'
#http://rocky-atoll-7262.herokuapp.com/
class Feed < ActiveRecord::Base
  validates :title, :url, presence: true
  
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

    #if there the image attribute is nil
    if entry.image.nil?
      #use og image or, last resort, img tag src attribute
      new_entry.image = Feed.find_og_image(entry.url) || Feed.find_image(entry.summary)
    else
      new_entry.image = entry.image
    end
    #debugger
    new_entry.save!
  end
  
  #find an og:image in page header
  def self.find_og_image(url)
    og = OpenGraph.fetch(url)
    if !og
      return nil
    end 
    return og.image
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
