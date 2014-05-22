class RemoveGuidLinkJsonFromEntriesAddUrlImage < ActiveRecord::Migration
  def change
    rename_column :entries, :guid, :url
    remove_column :entries, :link
    
    add_column :entries, :image, :string
    
    remove_column :entries, :json
  
  end
end
