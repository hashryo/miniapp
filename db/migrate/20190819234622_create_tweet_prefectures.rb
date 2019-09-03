class CreateTweetPrefectures < ActiveRecord::Migration[5.2]
  def change
    create_table :tweet_prefectures do |t|
      t.references :prefecture, foreign_key: true
      t.references :tweet, foreign_key: true
      t.timestamps 
    end
  end
end
