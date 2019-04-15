class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :address
      t.integer :monthly_rent
      t.integer :purchase_price
      t.integer :extra_works

      t.timestamps
    end
  end
end
