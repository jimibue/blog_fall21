class PagesController < ApplicationController

  def index
    # pages = Page.all

    # want to test to see data bypassing the 'V'
    # render json: pages
    render component: "Pages", props: {pages:  Page.all}
  end

  def show
     # I want to find the page
    page = Page.find(params[:id])
    # render json: page
    render component: 'Page', props:{page:page}

  end

  def new
    render component: "NewPage"
  end

  def edit
    # I want to find the page
    page = Page.find(params[:id])
    render component: "EditPage", props: {page:page}
  end

  def update
    page = Page.find(params[:id])
    if page.update(page_params)
      redirect_to pages_path
    else
      #TODO handle invalid input...Later
      # render :edit
    end
  end

  def create
    # note we are not using create
    page = Page.new(page_params)
    if page.save
      # what should we do here?
      # get '/pagess'
      redirect_to pages_path
    else
      #TODO handle invalid input...Later
      # render :new
    end
  end

  def destroy
    page = Page.find(params[:id])
    page.destroy
    redirect_to pages_path
  end

  private

  def page_params
    params.require(:page).permit(:title, :author,:body)
  end


end
