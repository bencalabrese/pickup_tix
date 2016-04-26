class Api::UsersController < ApplicationController
  before_action :require_logged_in, only: [:show, :destroy]

  def show
    @user = current_user
    render :show
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      @errors = @user.errors.full_messages
      render "api/errors", status: 403
    end
  end

  def destroy
    @user = current_user.destroy
    render :show
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
