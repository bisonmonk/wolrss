class Entry < ActiveRecord::Base
  validates :title, :url, :published_at, :feed_id, presence: true
  
  belongs_to :feed
end
