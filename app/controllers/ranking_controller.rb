class RankingController < ApplicationController
  def ranking
    user_ids = Like.group(:user_id).order('count_user_id DESC').limit(3).count(:user_id).keys
    @ranking = user_ids.map { |id| User.find(id) }
  end
end
