class Tweet < ApplicationRecord
  belongs_to :user
  has_many :likes, dependent: :destroy
  has_many :iine_users, through: :likes, source: :user
  has_many :tweet_prefectures, dependent: :destroy
  has_many :prefectures, through: :tweet_prefectures, dependent: :destroy
 

  def iine?(user)
    iine_users.include?(user)
  end

  def uniine(user)
    likes.find_by(user_id: user.id).destroy
  end

  def iine(user)
    likes.create(user_id: user.id)
  end
end
