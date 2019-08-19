class Like < ApplicationRecord
  belongs_to :user
  belongs_to :tweet
  validates :user_id, presence: true
  validates :tweet_id, presence: true
  counter_culture :tweet
end
