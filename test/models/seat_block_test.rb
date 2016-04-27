# == Schema Information
#
# Table name: seat_blocks
#
#  id         :integer          not null, primary key
#  style      :string           not null
#  section_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class SeatBlockTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
