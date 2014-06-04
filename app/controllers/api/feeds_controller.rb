module Api
  class FeedsController < ApplicationController
    def titles
      @feeds = Feed.all
    end
  
    def user_feeds
      if signed_in?
        @user_feeds = current_user.feeds
      else
        render :json => { error: @user_feeds.errors.full_messages }, status: :unprocessable_entity
      end
    end
    
    def user_feed_entries
      if signed_in?        
        @user_entries = []
        
        current_user.feeds.each do |feed|
          @user_entries.concat(feed.entries)
        end
        
        render json: @user_entries
      else
        render :json => { error: @user_entries.errors.full_messages }, status: :unprocessable_entity
      end
    end
    
    def create_user_feed
      if signed_in?
        uf = UserFeed.new
        uf.user_id = params[:user_id]
        uf.feed_id = params[:feed_id]
        uf.save
        if uf.save
          render json: uf
          #render :status [200]
        else
          render :json => { error: uf.errors.full_messages }, status: :unprocessable_entity
        end
      end
    end
    
    def new
    end
    
    def index
      #@feeds = Feed.includes(:entries).all
      @feeds = Feed.all
      
      #Just do for a feed when you show it not for every feed, takes way too long.
      # @feeds.each do |feed|
      #   feed.reload if Time.now - feed.updated_at > 300.seconds
      # end
      
      render :index
    end
    
    def show
      @feed = Feed.find(params[:id])#.entries.limit(50)
      
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
