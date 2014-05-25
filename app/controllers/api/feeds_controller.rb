module Api
  class FeedsController < ApplicationController
    def new
    end
    
    def index
      @feeds = Feed.includes(:entries).all
      
      @feeds.each do |feed|
        feed.reload if Time.now - feed.updated_at > 300.seconds
      end
      
      render :index
      # format.json { sleep(2); render :json => @feeds.to_json(include: :entries) }
      #render :json => @feeds.to_json(include: :entries)
    end
    
    def show
      @feed = Feed.find(params[:id])
      
      # fail
      
      @feed.reload if Time.now - @feed.updated_at > 300.seconds
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
    
  end
end
