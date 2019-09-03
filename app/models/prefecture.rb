class Prefecture < ApplicationRecord
  has_many :tweet_prefectures, dependent: :destroy
  has_many :tweets, through: :tweet_prefectures, dependent: :destroy
end
