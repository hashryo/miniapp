class RemoveMicropostIdFromLikes < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :micropost_id, :integer
  end
end
