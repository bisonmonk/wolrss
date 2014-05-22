load 'opengraph.rb'

class Feed < ActiveRecord::Base
  validates :title, :url, presence: true
  
  has_many :entries, dependent: destroy
  has_many :user_feeds
  has_many :users, through: :user_feeds
  
  def self.find_or_create_by_url(url)
    feed = Feed.find_by_url(url)
    return feed if !feed.nil?
    
    feed_data = Feedjira::Feed.fetch_and_parse(url)
    
    if feed_data.is_a?(Fixnum)
      return nil
    end

    feed = Feed.create!(title: feed_data.title, url: feed_data.feed_url)
    
    entries.each do |entry|
      add_entry!(entry, feed)
    end
  end
  
  def add_entry!(entry, feed)
    new_entry = Entry.new()
    new_entry.url = entry.url
    new_entry.title = entry.title
    new_entry.feed_id = feed.id
    new_entry.published_at = entry.published

    #if there the image attribute is nil
    if entry.image.nil?
      #use og image or, last resort, img tag src attribute
      new_entry.image = find_og_image(entry.url) || find_image(entry.summary)
    else
      new_entry.image = entry.image
    end
    new_entry.save!
  end
  
  #find an og:image in page header
  def find_og_image(url)
    og = OpenGraph.fetch(url)
    return og.image
  end
  
  #finds an image url if it exists and returns it
  def find_image(data)
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
