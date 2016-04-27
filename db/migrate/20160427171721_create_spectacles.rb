class CreateSpectacles < ActiveRecord::Migration
  def change
    create_table :spectacles do |t|
      t.string :title, null: false, index: true, unique: true
      t.text :description, null: false
      t.string :image_url, null: false
      t.integer :venue_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
