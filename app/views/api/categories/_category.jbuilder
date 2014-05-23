json.extract! category, :id, :title, :created_at, :updated_at
json.feeds category.feeds, partial: 'api/feeds/feed', as: :feed