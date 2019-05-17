class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :shhhhht]

  def home
  end

  def shhhhht
  end

end
