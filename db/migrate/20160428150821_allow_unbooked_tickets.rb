class AllowUnbookedTickets < ActiveRecord::Migration
  def change
    change_column :tickets, :user_id, :integer, null: true
  end
end
