module Api
  class FeedsController < ApplicationController
    def index
      @feeds = Feed.includes(:entries).all
      
      # format.json { sleep(2); render :json => @feeds.to_json(include: :entries) }
    end
    
    def show
      @feed = Feed.find(params[:id])
      
      render partial: "api/feeds/feed", locals: { feed: @feed }
    end
    
    def create
      @feed = Feed.find_or_create_by_url(feed_params[:feed][:url])

      if @feed
        @feed.reload
        render :json => @feed.to_json(include: :entries)
      else
        render :json => { error: @feed.errors.full_messages }, status: :unprocessable_entity
      end
    end
    
    private
    
    def feed_params
      params.require(:feed).permit(:title, :url)
    end
  end
end
