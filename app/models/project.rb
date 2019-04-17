class Project < ApplicationRecord
  belongs_to :user

  def rental_yield
    ((self.monthly_rent * 10) / ((self.purchase_price * 1.15) + self.extra_works)*100).round(2)
  end

end
