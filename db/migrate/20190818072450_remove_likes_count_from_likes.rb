class RemoveLikesCountFromLikes < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :likes_count, :integer
  end
end
