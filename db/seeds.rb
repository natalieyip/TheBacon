Job.destroy_all

type_array = ["Full Time", "Part Time", "Internship", "Contract"]
pay_type_array = ["Salary", "Hourly"]

10.times do
	Job.create( 
		title: Faker::Job.title,
		company: Faker::Company.name,
    description: Faker::Lorem.paragraph(8),
    employtype: type_array.sample,
    paytype: pay_type_array.sample
  )
end 