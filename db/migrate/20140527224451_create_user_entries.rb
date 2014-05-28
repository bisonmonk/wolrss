class CreateUserEntries < ActiveRecord::Migration
  def change
    create_table :user_entries do |t|
      t.integer :user_id
      t.integer :entry_id
      
      t.timestamps
    end
    
    add_index :user_entries, :user_id
    add_index :user_entries, :entry_id
  end
end
