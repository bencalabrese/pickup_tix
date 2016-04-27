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

class SeatBlock < ActiveRecord::Base
end
