class PagesController < ApplicationController
  skip_before_filter :verify_authenticity_token
  before_filter :set_request_variable

  def set_request_variable
    #  set @current_account from session data here
    Subscribe.request = request
  end


  def home
    @events = Event.all
    @contact = Contact.new
    @subscribe = Subscribe.new
    # require "mechanize"
    # array = %w{chem-events biz-events mba-events civil-events elec-events gen-events astro-events gaming mining-events comp-events mech-events technites sce-events meta-events online-events}

    # agent = Mechanize.new()

    # array.each do |url_name|
    #   event = Event.find_by_name(url_name)
    #   page = agent.get("http://engineer.org.in/2012/#{url_name}.php")
    #   puts "Got page"
    #   puts url_name
    #   (page/"center"/"a").each do |name|
    #     all_eve = event.allevents.find_by_name(name.text)
    #     page2 = page.link_with(:text => name.text).click
    #     # page2 = name.click()
    #     all_eve.description = (page2/"#home"/"p").text
    #     puts all_eve.description
    #     all_eve.save
    #     # break 
    #   end
    #     # puts name.text
    #     # alleve = Allevent.create(name: name.text,event_id: event.id)
    # end



 #    array = %w{chem-events biz-events mba-events civil-events elec-events gen-events astro-events gaming mining-events comp-events mech-events technites sce-events meta-events online-events}

  # agent = Mechanize.new()

  # array.each do |url_name|
  #   event = Event.find_by_name(url_name)
  #   page = agent.get("http://engineer.org.in/2012/#{url_name}.php")
  #   puts "Got page"
  #   puts url_name
  #   (page/"center"/"a").each do |name|
  #     puts name.text
  #     alleve = Allevent.create(name: name.text,event_id: event.id)
  #   end

  # end   
  end

  def contact
    # @events = Event.all
    @contact = Contact.new(params[:contact])
    if @contact.save
      ContactMailer.send_contact(@contact).deliver
      # redirect_to root_path
      status = 200
      message = {message: "Thank you for contacting us"}
    else
      # render 'pages/home'
      status = 403
      message = {message: "Thank you for contacting us"}
    end
    respond_to do |format|  
    format.html { redirect_to root_path }  
      format.json {            
        render status: status , json: @contact.errors.messages
      }  
    end 
  end

  def subscribes
    @subscribe = Subscribe.new
    puts "-"*100
    puts params
    puts "-"*100
    @subscribe.email = params[:subscribe][:email].to_s
    @subscribe.activation_string = activation_string
    if @subscribe.save
      status = 200
    else
      status = 403
    end
    respond_to do |format|  
    format.html { redirect_to root_path }  
      format.json {            
        render status: status , json: @subscribe.errors.messages
      }  
    end
    # redirect_to root_path
  end

  def activate
    email = params[:email].to_s
    token = params[:token].to_s
    subscribe = Subscribe.find_by_email_and_activation_string(email,token)
    if subscribe.nil?
      render status: 404
    else
      subscribe.confirmed=true
      subscribe.save
      render status: 404
      render :file => 'public/confirm.html'
      #Make a page about confirmed email
    end
  end

private 

  def activation_string
    (0...8).map{(65+rand(26)).chr}.join
  end
end
