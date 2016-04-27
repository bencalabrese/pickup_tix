class CreateSections < ActiveRecord::Migration
  def change
    create_table :sections do |t|
      t.string :name, null: false
      t.integer :venue_id, null: false, index: true
      
      t.timestamps null: false
    end
  end
end
