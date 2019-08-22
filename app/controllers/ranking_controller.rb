class RankingController < ApplicationController
  before_action :ranking
  def ranking
    user_ids = Like.group(:user_id).order('count_user_id ASC').limit(5).count(:user_id).keys
    @ranking = user_ids.map { |id| User.find(id) }
  end
end
