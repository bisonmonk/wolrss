class SessionsController < ApplicationController
  def new
  end
  
  def create
    @user = User.find_by_credentials(params[:user][:email],
                                     params[:user][:password])

    if @user
      sign_in!(@user)
      #redirect_to root_url
      render json: @user, status: 200
    else
      #flash.now[:errors] = ["Invalid username/password"]
      #render :new, status: 401
      render json: "wrong username/password", status: 200
    end
  end

  def destroy
    #fail
    sign_out!
    #redirect_to new_session_url
    render json: "destroyed", status: 200
  end
end
