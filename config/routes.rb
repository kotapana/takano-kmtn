Rails.application.routes.draw do
  get '' => "home#top"
  get 'flow' => "home#flow"
  get 'contact' => "home#contact"
  get 'voice' => "home#voice"
  get 'company' => "home#company"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
