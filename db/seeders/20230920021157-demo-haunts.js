'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Haunts', [
      {
        hostId: 1,
        title: 'Most haunted place ever',
        description: "Adorable cedar loft cabin secluded in the woods ~2miles from Lake Texoma. The space This cozy cabin was built by the former owners son and her late husband. The rough cedar you will find around the inside of the house was cut on this property. The metal interior roof is reclaimed from an old barn not far from here. Guest access The pond by the barndominium is a shared space for any guests that wish to fish for fun! We have a catch and release policy. If you plan to spend the day on the lake, you can park your boat on the main lot by the red barndominium at night. Please let us know in advance. Other things to note If there is a burn ban notice, campfires are not permitted. If not, feel free to have a nice cozy fire in the fire pit.",
        street: '123 cedar st',
        city: 'Wasilla',
        state: 'Alaska',
        zip_code: 99654,
        max_guests: 5,
        beds: 3,
        bedrooms: 3,
        bathrooms: 1,
        price: 123.00
      },
      {
        hostId: 2,
        title: 'Scary Getaway W/ Private Fishing & Gameroom',
        description: "The House on Lake Apache is a private waterfront getaway for all vacations. This is a perfect place to relax and be able to enjoy the outdoors. Whether you want to sit outside by the firepit with nature or stay cozy inside with a blanket. This home is family oriented and has many amenities and games to enjoy during your stay. Pets are allowed, so you can also bring them along for the ride. We have tried our best to make your experience one to remember out in Granbury. The space Downstairs Area: Master Bedroom | Queen bed, Full bathroom with shower, and one closet. Guest Bedroom | Queen Bed with Lake view, a 55' Smart TV, and one closet. Living Room | Couch, 75’ Mounted TV, and Electric Fireplace. Kitchen | Refrigerator, Dishwasher, Microwave, Oven/Range, Keurig, Kitchen Island with Four Bar Stools, Dining Table, Kitchen Utensils and Seasonings. Upstairs Area: Guest Bedroom | Queen Bed, and one Closet. Second Guest Bedroom | Two, Twin over Bunk Beds, and one closet. Game room | Air Hockey Table, Green Wall, Board Games, Arcade Games and Access to Balcony. Disclaimer: The home is by a small lake in the community, but it is not directly on Lake Granbury or the Brazos River. Exterior Area: Outdoor Gazebo | Firewood Fireplace and Electric Fireplace without door seating by the Lake. NOTE: Supplied Firewood is Seasonal and will be provided during the colder months of October- February. FIREPLACE AND FIREPIT The indoor and outdoor electric fireplace have a remote control which will be provided on site. The outdoor wood fireplace will have firewood provided per visit. INTERACTIONS WITH NATURE: This is an amazing place to enjoy the outdoors and nature. There is a variety of different animals you may see during your stay. From ducks, geese, turtles, fish, frogs, and snakes. Please enjoy wildlife from afar and do not try to feed them. Please stay out of the lake, as there are snakes in the area. ENTERTAINMENT: There is a game room upstairs where you can find the air hockey table, video arcade game machine, board games, and fishing rods available. Fishing is permitted and is catch and release only.",
        street: '125 apache st',
        city: 'Apache',
        state: 'Oklahoma',
        zip_code: 73006,
        max_guests: 10,
        beds: 5,
        bedrooms: 5,
        bathrooms: 3,
        price: 321.00
      },
      {
        hostId: 3,
        title: 'Luxury haunted Treehouse Couples Getaway w/ Peaceful Views',
        description: "Modern Scandinavian designed treehouse with impressive views, or if you want to climb aboard a luxury fantasy tall ship; https://www.airbnb.com/h/luxury-treetops-ship-captain-theme Try out the captains quarters aboard the Narnia vessel , both overlooking the woodland views but with totally different adventures amidst a 90 acre ranch/ farm , hiking trails, creeks and streams and seasonal ponds. The space Designed with couples in mind, the Viewpoint focuses on a very comfortable bed, luxurious bathroom, and plenty of deck space to soak in the trees and surrounding nature. This treehouse includes a kitchenette with mini-fridge and microwave, coffee service, and continental breakfast items. If your dates are booked, be sure to check availability of our Dawn Treader treehouse. Guest access About 40 acres of woodland walking trails, special guest access to see the farm side available upon request. We also have electric assist quadracycle rental available upon request. Other things to note A spectacular view comes as you sit on the second-level deck, adding to your overall treehouse experience.",
        street: '77345 forest rd',
        city: 'Forest City',
        state: 'Florida',
        zip_code: 32703,
        max_guests: 2,
        beds: 1,
        bedrooms: 1,
        bathrooms: 1,
        price: 213.00
      },
      {
        hostId: 1,
        title: 'Voted # 1 scary, Bowling, Golf, Basketball',
        description: "This is the ultimate vacation home for luxury, privacy, stargazing, and fun. Includes: 9-hole mini golf course, outdoor bowling, ping pong, corn hole, life-size connect four & Jenga, gas fire-pit, heated pool, hot tub, BBQ, Pac man arcade game, pool table, shuffleboard, poker table, and more. This is a one-of-a-kind rental in Scottsdale. This will be your best vacation ever! The space Nestled against stunning mountains and within minutes of world-class golf courses, this North Scottsdale location is the perfect vacation home. Due to its secluded and serene location, this property is located about 10 to 15 minutes from the nearest restaurant and is located down a dirt road. This 5-star luxury estate home is over 4,500 square feet and is exquisitely appointed throughout. The entire property was just recently remodeled. Everything is top-of-the-line. Single-story open floor plan features 6 bedrooms and 5 bathrooms. (Sleeps up to 16) The house is nestled against government-protected land giving you clear mountain and desert views. Several rooms feature huge, floor-to-ceiling windows which provide breathtaking & picturesque views. The house is also equipped with a state-of-the-art electronic lock installed on the exterior door so there is no need to worry about house keys! This home features the finest finishes & furnishings. The kitchen features a gourmet chef's kitchen with top-of-the-line appliances including a 5-burner gas stove, refrigerator/freezer combo, microwave, dishwasher, fully stocked utensil drawers, coffee maker, blender, etc. The large entertaining room is home to a pool table, table shuffleboard, foosball, 1 arcade game, and a poker table, perfect for game nights.",
        street: '7865 shush ave',
        city: 'San Jose',
        state: 'California',
        zip_code: 94008,
        max_guests: 5,
        beds: 3,
        bedrooms: 3,
        bathrooms: 3,
        price: 231.00
      },
      {
        hostId: 2,
        title: 'Luxury Horror & Harry Potter Villa in Reunion',
        description: "Experience luxurious resort-like amenities in the comfort of this spacious 6,700 sq ft vacation home, situated within 6 miles of Disney World in the Heritage Preserve area of upscale Reunion® Resort. This Signature Estate vacation home bordering a conservation area has 9 bedrooms, 9 bathrooms and 1 half bathroom including 7 master bedroom suites and 2 themed bedrooms and a newly completed Jurassic Arcade Room with the Jurassic and Batman arcade machines in the magical dinosaur jungle. The space KEY FEATURES - Private pool and Spa with rock gratto waterfall - GAME ROOM with Jurassic Park arcade, Batman arcade, full size pool table, air hockey and foosball - HOME THEATER with 120 inch screen and 13 reclining leather seats on 3 tiers - Built-in Summer Kitchen with 5 burner gas grill and ventilation - FREE high-speed Wi-Fi internet access with the highest possible Internet package in the resort - FREE baby gear included (pack n play, high chair) - FREE onsite parking - Fresh towels and linens included - Fully equipped dine-in kitchen with stainless appliances (walk in fridge, double dishwashers, double ovens) - 2 sets of full-sized washer and dryer included in the unit - No check-in required / secure key-less entry to the unit",
        street: '74156 monanananan rd',
        city: 'Billings',
        state: 'Montana',
        zip_code: 59101,
        max_guests: 4,
        beds: 2,
        bedrooms: 2,
        bathrooms: 2,
        price: 132.00
      },
      {
        hostId: 3,
        title: 'Alien Space Mission Villa',
        description: "Space Mission Bowling Villa| Arcade, Movie Theater, Bowling Lanes| Entertainments Dream The space **Important Property Related Info is listed on the bottom of this listing** This unique villa is very popular and gets booked quickly, so inquire about it today! It features: *14 bedrooms, each with a different space theme, 14.5 baths, sleeps 40 *10 mins from Disney World in Orlando, Florida *has a private 2-lane bowling alley, large LED TV wall screen *Large private swimming pool, spa, BBQ grill, washers/dryers The villa is perfect for the young and the young at heart who wish to bring together under one roof large families and groups celebrating all of life's wonderful moments such as vacations, weddings, anniversaries, family reunions, golf outings, sports competitions, corporate retreats, etc. ****THE SPACE**** There are 12 king bedrooms and 2 kids’ rooms with bunk beds. 6750 sq ft ****THE COMMUNITY**** This vacation villa is located in the charming Veranda Palms gated resort, just 10 mins from the Orlando-themed parks, including Disney World, and the luscious golf courses of Reunion and Champions Gate. There is a Walmart, multiple restaurants, banks and other services approximately 3 miles from the home. ****ADDITIONAL SERVICES YOU CAN REQUEST**** Mid-stay cleaning, daily turn-down service ****ADDITIONAL FEES**** -Pool heat: $50/night ****HOUSE RULES**** Suitable for children. No smoking of any kind allowed in the home. No pets. No partying. Check-in: after 4 pm Check-out: before 10 am Min age requirement: 21",
        street: '2409 space mountain RD',
        city: 'Roswell',
        state: 'New Mexico',
        zip_code: 88202,
        max_guests: 6,
        beds: 4,
        bedrooms: 3,
        bathrooms: 2,
        price: 312.00
      },
      {
        hostId: 1,
        title: 'Your Private Haunt! Splash Zone, Playground, Golf',
        description: "CLEANING & SERVICE FEES + POOL HEAT & GAS BBQ ALL INCLUDED! This beautiful home has all the amenities of a luxury resort except that it's all yours! 8 bedrooms and 10 bathrooms, it can sleep up to 18 guests (20 with the 2 foldaway beds). The main floor has a huge open concept, making it easy to cook, dine, and sit with everyone. The spacious backyard has a 40-ft swimming pool, a kids splash zone, and its own mini-golf course! 3 miles from Disney when you stay at this one of a kind property. The space When you’re done exploring Orlando, you can cook meals together in the gourmet kitchen, sip wine in the large family room, or relax in the soothing spa outside. And there’s plenty to keep your loved ones entertained, including a private theater, multiple game rooms, 10 televisions, a karaoke machine, and a PlayStation stocked with games. Press Pause Place is a vacation home designed to help you relax during your stay. Whether you plan on visiting all the theme parks or just want to stay at home and enjoy the pool, this house is just the place to press pause on work and the pressures of life, without having to worry about the details.",
        street: '8520 resort blvd',
        city: 'Athens',
        state: 'Georgia',
        zip_code: 30601,
        max_guests: 4,
        beds: 2,
        bedrooms: 2,
        bathrooms: 2,
        price: 456.00
      },
      {
        hostId: 2,
        title: 'The Spooky beach - Stunning Direct BEACHFRONT',
        description: "Freshly and fully remodeled top to bottom in chic stylish decor and finishes, The Sandy Dollar is ready for your group of up to 10's amazing beach getaway in class and comfort!   Boasting two decks with expansive Gulf and beach views, open gathering area with beamed ceilings and built-ins galore, plus 4 private bedrooms designed for a maximizing you great night's sleep, this beach house is ideal for families, friends, or couples looking for that quintessential beach escape!   The main living area is perfectly setup for your relaxation and taking the views!  You won't believe the sunrises!  Choose a spot to lounge on the comfy wrap around sectional perfect for catching up with family or curling up with a good book. With walls of windows showcasing the panoramic Gulf and beach stretch, you are sure to have photos op galore!   Be prepared to enjoy the Gulf breeze, beautiful sights, and sounds from the this oceanside escape inside or out on the decks.  When you’re ready to take even more advantage of this home's fantastic location, the beach is just a few steps away and calling your name. Pack up your cooler and beach cart, and hit the sand for some sun, sandcastle building and wave catching!",
        street: '301 beach RD',
        city: 'New Orleans',
        state: 'Louisiana',
        zip_code: 70032,
        max_guests: 5,
        beds: 3,
        bedrooms: 2,
        bathrooms: 1,
        price: 465.00
      },
      {
        hostId: 3,
        title: 'So many ghosts *New 7 Person Hot Tub*Arcades*Foosball*',
        description: "Welcome to Front Row Sea’t, our luxury beachfront home with panoramic views everywhere you look. This 1800 sq ft property has four bedrooms (3 king size beds, 4 full size bunk beds) and 3 1/2 baths, and is perfect for a large Family&Friends get away, promoting beach vibes and relaxation. Cook a meal in our chef's kitchen, and enjoy it on the wrap around deck. Whether you lounge in a comfy hammock with a view, or prefer to lay on the beach, steps from the home, this experience can offer it all. The space Escape to our charming beach house located just steps from the sand in Crystal Beach. With panoramic ocean views and a relaxed coastal vibe, our home is the perfect place to unwind and soak up the sun. This beachfront home has been tastefully decorated with a beachy theme throughout. The open-plan living room and kitchen is bright and airy, with large windows that let in plenty of natural light. There are 4 bedrooms, each with its own unique style and ocean views. There are 2 master bedrooms, each with a king-size bed and an en-suite bathroom, while the 2 other bedrooms are Jack and Jill Style, one with a king sized bed and the other with 4 full sized bunk beds and share a bathroom.",
        street: '96547 south beachy ave',
        city: 'Los Angeles',
        state: 'California',
        zip_code: 90001,
        max_guests: 15,
        beds: 10,
        bedrooms: 7,
        bathrooms: 5,
        price: 654.00
      },
      {
        hostId: 1,
        title: 'Seaside Spooktacular',
        description: "If you are looking for a dream rental on the beach this is it! Walk into this serene condo and feel your stress melt away! You cant help but feel calmed by the natural beauty of the sea, the sunrise, and the moonrise from the comfort of your bed. Enjoy a relaxing evening on the balcony and listen to the waves and the seabirds while the ocean breeze swirls around you. Inside the condo is just as lovely, in calming shades of blue and white. You will love the luxurious furnishings and appliances! The space The condo has a full size convection range & oven, microwave, refrigerator/freezer, and kitchenware for all of your cooking/dining needs. Custom bathroom with a walk-in travertine shower. 400 ft2 studio floorplan with a combined living/sleeping area. The couch can be made into a queen sized bed to accommodate up to 3 guests total; however, this space is best enjoyed by 1 or 2 people. AC unit to keep you cool and comfortable. Heated pool that is open each day until 10PM. Children under 14 must be supervised in pool area. Beach walkover across the dunes directly in front of the property. You can gather up your beach towels and walk a few minutes to spend a day at the beach. Outdoor shower on the ground level for rinsing off when you return. Gas grills located on the ground floor for guest use. Two tennis courts available for your use. Islander East is a quiet and well maintained community. Smoking is NOT ALLOWED inside or on balconies. Please do not book if you cannot abide by this rule. Please note this space has high end white furniture and bedding. It is not a good fit for young children or some adults. Please keep this in mind as you will be responsible for any stains/soiling of furnishings.",
        street: '123 sea voyage rd',
        city: 'Florence',
        state: 'Oregon',
        zip_code: 97439,
        max_guests: 10,
        beds: 4,
        bedrooms: 3,
        bathrooms: 2,
        price: 645.00
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Haunts', {
      hostId: { [Op.in]: [1, 2, 3] }
    }, {});
  }
};
