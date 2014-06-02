module Api
  class EntriesController < ApplicationController
    def user_entries
      if signed_in?
        @user_entries = current_user.entries
      else
        render status: :no_content
        #render :json => { error: @user_entries.errors.full_messages }, status: :unprocessable_entity
      end
    end
    
    def create_user_entry
      if signed_in?
        ue = UserEntry.new
        ue.user_id = params[:user_id]
        ue.entry_id = params[:entry_id]
        ue.save
        if ue.save
          render json: ue
          #render :status [200]
        else
          render :json => { error: ue.errors.full_messages }, status: :unprocessable_entity
        end
      end
    end
    
    def titles
      feed = Feed.find(params[:feed_id])
      # feed.reload if Time.now - feed.updated_at > 300.seconds
      @entries = feed.entries
      #render json: feed.entries
    end
    
    def index
      feed = Feed.find(params[:feed_id])
      # feed.reload if Time.now - feed.updated_at > 300.seconds
      #limit the number of entries to 50 for a specific feed
      render json: feed.entries.limit(50)
    end
    
    private
    def entry_params
      params
        .require(:entry)
        .permit(:url, :title, :published_at, :feed_id, :image)
    end
  end
end