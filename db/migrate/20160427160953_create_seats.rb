class CreateSeats < ActiveRecord::Migration
  def change
    create_table :seats do |t|
      t.string :name, null: false
      t.integer :seat_block_id, null: false, index: true
      
      t.timestamps null: false
    end
  end
end
