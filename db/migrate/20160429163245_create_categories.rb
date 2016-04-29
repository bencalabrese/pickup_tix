class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :name, null: false, index: true, unique: true
      t.timestamps null: false
    end

    add_column :spectacles, :category_id, :integer, index: true, null: false
  end
end
