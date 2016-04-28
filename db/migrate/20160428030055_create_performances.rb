class CreatePerformances < ActiveRecord::Migration
  def change
    create_table :performances do |t|
      t.datetime :datetime, null: false
      t.integer :spectacle_id, null: false, index: true

      t.timestamps null: false
    end

    add_index :performances, [:spectacle_id, :datetime], unique: true
  end
end
