WellFed::Application.routes.draw do
  root to: "static_pages#root"
  
  #titles for entries and feeds
  get "api/feeds/titles", to: "api/feeds#titles"
  get "api/feeds/:feed_id/entries/titles", to: "api/entries#titles"
  
  post "api/feeds/create_user_feed", to: "api/feeds#create_user_feed"
  
  #entries and feeds for a logged in user
  get "api/feeds/user_feeds", to: "api/feeds#user_feeds"
  get "api/entries/user_entries", to: "api/entries#user_entries"
  
  post "api/entries/create_user_entry", to: "api/entries#create_user_entry"
  #get "api/feeds/:feed_id/entries/user_entries", to: "api/entries#user_entries"
  
  #post "api/"
  
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :destroy]
  
  # resources :entries, only: [:create_user_entry]
  
  namespace :api, defaults: {format: :json} do 
    resources :categories, only: [:index]
    
    resources :categories, only: [:show]
    
    resources :feeds, only: [:index, :show, :create] do
      resources :entries, only: [:index, :show]
    end
  end
end
