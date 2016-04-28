class CreateTickets < ActiveRecord::Migration
  def change
    create_table :tickets do |t|
      t.integer :performance_id, null: false
      t.integer :seat_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index :tickets, [:seat_id, :performance_id], unique: true
  end
end
