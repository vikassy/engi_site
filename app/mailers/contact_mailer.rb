class ContactMailer < ActionMailer::Base
  default from: "vikasyaligar.it@gmail.com"

  def send_contact(contact)
    @contact = contact
    # attachments["rails.png"] = File.read("#{Rails.root}/public/images/rails.png")
    mail(:to => "#{contact.name} <#{contact.email}>", :subject => "email from #{contact.name}")
  end

end
