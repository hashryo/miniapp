class Rocords < ActiveRecord::Migration[5.2]
  def change
    drop_table :like_users
  end
end