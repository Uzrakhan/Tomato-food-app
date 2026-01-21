const restaurantData = {
    diningOut: [
        {
            id: 1,
            name: 'Barkaas Indo-Arabic Restaurant',
            cuisines: ['Arabian','Mughlai','Kebab','Mandi','Desserts','Beverages'],
            location: 'Aliganj, Varanasi',
            rating: 3.5,
            priceRange: '1300 for two',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            outdoorSeating: false,
            servesAlcohol: true,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/9/20510779/00f5738732d6ba91198650d0a8fe9a68_featured_v2.jpg?output-format=webp'
        },
        {
            id: 2,
            name: 'The Chocolate Room',
            cuisines: ['Bakery','Cafe','Coffee','Italian','Salad','Chinese','Mexican'],
            location: 'Hazratganj, Varanasi',
            rating: 4.0,
            priceRange: '1300 for two',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            outdoorSeating: true,
            servesAlcohol: false,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Hot Chocolate & Coffee": [
                    { id: 201, name: "Belgian Hot Chocolate", description: "Thick, classic hot chocolate using imported Belgian cocoa.", price: 280 },
                    { id: 202, name: "Hazelnut Latte", description: "Espresso with steamed milk and hazelnut syrup.", price: 220 }
                ],
                "Waffles & Pancakes": [
                    { id: 203, name: "Ferrero Rocher Waffle", description: "Waffle topped with Nutella, crushed nuts, and Ferrero Rocher.", price: 450 },
                    { id: 204, name: "Triple Chocolate Pancake", description: "Pancakes with white, milk, and dark chocolate drizzle.", price: 390 }
                ],
                "Italian Mains": [
                    { id: 205, name: "Veggie Supreme Pizza", description: "Thin crust with olives, bell peppers, and mushrooms.", price: 590 },
                    { id: 206, name: "Creamy Pesto Pasta", description: "Penne pasta tossed in a rich basil pesto cream sauce.", price: 480 }
                ],
                "Desserts & Shakes": [
                    { id: 207, name: "Chocolate Lava Cake", description: "Warm molten chocolate cake served with vanilla ice cream.", price: 350 },
                    { id: 208, name: "KitKat Thick Shake", description: "Signature thick shake blended with KitKat chunks.", price: 320 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/9/18564719/0a99fabfc4fa0ce5693c631b24bf1723_featured_v2.jpg?output-format=webp'
        },
        {
            id: 3,
            name: 'FashionTV Diner',
            cuisines: ['Sandwich','Pasta','North Indian','Varanasii','Salad','Chinese','Biryani'],
            location: 'Hazratganj, Varanasi',
            rating: 4.0,
            priceRange: '750 for two',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            outdoorSeating: true,
            servesAlcohol: false,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
            "Recommended": [
                {
                id: 301,
                name: "Margherita Classic",
                description: "Stone-baked pizza topped with fresh mozzarella, basil, and tomato sauce.",
                price: 299
                },
                {
                id: 302,
                name: "Spicy Peri Peri Pizza",
                description: "Loaded with spicy peri peri chicken, caramelized onions, and bell peppers.",
                price: 399
                }
            ],
            "Cheese Burst Pizzas": [
                {
                id: 303,
                name: "Triple Cheese Overload",
                description: "A mix of cheddar, mozzarella, and parmesan with a creamy cheese burst base.",
                price: 449
                },
                {
                id: 304,
                name: "Four Cheese Melt",
                description: "Mozzarella, gouda, parmesan and cream cheese layered generously.",
                price: 479
                }
            ],
            "Veg Specials": [
                {
                id: 305,
                name: "Garden Fresh Delight",
                description: "Topped with olives, jalapeños, capsicum, onion, and sweet corn.",
                price: 349
                },
                {
                id: 306,
                name: "Paneer Tikka Pizza",
                description: "Indian-style paneer tikka chunks with mint mayo drizzle.",
                price: 389
                }
            ],
            "Chicken Feast": [
                {
                id: 307,
                name: "BBQ Chicken Pizza",
                description: "Smoky BBQ chicken topped with red onions and a sweet-tangy sauce.",
                price: 459
                },
                {
                id: 308,
                name: "Chicken Pepperoni",
                description: "Classic pepperoni slices over a cheesy tomato base.",
                price: 499
                }
            ],
            "Sides & Beverages": [
                {
                id: 309,
                name: "Garlic Breadsticks",
                description: "Crispy breadsticks brushed with garlic butter and herbs.",
                price: 149
                },
                {
                id: 310,
                name: "Choco Lava Cake",
                description: "Warm chocolate cake with gooey molten chocolate center.",
                price: 129
                }
            ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/8/21276318/2b5b8544dbc80b1daa12ddf656bda653_featured_v2.jpg?output-format=webp'
        },
        {
            id: 4,
            name: 'Umrao Jaan Restaurant & Cafe',
            cuisines: ['Mughlai','Kebab','North Indian','Mandi','Desserts','Chinese','Biryani'],
            location: 'Kaiserbagh, Varanasi',
            rating: 3.8,
            priceRange: '1500 for two',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            outdoorSeating: false,
            servesAlcohol: false,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/7/21488467/72060334e56a39cb65348bdbbd82ab36_featured_v2.jpg?output-format=webp'
        },
        {
            id: 5,
            name: 'Classic Restaurant - Treat',
            cuisines: ['Street Food','Beverages','North Indian','Mandi','Desserts','Chinese','BBQ','Continental'],
            location: 'Mahanagar, Varanasi',
            rating: 3.4,
            priceRange: '1500 for two',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            outdoorSeating: false,
            servesAlcohol: true,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/1/800501/7eb11325b48f430c5aa71a8bda97c1a9_featured_v2.jpg?output-format=webp'
        },
        {
            id: 6,
            name: 'Flavours - All Day Dining',
            cuisines: ['Asian','Salad','North Indian','Biryani','Desserts','Chinese'],
            location: 'Alambagh, Varanasi',
            rating: 4.0,
            priceRange: '1000 for two',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            outdoorSeating: false,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/1/21282741/e262ff28fb49355d18931b75735cc3c5_featured_v2.jpg?output-format=webp'
        },
        {
            id: 7,
            name: 'Hazratganj SOCIAL',
            cuisines: ['Pasta','Burger','North Indian','Biryani','Kebab','Chinese','Momos'],
            location: 'Hazratganj, Varanasi',
            rating: 4.2,
            priceRange: '1600 for two',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            outdoorSeating: true,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/7/21353607/dedbee3923e458d4bebdf2a23c25f278_featured_v2.jpg?output-format=webp'
        },
        {
            id: 8,
            name: 'Hons All Day Dining',
            cuisines: ['Cafe','Coffe','Tea','Shake','Continental','Italian','Beverages'],
            location: 'Hazratganj, Varanasi',
            rating: 4.0,
            priceRange: '1200 for two',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            outdoorSeating: true,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/7/20663277/61dd0e808093444b2d04df3719951f51_featured_v2.jpg?output-format=webp'
        },
        {
            id: 9,
            name: 'Tanatan',
            cuisines: ['North Indian','Beverages', 'Varanasii'],
            location: 'Hazratganj, Varanasi',
            rating: 4.6,
            priceRange: '2500 for two',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            outdoorSeating: false,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/8/19657198/5b046d8a09bd583f2188a847fe8905bb_featured_v2.jpg?output-format=webp'
        },
        {
            id: 10,
            name: 'Molecule Air Bar',
            cuisines: ['North Indian','Beverages', 'Continental','Desserts','Finger Food'],
            location: 'Gomti Nagar, Varanasi',
            rating: 4.7,
            priceRange: '1800 for two',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            outdoorSeating: false,
            servesAlcohol: true,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/2/18991962/f2f813557a46732871b3845ecb5475cf_featured_v2.jpg'
        },
        {
            id: 11,
            name: 'Fosho - Pan Asian & Italian Bistro',
            cuisines: ['Asian','Italian'],
            location: 'Hazratganj, Varanasi',
            rating: 4.9,
            priceRange: '1800 for two',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            outdoorSeating: false,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/3/21376323/56001d23817cb71b96a54857c3e26396_featured_v2.jpg'
        }
    ],
    orderOnline: [
        {
            id: 12,
            name: 'Sharma Ji Ki Chai',
            cuisines: ['Street Food','Tea'],
            location: 'Lalbagh, Varanasi',
            rating: 3.4,
            priceRange: '40 for one',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: false,
            outdoorSeating: true,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/6/800466/a2238c3f56a4b0295ae1c1405a00c10d_o2_featured_v2.jpg'
        },
        {
            id: 13,
            name: 'Royal Cafe',
            cuisines: ['North Indian','BBQ','Mughlai','Continental'],
            location: 'Hazratganj, Varanasi',
            rating: 4.2,
            priceRange: '400 for one',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            outdoorSeating: false,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/chains/1/800111/24ac2e883ae942b7cafa2dcfa8db15d1_o2_featured_v2.jpg'
        },
        {
            id: 14,
            name: 'Sardar Ji Ke Mashoor Chhole Bhature - Punjabi Zaika',
            cuisines: ['North Indian'],
            location: 'Lalbagh, Varanasi',
            rating: 4.2,
            priceRange: '100 for one',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            outdoorSeating: false,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/6/800896/e4cb3c17841122d533ad4aa00ea5aa85_o2_featured_v2.jpg'
        },
        {
            id: 15,
            name: 'La Pinoz Pizza',
            cuisines: ['Pizza','Italian','Pasta','Fast Food'],
            location: 'Hazratganj, Varanasi',
            rating: 4.0,
            priceRange: '250 for one',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            outdoorSeating: false,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/5/18877935/ad7396f72bc89304ff57994867bee64f_o2_featured_v2.jpg'
        },
        {
            id: 16,
            name: 'The Hazelnut Factory',
            cuisines: ['Desserts','Bakery','Mithai','Cafe'],
            location: 'Hazratganj, Varanasi',
            rating: 4.0,
            priceRange: '250 for one',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            outdoorSeating: false,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/8/20082918/4158e1cee6e8e0e29e4f7416fff0421e_o2_featured_v2.jpg'
        },
        {
            id: 17,
            name: 'Burger King',
            cuisines: ['Desserts','Burger','Fast Food','Beverages'],
            location: 'Hazratganj, Varanasi',
            rating: 4.0,
            priceRange: '150 for one',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            outdoorSeating: false,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/6/19270356/cc8f83eb4e1cb9421c88bfb16fb7a82e_o2_featured_v2.jpg'
        },
        {
            id: 18,
            name: 'The Cherry Tree Bakery & Cafe',
            cuisines: ['Desserts','Cafe','Bakery','Fast Food'],
            location: 'Hazratganj, Varanasi',
            rating: 4.1,
            priceRange: '500 for one',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            outdoorSeating: false,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/1/800891/9b331c99b3efd89b36164aa4fa09006b_o2_featured_v2.jpg'
        },
        {
            id: 19,
            name: 'Marksmen',
            cuisines: ['Chinese','South Indian','Fast Food','Burger','Continental'],
            location: 'Lalbagh, Varanasi',
            rating: 4.2,
            priceRange: '500 for one',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            outdoorSeating: true,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/chains/8/800228/b93ad08c6a1f85dd9e7af83ba0ac887e_o2_featured_v2.jpg'
        },
        {
            id: 20,
            name: 'KFC',
            cuisines: ['Burger','Fast Food','Rolls'],
            location: 'Lalbagh, Varanasi',
            rating: 4.2,
            priceRange: '500 for one',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            outdoorSeating: false,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/chains/6/800126/eeceb6b37200a6f510d9b1406f5ad220_o2_featured_v2.jpg'
        },
        {
            id: 21,
            name: 'The Belgian Waffle Co.',
            cuisines: ['Waffle','Pancake','Desserts','Ice Cream','Beverages'],
            location: 'Sapru Marg, Varanasi',
            rating: 4.3,
            priceRange: '150 for one',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            outdoorSeating: false,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            image: 'https://b.zmtcdn.com/data/pictures/8/20836368/ff1ac51fa8f96cde3f5174d8e333573b_o2_featured_v2.jpg'
        },
        {
            id: 22,
            name: 'Behrouz Biryani',
            cuisines: ['Biryani','Kebab','North Indian'],
            location: 'Hazratganj, Varanasi',
            rating: 4.7,
            priceRange: '200 for one',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            outdoorSeating: false,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Games', 'Best BIryani', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/chains/3/19268633/59422ed92c57626153b3a9cf2eed5b78_o2_featured_v2.jpg'
        }
    ],
    nightLife: [
        {
            id: 23,
            name: 'Que',
            cuisines: ['North Indian','Continental','Finger Food','Chinese','Italian'],
            location: 'Gomti Nagar, Varanasi',
            rating: 4.2,
            priceRange: '1000 for two',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            pubsAndBars: true,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/9/19953669/0fa449e21e1fe06879403562dd56fc6c_featured_v2.jpg'
        },
        {
            id: 24,
            name: 'Boombox Bar Xchange',
            cuisines: ['North Indian','Continental','Finger Food','Chinese','Italian','Desserts','Beverages'],
            location: 'Summit Building , Gomti Nagar, Varanasi',
            rating: 4.2,
            priceRange: '2000 for two',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            pubsAndBars: false,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/4/19287974/8a76645784bfc14a897649a753f9176f_featured_v2.jpg'
        },
        {
            id: 25,
            name: 'Punjab Grill',
            cuisines: ['North Indian','Kebab','Biryani','Mughlai'],
            location: 'Phoenix Plassio Mall Varanasi',
            rating: 4.2,
            priceRange: '2000 for two',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            pubsAndBars: false,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/9/19928649/aa85b92c9b804686750e0bc641217d00_featured_v2.jpg'
        },
        {
            id: 26,
            name: 'Garden Grille & Bar - Hilton Garden Inn',
            cuisines: ['North Indian','Kebab','Biryani','Mughlai','Fast Food','Desserts'],
            location: 'Double Tree by Hilton Gomti Nagar, Varanasi',
            rating: 4.3,
            priceRange: '2000 for two',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            pubsAndBars: true,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/3/18614733/532bf8ad8208b8b583423fca994e7a33_featured_v2.jpg'
        },
        {
            id: 27,
            name: 'The Drowning Street',
            cuisines: ['North Indian','Fast Food','Desserts','Chinese','Continental'],
            location: 'Gomti Nagar, Varanasi',
            rating: 4.3,
            priceRange: '1700 for two',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            pubsAndBars: false,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music', 'Kid Friendly', 'Stags Allowed', 'Table booking recommended', 'Work Friendly', 'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/6/19000106/5f4d238396a870116e070ccacbd1fb93_featured_v2.jpg'
        },
        {
            id: 28,
            name: 'Void Bar & Nightclub',
            cuisines: ['North Indian','Fast Food','Desserts','Chinese','Continental','Asian'],
            location: 'Gomti Nagar, Varanasi',
            rating: 3.8,
            priceRange: '1500 for two',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            pubsAndBars: true,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music',  'Stags Allowed', 'Table booking recommended',  'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/2/20499342/fcabb8165725d1cd7e902ca1375c021f_featured_v2.jpg'
        },
        {
            id: 29,
            name: 'Bigg Daddy',
            cuisines: ['North Indian','Fast Food','Chinese','Continental','Asian','Italian','Kebab'],
            location: 'Cyber Heights,Gomti Nagar, Varanasi',
            rating: 4.2,
            priceRange: '2000 for two',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            pubsAndBars: true,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music',  'Stags Allowed', 'Table booking recommended',  'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/7/18611147/5d4cca2d453bc3fe845d2c264043f44a_featured_v2.jpg'
        },
        {
            id: 30,
            name: 'Sky Bar - Renaissance Varanasi Hotel',
            cuisines: ['Fast Food','Chinese','Continental', 'Finger Food'],
            location: 'Renaissance Varanasi Hotel, Varanasi',
            rating: 4.2,
            priceRange: '3500 for two',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            pubsAndBars: true,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music',  'Stags Allowed', 'Table booking recommended',  'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/9/18159999/a35313d784a098579571236eab277e06_featured_v2.jpg'
        },
        {
            id: 31,
            name: 'Jannat-Dayal Paradise',
            cuisines: ['Chinese','Continental','Italian'],
            location: 'Hotel Dayal Paradise, Gomti Nagar, Varanasi',
            rating: 4.0,
            priceRange: '3500 for two',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            pubsAndBars: false,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music',  'Stags Allowed', 'Table booking recommended',  'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/6/801116/2c44b77a4543c072158adf88134943a8_featured_v2.jpg'
        },
        {
            id: 32,
            name: 'Cafe Delhi Heights',
            cuisines: ['Chinese','Continental','Italian','Burger','North Indian'],
            location: 'Riverside Mall, Gomti Nagar, Varanasi',
            rating: 4.0,
            priceRange: '1500 for two',
            openingHours: '12:30 PM - 12:20AM',
            isOpen: true,
            pubsAndBars: false,
            moreInfo: ['Home Delivery', 'Takeaway Available', 'Vegetarian Only', 'Restroom available', 'Indoor Seating', 'Low-Intensity Music',  'Stags Allowed', 'Table booking recommended',  'Live Entertainment', 'Variable Menu'],
            placeKnownFor: ['Kid Friendly', 'Bar Games', 'Best Pub', 'Good Server', 'Music and Ambience', 'Rooftop Ambience'],
            contact: '+91000012345',
            menu: {
                "Recommended & Specials": [
                    { id: 101, name: "Lamb Mandi Full", description: "Traditional slow-cooked lamb served over aromatic basmati rice.", price: 1599 },
                    { id: 102, name: "Chicken Kabsa", description: "Spiced chicken and rice, a flavorful Arabic favorite.", price: 699 }
                ],
                "Authentic Arabic": [
                    { id: 103, name: "Shish Tawook Kebab", description: "Grilled chicken cubes marinated in garlic, lemon, and spices.", price: 550 },
                    { id: 104, name: "Hummus with Pita", description: "Creamy chickpea dip served with warm pita bread.", price: 290 }
                ],
                "Mughlai Main Course": [
                    { id: 105, name: "Mutton Rogan Josh", description: "A rich, aromatic Kashmiri curry with tender mutton.", price: 720 },
                    { id: 106, name: "Paneer Lababdar", description: "Paneer cubes in a tangy tomato-onion gravy.", price: 450 }
                ],
                "Breads & Accompaniments": [
                    { id: 107, name: "Butter Naan", description: "Soft, leavened flatbread brushed with butter.", price: 80 },
                    { id: 108, name: "Raita", description: "Yogurt mixed with grated cucumber and spices.", price: 120 }
                ],
                "Desserts & Drinks": [
                    { id: 109, name: "Umm Ali", description: "Egyptian bread pudding, creamy and sweet.", price: 350 },
                    { id: 110, name: "Laban (Buttermilk)", description: "Refreshing traditional Arabic buttermilk.", price: 150 }
                ]
            },
            image: 'https://b.zmtcdn.com/data/pictures/4/20328254/ec13474741e00e47568797ba33ab0b85_featured_v2.jpg'
        }
    ]

};

export default restaurantData;