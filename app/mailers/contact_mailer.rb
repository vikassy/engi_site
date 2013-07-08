class ContactMailer < ActionMailer::Base
  #Change this to something email like => donotreply@engineer.org.in
  default from: "donotreply@engineer.org.in"

  def send_contact(contact)
    @contact = contact
    # attachments["rails.png"] = File.read("#{Rails.root}/public/images/rails.png")
    mail(:to => "#{contact.name} <#{contact.email}>", :subject => "email from #{contact.name}")
  end

  def send_confirmation_email(email,activation_link)
    @link = activation_link
    puts "-"*100
    puts email
    puts '-'*100
    mail(to: "<#{email}>", subject: "Confirm your Subscription")
  end

end
