Rails.application.routes.draw do
  devise_for :users
  resources :projects
  get '/pages/shhhhht', to: 'pages#shhhhht', as: 'shhhhht'
  root to: 'pages#home'
end
