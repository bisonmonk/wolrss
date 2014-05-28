class User < ActiveRecord::Base
  attr_reader :password

  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  
  has_many :user_feeds
  has_many :feeds, through: :user_feeds
  
  has_many :user_entries
  has_many :entries, through: :user_entries

  before_validation :ensure_session_token

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(pt)
    self.password_digest = BCrypt::Password.create(pt)
  end

  def is_password?(pt)
    @password = pt
    BCrypt::Password.new(self.password_digest).is_password?(pt) unless pt.nil?
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
