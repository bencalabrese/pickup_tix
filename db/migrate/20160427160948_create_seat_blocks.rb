class CreateSeatBlocks < ActiveRecord::Migration
  def change
    create_table :seat_blocks do |t|
      t.string :style, null: false
      t.integer :section_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
