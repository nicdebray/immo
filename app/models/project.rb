class Project < ApplicationRecord
  belongs_to :user
  validates :name, presence: true
  validates :address, presence: true
  validates :purchase_price, presence: true
  validates :monthly_rent, presence: true
  validates :extra_works, presence: true


  def rental_yield
    ((self.monthly_rent * 10) / ((self.purchase_price * 1.15) + self.extra_works) * 100).round(2)
  end

end
