require "mechanize"
array = %w{chem-events biz-events mba-events civil-events elec-events gen-events astro-events gaming mining-events comp-events mech-events technites sce-events meta-events online-events}

agent = Mechanize.new()

array.each do |url_name|
	# event = Event.find_by_name(url_name)
	page = agent.get("http://engineer.org.in/2012/#{url_name}.php")
	puts "Got page"
	puts url_name
	(page/"center"/"a").each do |name|
		page2 = page.link_with(:text => name.text).click
		# page2 = name.click()
		puts (page2/"#home"/"p")
		# break 
	end
		# puts name.text
		# alleve = Allevent.create(name: name.text,event_id: event.id)
end
