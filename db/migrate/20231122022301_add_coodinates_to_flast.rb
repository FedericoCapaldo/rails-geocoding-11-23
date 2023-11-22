class AddCoodinatesToFlast < ActiveRecord::Migration[7.0]
  def change
    add_column :flasts, :latitude, :float
    add_column :flasts, :longitude, :float
  end
end
