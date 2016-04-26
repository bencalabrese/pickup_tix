class Api::SessionsController < ApplicationController
  before_action :require_logged_in, only: :destroy

  def create
    @user = User.find_by_credentials(session_params)

    if @user
      login!(@user)
      render :show
    else
      @errors = ["Invalid Credentials"]
      render "api/errors" , status: 403
    end
  end

  def destroy
    @user = current_user
    logout!
    render :show
  end

  private
  def session_params
    params.require(:user).permit(:username, :password)
  end
end
