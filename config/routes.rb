Rails.application.routes.draw do
	namespace :api do 
		namespace :v1 do
			resources :jobs, only: [:index, :create, :destroy]
		end
	end
  root to: 'main#index'
end
