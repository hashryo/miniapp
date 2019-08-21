class Rocordss < ActiveRecord::Migration[5.2]
  def change
    drop_table :tweet_prefectures
  end
end
