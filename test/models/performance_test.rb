# == Schema Information
#
# Table name: performances
#
#  id           :integer          not null, primary key
#  datetime     :datetime         not null
#  spectacle_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class PerformanceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
