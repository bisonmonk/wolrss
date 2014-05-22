module Api
  class FeedsController < ApplicationController
    def new
    end
    
    def index
      @feeds = Feed.includes(:entries).all
      
      # format.json { sleep(2); render :json => @feeds.to_json(include: :entries) }
    end
    
    def show
      @feed = Feed.find(params[:id])
      
      render partial: "api/feeds/feed", locals: { feed: @feed }
    end
    
    def create
      @feed = find_or_create_by_url(feed_params[:feed][:url])

      if @feed
        @feed.reload
        render :json => @feed.to_json(include: :entries)
      else
        render :json => { error: @feed.errors.full_messages }, status: :unprocessable_entity
      end
    end
    
    private
    
    load 'opengraph.rb'
    
    def feed_params
      params.require(:feed).permit(:title, :url)
    end
    # 
    # def self.find_or_create_by_url(url)
    #   feed = Feed.find_by_url(url)
    #   return feed if !feed.nil?
    # 
    #   feed_data = Feedjira::Feed.fetch_and_parse(url)
    # 
    #   if feed_data.is_a?(Fixnum)
    #     return nil
    #   end
    # 
    #   feed = Feed.new(title: feed_data.title, url: feed_data.feed_url)
    #   feed.save
    # 
    #   0.upto(feed.entries.length) do |index|
    #     Feed.add_entry!(feed_data.entries[index], feed.id)
    #   end
    # 
    #   return feed
    # end
    #   
    # def add_entry!(entry, feed_id)
    #   new_entry = Entry.new()
    #   new_entry.url = entry.url
    #   new_entry.title = entry.title
    #   new_entry.feed_id = feed_id
    #   new_entry.published_at = entry.published
    # 
    #   #if there the image attribute is nil
    #   if entry.image.nil?
    #     #use og image or, last resort, img tag src attribute
    #     new_entry.image = find_og_image(entry.url) || find_image(entry.summary)
    #   else
    #     new_entry.image = entry.image
    #   end
    #   #debugger
    #   new_entry.save
    # end
    #   
    # #find an og:image in page header
    # def find_og_image(url)
    #   og = OpenGraph.fetch(url)
    #   return og.image
    # end
    #   
    # #finds an image url if it exists and returns it
    # def find_image(data)
    #   tags = Nokogiri::HTML(data)
    #   imgs = tags.css('img').map { |i| i['src'] }
    #   imgs.each do |img|
    #     if (img.include?(".jpg") || img.include?(".png"))
    #       return img
    #     end
    #   end
    #   return nil
    # end
    
  end
end
