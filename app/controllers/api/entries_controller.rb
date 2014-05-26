module Api
  class EntriesController < ApplicationController
    def titles
      feed = Feed.find(params[:feed_id])
      # feed.reload if Time.now - feed.updated_at > 300.seconds
      @entries = feed.entries
      #render json: feed.entries
    end
    
    def index
      feed = Feed.find(params[:feed_id])
      # feed.reload if Time.now - feed.updated_at > 300.seconds
      render json: feed.entries
    end
    
    private
    def entry_params
      params
        .require(:entry)
        .permit(:url, :title, :published_at, :feed_id, :image)
    end
  end
end