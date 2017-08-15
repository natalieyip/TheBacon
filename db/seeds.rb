Job.destroy_all

5.times do
	Job.create( 
		title: Faker::Job.title,
		company: Faker::Company.name,
    description: Faker::Lorem.paragraphs
  )
end 