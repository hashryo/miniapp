class AddLikesCountToLikes < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :likes_count, :integer, null: false, default: 0 unless column_exists? :tweets, :likes_count
  end
end
