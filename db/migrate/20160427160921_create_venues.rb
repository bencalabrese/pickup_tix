class CreateVenues < ActiveRecord::Migration
  def change
    create_table :venues do |t|
      t.string :name, null: false, index: true, unique: true

      t.timestamps null: false
    end
  end
end
