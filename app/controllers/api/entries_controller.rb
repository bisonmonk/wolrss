module Api
  class EntriesController < ApplicationController
    def index
      feed = Feed.find(params[:feed_id])
      feed.reload if Time.now - feed.updated_at > 5.seconds
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