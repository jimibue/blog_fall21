Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources :pages
   root 'pages#index'

   get 'pages', to: "pages#index"
   get 'pages/new', to:"pages#new"
   get 'pages/:id', to:"pages#show"
   get 'pages/:id/edit', to:"pages#edit"

   post 'pages', to:'pages#create'
   put 'pages/:id', to:"pages#update"
   patch 'pages/:id', to:"pages#update"
   delete 'pages/:id', to:"pages#destroy"
end
