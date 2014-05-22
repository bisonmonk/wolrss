json.extract! feed, :id, :title, :url, :created_at, :updated_at
json.entries feed.entries, partila: 'api/entries/entry', as: :entry