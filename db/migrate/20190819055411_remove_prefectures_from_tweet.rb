class RemovePrefecturesFromTweet < ActiveRecord::Migration[5.2]
  def change
    remove_column :tweets, :prefectures, :string
  end
end
