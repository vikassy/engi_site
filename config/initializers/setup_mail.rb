ActionMailer::Base.raise_delivery_errors = true
require "#{Rails.root}/lib/development_mail_interceptor"
ActionMailer::Base.smtp_settings = {
  :address              => "mail.engineer.org.in",
  :port                 => 26,
  :domain               => "www.engineer.org.in",
  :user_name            => "donotreply@engineer.org.in",
  :authentication       => :login,
  :enable_starttls_auto => true
}

ActionMailer::Base.default_url_options[:host] = "www.engineer.org.in"
# Mail.register_interceptor(DevelopmentMailInterceptor) if Rails.env.development?
