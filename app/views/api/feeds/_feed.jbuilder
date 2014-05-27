json.extract! feed, :id, :title, :url, :created_at, :updated_at, :image
json.entries feed.entries, partial: 'api/entries/entry', as: :entry