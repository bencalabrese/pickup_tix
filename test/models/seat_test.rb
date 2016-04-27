# == Schema Information
#
# Table name: seats
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  seat_block_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class SeatTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
