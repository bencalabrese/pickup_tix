# == Schema Information
#
# Table name: spectacles
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  image_url   :string           not null
#  venue_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class SpectacleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
