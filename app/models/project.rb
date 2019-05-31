class Project < ApplicationRecord
  belongs_to :user
  validates :name, :address, :purchase_price, :monthly_rent, :extra_works, presence: true

  def acquisition_full_price
    ((self.purchase_price * 1.15) + self.extra_works)
  end

  def acquisition_value
    self.purchase_price + self.extra_works
  end

  def acquisition_cash
    acquisition_full_price / 3
  end

  def rental_yield
    ((self.monthly_rent * 10) / acquisition_full_price * 100).round(2)
  end

  def capital_gain_10(rate: 0.03, years: 10)
    (self.acquisition_value * (((1 + rate)**years)) - self.acquisition_full_price).round(0)
  end

  def capital_gain_15(rate: 0.03, years: 15)
    (self.acquisition_value * (((1 + rate)**years)) - self.acquisition_full_price).round(0)
  end

  def project_return_15
    (((acquisition_value + capital_gain_15) - acquisition_cash) / acquisition_cash).round(2) + 1
  end
end
