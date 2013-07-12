ActionMailer::Base.raise_delivery_errors = true
require "#{Rails.root}/lib/development_mail_interceptor"
ActionMailer::Base.smtp_settings = {
  :openssl_verify_mode  => OpenSSL::SSL::VERIFY_NONE,
  :address              => "mail.engineer.org.in",
  :port                 => 26,
  :domain               => "www.engineer.org.in",
  :user_name            => "donotreply@engineer.org.in",
  :password 			=> "Engi2013@NiTk",
  :authentication       => :login,
  :enable_starttls_auto => true
}

ActionMailer::Base.default_url_options[:host] = "www.engineer.org.in"
# Mail.register_interceptor(DevelopmentMailInterceptor) if Rails.env.development?
