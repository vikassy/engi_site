class Subscribe < ActiveRecord::Base
	cattr_accessor :request
	before_save :send_mail

	validates_uniqueness_of :email

	validates_format_of :email, :with => /\A[-a-z0-9_+\.]+\@([-a-z0-9]+\.)+[a-z0-9]{2,4}\Z/i

	def send_mail
      link = self.request.host+"/subscribe/activate?email="+self.email+"&token="+self.activation_string
      ContactMailer.send_confirmation_email(self.email,link).deliver
	end

end
