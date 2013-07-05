class PagesController < ApplicationController
  def home
  	@events = Event.all
  	@contact = Contact.new
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



 #  	array = %w{chem-events biz-events mba-events civil-events elec-events gen-events astro-events gaming mining-events comp-events mech-events technites sce-events meta-events online-events}

	# agent = Mechanize.new()

	# array.each do |url_name|
	# 	event = Event.find_by_name(url_name)
	# 	page = agent.get("http://engineer.org.in/2012/#{url_name}.php")
	# 	puts "Got page"
	# 	puts url_name
	# 	(page/"center"/"a").each do |name|
	# 		puts name.text
	# 		alleve = Allevent.create(name: name.text,event_id: event.id)
	# 	end

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

end
