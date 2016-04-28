# == Schema Information
#
# Table name: tickets
#
#  id             :integer          not null, primary key
#  performance_id :integer          not null
#  seat_id        :integer          not null
#  user_id        :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class TicketTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
