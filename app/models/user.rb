# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  attr_reader :password

  validates :password_digest, presence: true
  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  has_many :tickets
  has_many :booked_performances,
    through: :tickets,
    source: :performance
  has_many :booked_spectacles,
    through: :booked_performances,
    source: :spectacle

  def self.find_by_credentials(opts)
    user = find_by_username(opts[:username])

    user && user.is_password?(opts[:password]) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    save!
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password);
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def upcoming_performances
    subquery = booked_performances.where("datetime > ?", DateTime.now)
                                  .group(:id)
                                  .select("COUNT(*) AS num_tickets")
                                  .select(:id, :datetime)
                                  .to_sql

    Spectacle.joins(:performances)
             .joins("INNER JOIN (#{subquery}) as booked_shows ON booked_shows.id = performances.id")
             .select("booked_shows.id, booked_shows.datetime, booked_shows.num_tickets, spectacles.title")
             .order("booked_shows.datetime DESC")
  end

  def spectacle_ids
    booked_spectacles.pluck(:id)
  end
end
