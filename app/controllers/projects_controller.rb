class ProjectsController < ApplicationController
  before_action :project_find, only: [:show, :edit, :update, :destroy]

  def index
    @projects = Project.all
  end

  def show
  end

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)
    if @project.save!
      redirect_to projects_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @project.update(project_params)
      redirect_to project_path
    else
      render :new
    end
  end

  def destroy
    if @project.destroy
      redirect_to projects_path
    else
      render :new
    end
  end

  private
  def project_params
    params.require(:project).permit(:name, :address, :monthly_rent, :purchase_price, :extra_works)
  end

  def project_find
    @project = Project.find(params[:id])
  end
end
