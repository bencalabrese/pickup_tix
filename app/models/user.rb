class User < ActiveRecord::Base
  attr_reader :password

  validates :password_digest, presence: true
  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

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
end
