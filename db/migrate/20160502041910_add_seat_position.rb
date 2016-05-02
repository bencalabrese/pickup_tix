class AddSeatPosition < ActiveRecord::Migration
  def change
    add_column :seats, :row, :integer, null: false
    add_column :seats, :col, :integer, null: false
  end
end
