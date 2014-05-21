WellFed::Application.routes.draw do
  root to: "static_pages#root"
  
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :destroy]
  
  namespace :api, defaults: {format: :json} do 
    resources :feeds, only: [:index, :show, :create] do
      resources :entries, only: [:index, :show]
    end
  end
end
