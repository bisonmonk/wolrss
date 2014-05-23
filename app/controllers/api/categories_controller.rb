module Api
  class CategoriesController < ApplicationController
    def index
      @categories = Category.includes(:feeds).all
      render :index
    end
    
    def show
      @category = Category.find(params[:id])
      
      render partial: "api/categories/category", locals: { category: @category }
    end
  end
end