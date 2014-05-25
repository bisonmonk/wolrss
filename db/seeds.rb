# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

categories = Category.create!([
  {title: "News"},
  {title: "Technology"},
  {title: "Business"},
  {title: "Finance"},
  {title: "Gaming"},
  {title: "Design"},
  {title: "Fashion"},
  {title: "Marketing"},
  {title: "Cooking"},
  {title: "DIY"},
  {title: "Photography"},
  {title: "Entertainment"},
  {title: "Science"},
  {title: "Sports"},
  {title: "Health"},
  {title: "Entrepeneur"}
])

#News
Category.find_by_title("News")

Category.find_by_title("Tech")

Category.find_by_title("Business")

Category.find_by_title("Finance")

Category.find_by_title("Gaming")

Category.find_by_title("Design")

Category.find_by_title("Fashion")

Category.find_by_title("Marketing")

Category.find_by_title("Cooking")

Category.find_by_title("DIY")

Category.find_by_title("Photography")

Category.find_by_title("Entertainment")

Category.find_by_title("Science")

Category.find_by_title("Sports")

Category.find_by_title("Health")

Category.find_by_title("Entrepeneur")