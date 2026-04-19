export interface Tour {
  id: string;
  name: string;
  category: TourCategory;
  duration: string;
  price: number;
  originalPrice: number;
  currency: string;
  description: string;
  longDescription: string;
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: { day: string; title: string; description: string }[];
  image: string;
}

export type TourCategory =
  | "same-day"
  | "golden-triangle"
  | "rajasthan"
  | "photography"
  | "two-day";

export const TOUR_CATEGORIES: { key: TourCategory; label: string }[] = [
  { key: "same-day", label: "Same Day Tours" },
  { key: "golden-triangle", label: "Golden Triangle" },
  { key: "rajasthan", label: "Royal Rajasthan" },
  { key: "photography", label: "Photography Tours" },
  { key: "two-day", label: "Two Day Tours" },
];

export const tours: Tour[] = [
  {
    id: "taj-sunrise",
    name: "Taj Mahal Sunrise Tour",
    category: "same-day",
    duration: "12 Hours",
    price: 40,
    originalPrice: 58,
    currency: "USD",
    description:
      "Witness the breathtaking sunrise at the Taj Mahal. Depart from Delhi early morning and experience the iconic monument bathed in golden light.",
    longDescription:
      "Start your day before dawn as we pick you up from your Delhi hotel and drive to Agra in a comfortable AC car. Arrive just as the first rays of sunlight paint the Taj Mahal in shades of gold and pink — a sight that has captivated millions. Your expert guide will share the fascinating love story of Shah Jahan and Mumtaz Mahal while you explore every intricate detail of this marble masterpiece. After the Taj, visit the imposing Agra Fort before heading back to Delhi.",
    highlights: [
      "Sunrise at Taj Mahal",
      "Agra Fort visit",
      "AC car from Delhi",
      "Professional guide",
    ],
    included: [
      "Private AC car with professional driver",
      "Expert English-speaking guide",
      "Taj Mahal & Agra Fort entry tickets",
      "Complimentary breakfast at 5-star hotel",
      "Hotel pickup & drop-off in Delhi",
      "Electric golf car at monuments",
      "Bottled mineral water",
    ],
    excluded: [
      "Lunch and dinner",
      "Personal expenses",
      "Tips and gratuities",
      "Camera fees at monuments",
    ],
    itinerary: [
      { day: "3:00 AM", title: "Pickup from Delhi Hotel", description: "Our professional driver arrives at your Delhi hotel for an early morning pickup. Settle into your comfortable private air-conditioned car as you begin the scenic drive along the Yamuna Expressway towards the historic city of Agra, covering approximately 230 kilometers in around 3 hours." },
      { day: "6:00 AM", title: "Sunrise at the Taj Mahal", description: "Arrive at the eastern gate of the Taj Mahal just as the gates open for sunrise visitors. Watch in awe as the first golden rays of sunlight illuminate the ivory-white marble, creating an ethereal glow that shifts from soft pink to warm amber. Your expert guide leads you through the history, architecture, and the timeless love story of Mughal Emperor Shah Jahan and his beloved wife Mumtaz Mahal. Examine the intricate pietra dura marble inlay work featuring semi-precious stones, marvel at the perfect symmetry of the Charbagh gardens divided by reflecting pools, and explore the interior chambers adorned with delicate calligraphy and floral patterns." },
      { day: "8:00 AM", title: "Complimentary Breakfast at 5-Star Hotel", description: "After your magical Taj Mahal experience, enjoy a lavish complimentary breakfast at a nearby 5-star hotel. Relax and recharge with a spread of Indian and continental dishes while reflecting on the breathtaking sunrise you just witnessed." },
      { day: "9:00 AM", title: "Agra Fort UNESCO World Heritage Site", description: "Visit the magnificent Agra Fort, a sprawling UNESCO World Heritage site built from striking red sandstone. This palatial fortress served as the main residence of the Mughal emperors until 1638. Explore its grand courtyards, ornate palaces including the Jahangir Palace and Khas Mahal, the stunning Sheesh Mahal (Mirror Palace), and the Musamman Burj — the octagonal tower where Shah Jahan spent his final years gazing across the Yamuna River at the Taj Mahal he built for his beloved wife." },
      { day: "11:00 AM", title: "Local Artisan Center Visit", description: "Discover the renowned craftsmanship of Agra at a local artisan center. Watch skilled artisans demonstrate the ancient art of marble inlay work (pietra dura), the same technique used to adorn the Taj Mahal. Browse exquisite handmade carpets, fine embroidery work, leather goods, and traditional handicrafts that Agra has been famous for over centuries." },
      { day: "12:30 PM", title: "Lunch at Recommended Restaurant", description: "Enjoy a delicious lunch at one of Agra's recommended restaurants, savoring authentic Mughlai cuisine including kebabs, biryanis, and local specialties that reflect the rich culinary heritage of the region." },
      { day: "2:00 PM", title: "Return Journey to Delhi", description: "Begin your comfortable return drive to Delhi via the Yamuna Expressway, relaxing in your private AC car after a fulfilling day of sightseeing and cultural immersion in the historic city of Agra." },
      { day: "6:00 PM", title: "Delhi Hotel Drop-off", description: "Arrive back at your Delhi hotel by early evening, concluding your memorable Taj Mahal Sunrise Tour with wonderful photographs and unforgettable memories of one of the world's most iconic monuments." },
    ],
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
  },
  {
    id: "taj-by-car",
    name: "Same Day Taj Mahal by Car",
    category: "same-day",
    duration: "12 Hours",
    price: 40,
    originalPrice: 58,
    currency: "USD",
    description:
      "A comfortable day trip to the Taj Mahal from Delhi by private AC car with an expert guide.",
    longDescription:
      "Experience the wonder of the Taj Mahal on a hassle-free day trip from Delhi. Travel in a private air-conditioned car with a professional driver, and explore the monument with a knowledgeable guide who brings its history to life. Enjoy lunch at a local restaurant and visit the Agra Fort before returning to Delhi.",
    highlights: ["Private AC car", "Taj Mahal & Agra Fort", "Lunch at local restaurant", "Door-to-door pickup"],
    included: [
      "Round-trip AC vehicle",
      "Taj Mahal & Agra Fort entry tickets",
      "5-star hotel lunch",
      "Professional guide",
      "Artisan center visits",
      "Hotel pickup & drop-off",
      "Electric golf car transport",
      "Bottled water",
    ],
    excluded: [
      "Dinner",
      "Personal expenses",
      "Tips and gratuities",
      "Camera fees",
    ],
    itinerary: [
      { day: "5:30 AM", title: "Pickup from Delhi Hotel", description: "Your professional driver picks you up from your Delhi hotel in a comfortable air-conditioned vehicle. Begin the scenic drive to Agra along the Yamuna Expressway, watching the beautiful Indian countryside come alive as the sun rises over golden wheat fields and rural villages." },
      { day: "9:30 AM", title: "Taj Mahal Guided Tour", description: "Arrive in Agra and head straight to the magnificent Taj Mahal, one of the Seven Wonders of the World and a UNESCO World Heritage site. Your expert English-speaking guide brings the iconic marble monument to life with vivid stories of Emperor Shah Jahan's undying love for Mumtaz Mahal. Explore the main mausoleum with its stunning dome rising 73 meters high, the intricate pietra dura inlay work featuring 28 types of precious and semi-precious stones, the perfectly symmetrical Charbagh gardens with their reflecting pools, and the flanking mosque and guest house that complete this masterpiece of Mughal architecture." },
      { day: "12:00 PM", title: "Complimentary Lunch at 5-Star Hotel", description: "Enjoy a sumptuous complimentary lunch at a prestigious 5-star hotel in Agra. Savor a curated spread of authentic Mughlai cuisine and continental favorites while relaxing in elegant surroundings after your Taj Mahal visit." },
      { day: "1:30 PM", title: "Agra Fort Exploration", description: "Visit the imposing Agra Fort, a massive red sandstone UNESCO World Heritage site that served as the imperial residence of the Mughal dynasty for generations. Walk through the grand Delhi Gate entrance, explore the ornate Jahangir Palace, the white marble Khas Mahal, the dazzling Sheesh Mahal with its thousands of tiny mirrors, and stand at the Musamman Burj where the imprisoned Shah Jahan spent his last days gazing at the Taj Mahal across the Yamuna River." },
      { day: "3:00 PM", title: "Local Artisan Centers", description: "Visit Agra's famous local artisan centers to witness master craftsmen demonstrating the ancient art of marble inlay (pietra dura) — the same technique that adorns the Taj Mahal. Browse beautiful handcrafted items including marble tabletops, jewelry boxes, fine embroidery, and traditional Agra leather goods." },
      { day: "4:00 PM", title: "Return Journey to Delhi", description: "Begin your comfortable return drive to Delhi in your private AC vehicle, relaxing and reminiscing about the incredible sights and experiences of the day as you travel back along the expressway." },
      { day: "8:00 PM", title: "Delhi Hotel Drop-off", description: "Arrive back at your Delhi hotel by evening, concluding your memorable same-day Taj Mahal tour with wonderful memories and photographs of one of humanity's greatest architectural achievements." },
    ],
    image: "https://images.unsplash.com/photo-1515091943-9d5c0ad475af?w=800&q=80",
  },
  {
    id: "taj-by-train",
    name: "Same Day Taj Mahal by Train",
    category: "same-day",
    duration: "13 Hours",
    price: 55,
    originalPrice: 79,
    currency: "USD",
    description:
      "Travel to Agra by express train from Delhi for a hassle-free day trip to the Taj Mahal.",
    longDescription:
      "Board the high-speed Gatimaan Express from Delhi and reach Agra in under two hours. This train journey through the Indian countryside is an experience in itself. In Agra, a private car and guide await to take you through the Taj Mahal and Agra Fort. Return to Delhi by evening on the same comfortable train.",
    highlights: ["Gatimaan Express train", "Taj Mahal guided tour", "Agra Fort", "Train tickets included"],
    included: [
      "Round-trip Gatimaan Express tickets",
      "Door-to-door Delhi pickup/drop-off",
      "Guided tours of both monuments",
      "All entrance fees",
      "AC transfers in Agra and Delhi",
      "Electric golf car",
      "5-star hotel lunch",
    ],
    excluded: [
      "Dinner",
      "Personal expenses",
      "Tips and gratuities",
      "Additional sightseeing beyond itinerary",
    ],
    itinerary: [
      { day: "6:30 AM", title: "Pickup from Delhi Hotel", description: "Your driver picks you up from your Delhi hotel and transfers you to the New Delhi Railway Station in a comfortable air-conditioned car. Arrive at the station with ample time to settle in before departure." },
      { day: "8:10 AM", title: "Board Gatimaan Express", description: "Board India's semi-high-speed Gatimaan Express from New Delhi Railway Station, traveling at speeds up to 160 km/h. Enjoy a complimentary onboard breakfast as you watch the scenic Indian countryside roll past your window — lush farmlands, small villages, and ancient ruins dotting the landscape during the 100-minute journey to Agra." },
      { day: "9:50 AM", title: "Arrive Agra & Meet Your Guide", description: "Arrive at Agra Cantt Railway Station where your expert English-speaking guide and private AC car are waiting. Transfer directly to the Taj Mahal for an immersive guided experience of this UNESCO World Heritage masterpiece." },
      { day: "10:15 AM", title: "Taj Mahal Expert-Guided Tour", description: "Enter the Taj Mahal complex and be captivated by the sheer beauty of this iconic monument. Your knowledgeable guide shares the fascinating history of Emperor Shah Jahan's devotion to Mumtaz Mahal, explains the architectural brilliance of the symmetrical gardens and reflecting pools, and points out the remarkable pietra dura inlay work featuring precious stones from around the world. Explore the main mausoleum, the flanking mosque and jawab, and the exquisite Charbagh gardens at your own pace." },
      { day: "12:30 PM", title: "Lunch at 5-Star Hotel", description: "Enjoy a delightful complimentary lunch at a prestigious 5-star hotel in Agra, featuring a curated selection of authentic Mughlai cuisine and international dishes in an elegant dining setting." },
      { day: "1:30 PM", title: "Agra Fort Exploration", description: "Visit the magnificent Agra Fort, a sprawling red sandstone UNESCO World Heritage site. Your guide walks you through the grand courtyards, the ornate Jahangir Palace, the delicate white marble Khas Mahal, and the poignant Musamman Burj tower where Shah Jahan spent his final years imprisoned, gazing across the river at his beloved Taj Mahal." },
      { day: "5:50 PM", title: "Return Train Departure", description: "Board the evening Gatimaan Express for your comfortable return journey to New Delhi. Relax in your reserved seat as you reflect on a day filled with incredible Mughal history and architectural wonders." },
      { day: "7:30 PM", title: "Arrive Delhi & Hotel Drop-off", description: "Arrive at New Delhi Railway Station and meet your driver for the final transfer back to your hotel, concluding a seamless and memorable day trip to the Taj Mahal by India's fastest train." },
    ],
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80",
  },
  {
    id: "jaipur-day",
    name: "Same Day Jaipur Tour from Delhi",
    category: "same-day",
    duration: "1 Day",
    price: 50,
    originalPrice: 72,
    currency: "USD",
    description:
      "Explore the Pink City of Jaipur in a single day, visiting its majestic forts and vibrant bazaars.",
    longDescription:
      "Drive from Delhi to the vibrant Pink City of Jaipur for a day packed with royal heritage. Explore the magnificent Amber Fort perched on a hillside, marvel at the iconic Hawa Mahal (Palace of Winds), and wander through the opulent City Palace. End your day browsing the colorful local bazaars for handicrafts, textiles, and jewelry.",
    highlights: ["Amber Fort", "Hawa Mahal", "City Palace", "Local markets"],
    included: [
      "Private AC car with driver",
      "Licensed English-speaking guide",
      "All monument entry tickets",
      "Bottled water",
      "Hotel pickup & drop-off",
    ],
    excluded: [
      "Lunch and dinner",
      "Personal expenses",
      "Tips and gratuities",
      "Shopping expenses",
    ],
    itinerary: [
      { day: "6:00 AM", title: "Delhi Departure", description: "Depart from your Delhi hotel in a comfortable private AC car, heading towards the Pink City of Jaipur via NH48 (Delhi-Jaipur Expressway). Enjoy the scenic 4.5-hour drive through the Rajasthani countryside, passing colorful villages, ancient ruins, and the semi-arid landscapes that define this royal state." },
      { day: "10:30 AM", title: "Amber Fort Exploration", description: "Arrive at the magnificent Amber Fort (Amer Fort), a stunning hilltop fortress that blends Rajput and Mughal architectural styles in breathtaking fashion. Explore the sprawling complex including the Sheesh Mahal (Hall of Mirrors) with its thousands of tiny mirrors covering the walls and ceiling that reflect candlelight like stars, the Diwan-i-Aam (Hall of Public Audience), the Diwan-i-Khas (Hall of Private Audience), and the Sukh Niwas with its ingenious natural air-conditioning system. Enjoy panoramic views of Maota Lake and the surrounding Aravalli hills from the fort's ramparts." },
      { day: "12:30 PM", title: "Hawa Mahal (Palace of Winds)", description: "Stop for a photo at the iconic Hawa Mahal, Jaipur's most recognizable landmark. This extraordinary five-story palace features 953 intricately carved sandstone windows (jharokhas) designed in a honeycomb lattice pattern, originally built in 1799 so that royal women of the court could observe street festivals and daily life below without being seen from the outside." },
      { day: "1:00 PM", title: "City Palace", description: "Explore the magnificent City Palace, a stunning blend of Rajasthani and Mughal architecture that remains partially the residence of the Jaipur royal family to this day. Wander through its sprawling courtyards, ornate gateways, the Mubarak Mahal (Welcome Palace) with its textile museum, and the Chandra Mahal. Admire the world's largest sterling silver vessels in the Diwan-i-Khas, each standing over 5 feet tall." },
      { day: "2:00 PM", title: "Jantar Mantar Observatory", description: "Visit the remarkable Jantar Mantar, a UNESCO World Heritage Site and the world's largest stone astronomical observatory. Built by Maharaja Jai Singh II in 1734, this collection of 19 architectural astronomical instruments includes the world's largest stone sundial (Samrat Yantra) standing 27 meters tall, capable of telling time accurate to two seconds." },
      { day: "3:00 PM", title: "Lunch with Rajasthani Cuisine", description: "Enjoy a delicious lunch at a recommended restaurant featuring authentic Rajasthani cuisine. Savor traditional dishes like dal baati churma, gatte ki sabzi, and laal maas — flavors that have been perfected over centuries in the royal kitchens of Rajasthan." },
      { day: "4:00 PM", title: "Explore Local Bazaars", description: "Browse Jaipur's famous colorful local bazaars, a shopper's paradise renowned for traditional Rajasthani handicrafts, block-printed textiles, precious and semi-precious gemstone jewelry, blue pottery, lac bangles, mojari leather shoes, and miniature paintings. Your guide helps you navigate the vibrant markets and find the best authentic souvenirs." },
      { day: "5:00 PM", title: "Return to Delhi", description: "Begin the return drive to Delhi, relaxing in your private AC car after a day packed with royal heritage, stunning architecture, and vibrant culture." },
      { day: "9:00 PM", title: "Delhi Arrival", description: "Arrive back at your Delhi hotel by evening, concluding your whirlwind exploration of the magnificent Pink City of Jaipur." },
    ],
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80",
  },
  {
    id: "delhi-overnight",
    name: "Delhi Overnight Taj Mahal Tour",
    category: "same-day",
    duration: "21 Hours",
    price: 84,
    originalPrice: 120,
    currency: "USD",
    description:
      "An overnight tour from Delhi to Agra, giving you ample time to explore the Taj Mahal and surrounding attractions.",
    longDescription:
      "This overnight tour gives you the luxury of time — see the Taj Mahal at both sunset and sunrise, visit the serene Mehtab Bagh gardens, and explore Agra Fort at a leisurely pace. Stay overnight at a comfortable hotel in Agra and savor authentic Mughlai cuisine for dinner.",
    highlights: ["Overnight stay option", "Taj Mahal at sunrise & sunset", "Mehtab Bagh", "Local cuisine"],
    included: [
      "1 night hotel accommodation",
      "Private AC car",
      "Professional guide",
      "Taj Mahal & Agra Fort entry",
      "Mehtab Bagh entry",
      "Dinner & breakfast",
      "Hotel pickup & drop-off",
    ],
    excluded: [
      "Lunch on Day 1",
      "Personal expenses",
      "Tips and gratuities",
      "Camera fees",
    ],
    itinerary: [
      { day: "Day 1 PM", title: "Delhi to Agra & Hotel Check-in", description: "Depart from your Delhi hotel in the afternoon in a comfortable private AC car. Enjoy the scenic drive along the Yamuna Expressway to Agra, covering approximately 230 kilometers in around 3 hours. Upon arrival, check into your pre-booked hotel, freshen up, and prepare for an enchanting evening of Mughal heritage exploration." },
      { day: "Day 1 Eve", title: "Mehtab Bagh Sunset & Baby Taj", description: "Head to Mehtab Bagh (Moonlight Garden) on the northern bank of the Yamuna River for a stunning sunset view of the Taj Mahal from across the water. This is considered one of the most photogenic vantage points, offering a breathtaking panoramic perspective as the setting sun bathes the white marble in shades of gold, orange, and pink. Afterwards, visit the exquisite Itimad-ud-Daulah (Baby Taj), a Mughal mausoleum often considered the jewel box of Mughal architecture and a precursor to the Taj Mahal itself, featuring stunning marble lattice screens and pietra dura inlay work." },
      { day: "Day 1 Night", title: "Dinner at Mughlai Restaurant", description: "Savor an authentic dinner at a renowned Mughlai restaurant in Agra, feasting on traditional dishes like seekh kebabs, butter chicken, biryani, and freshly baked naan bread — recipes passed down through generations from the royal Mughal kitchens. Return to your hotel for a comfortable overnight stay." },
      { day: "Day 2 6:00 AM", title: "Taj Mahal Sunrise", description: "Wake early for the most magical experience of the trip — witnessing the Taj Mahal at sunrise. As the first rays of sunlight break over the horizon, watch in breathtaking awe as the ivory-white marble gradually transforms from soft grey to warm pink, then brilliant gold, and finally radiant white. Your guide shares intimate details about the monument's construction, the 20,000 artisans who worked for over 22 years, and the deep symbolism embedded in every architectural element. This early morning visit also offers the smallest crowds for unobstructed photographs and peaceful contemplation." },
      { day: "Day 2 8:00 AM", title: "Breakfast at Hotel", description: "Return to your hotel for a hearty breakfast, recharging after the magical sunrise experience before continuing your exploration of Agra's Mughal heritage." },
      { day: "Day 2 10:00 AM", title: "Agra Fort Exploration", description: "Visit the magnificent Agra Fort, a massive red sandstone UNESCO World Heritage site spanning 94 acres along the Yamuna River. Explore the grand palaces including Jahangir Palace with its blend of Hindu and Islamic architecture, the white marble Khas Mahal, the dazzling Sheesh Mahal (Mirror Palace), and the poignant Musamman Burj where Emperor Shah Jahan was imprisoned by his own son Aurangzeb, spending his final days gazing across the river at the Taj Mahal. Enjoy stunning views of the Yamuna River and the Taj Mahal from the fort's elevated terraces." },
      { day: "Day 2 12:00 PM", title: "Local Artisan Centers", description: "Visit Agra's renowned artisan centers to observe master craftsmen demonstrating the ancient Mughal art of marble inlay (pietra dura), the same intricate technique used to embellish the Taj Mahal. Browse handcrafted marble pieces, fine carpets, traditional leather goods, and exquisite handicrafts." },
      { day: "Day 2 1:00 PM", title: "Return to Delhi", description: "Begin your comfortable return journey to Delhi in your private AC car, carrying with you unforgettable memories of the Taj Mahal at both sunset and sunrise — an experience that very few travelers are fortunate enough to enjoy." },
      { day: "Day 2 5:00 PM", title: "Delhi Drop-off", description: "Arrive back at your Delhi hotel by late afternoon, concluding your comprehensive overnight Agra experience." },
    ],
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
  },
  {
    id: "golden-3day",
    name: "3 Day Golden Triangle Tour",
    category: "golden-triangle",
    duration: "3 Days / 2 Nights",
    price: 200,
    originalPrice: 300,
    currency: "USD",
    description:
      "The classic Delhi-Agra-Jaipur circuit in 3 action-packed days covering India's most iconic landmarks.",
    longDescription:
      "The Golden Triangle is India's most popular tourist circuit, and for good reason. In just 3 days, you'll experience the contrasts of modern Delhi, the timeless beauty of the Taj Mahal, and the royal grandeur of Jaipur. Each city tells a different chapter of India's rich story.",
    highlights: ["Delhi sightseeing", "Taj Mahal", "Jaipur forts & palaces", "All transfers included"],
    included: [
      "Hotel pickup & drop-off",
      "Private AC vehicle with driver",
      "Professional tour guide throughout",
      "Monument entrance tickets",
      "Hotel breakfast daily",
      "Mineral water bottles",
      "All taxes and parking fees",
      "Rickshaw ride in Old Delhi",
    ],
    excluded: [
      "Lunch and dinner meals",
      "Personal expenses",
      "Tips and gratuities",
      "Camera fees at monuments",
    ],
    itinerary: [
      { day: "Day 1", title: "Delhi Exploration", description: "Begin your Golden Triangle journey with a 9:00 AM pickup from your Delhi hotel. Explore Old Delhi starting with the magnificent Jama Masjid, India's largest mosque built by Shah Jahan in 1656 with three grand gates and two 40-meter-high minarets. Take an exhilarating rickshaw ride through the bustling lanes of Chandni Chowk, Delhi's oldest and most iconic market street dating back to the 17th century, brimming with aromatic spice shops, street food stalls, and traditional traders. Visit the imposing Red Fort (Lal Qila), the main residence of the Mughal emperors for nearly 200 years. After lunch featuring local Delhi cuisine, explore New Delhi's landmarks including Humayun's Tomb — the stunning Mughal garden tomb that inspired the Taj Mahal — the majestic India Gate war memorial, the grand Parliament House and Rashtrapati Bhavan (President's Palace), the towering Qutub Minar (the world's tallest brick minaret at 73 meters), and the serene Lotus Temple with its 27 stunning marble petals. In the evening, drive approximately 3 hours to Agra along the Yamuna Expressway. Check into your Agra hotel for overnight stay." },
      { day: "Day 2", title: "Agra to Jaipur via Mughal Heritage", description: "Wake early for a breathtaking sunrise visit to the Taj Mahal, a UNESCO World Heritage site and one of the New Seven Wonders of the World. Your expert guide reveals the incredible love story behind this architectural masterpiece as you examine the stunning white Makrana marble facade, intricate pietra dura inlay work featuring 28 types of precious and semi-precious stones, the perfectly symmetrical Charbagh gardens, and the mesmerizing interior chambers with their delicate floral carvings and calligraphy. After breakfast, visit the magnificent Agra Fort, another UNESCO World Heritage site featuring grand palaces, ornate courtyards, the Sheesh Mahal (Mirror Palace), and poignant views of the Taj Mahal from the Musamman Burj. Optionally visit Fatehpur Sikri, the abandoned Mughal capital built by Emperor Akbar in 1571, featuring the stunning Buland Darwaza (the tallest gateway in the world at 54 meters), the Panch Mahal, and Jodha Bai's Palace. Enjoy lunch featuring authentic Mughlai cuisine. In the afternoon, drive 4-5 hours to the Pink City of Jaipur, the vibrant capital of Rajasthan. Check into your Jaipur hotel for overnight stay." },
      { day: "Day 3", title: "Jaipur & Return to Delhi", description: "After breakfast, begin your exploration of Jaipur at the majestic Amber Fort, a breathtaking hilltop fortress that seamlessly blends Rajput and Mughal architecture. Wander through the Sheesh Mahal (Hall of Mirrors), the Diwan-i-Aam, and enjoy panoramic views of Maota Lake. Optionally enjoy an elephant ride up to the fort entrance. Visit the iconic Hawa Mahal (Palace of Winds) with its extraordinary facade of 953 intricately carved jharokha windows. Explore the City Palace, a magnificent blend of Rajasthani and Mughal architecture still partially occupied by the royal family. Visit the Jantar Mantar, a UNESCO World Heritage astronomical observatory featuring the world's largest stone sundial. Enjoy lunch with authentic Rajasthani cuisine including dal baati churma and local specialties. Browse Jaipur's famous colorful bazaars for handcrafted textiles, jewelry, and traditional handicrafts. In the evening, depart for Delhi, arriving late at night to conclude your unforgettable Golden Triangle journey." },
    ],
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
  },
  {
    id: "golden-4day",
    name: "4 Day Golden Triangle Tour",
    category: "golden-triangle",
    duration: "4 Days / 3 Nights",
    price: 150,
    originalPrice: 215,
    currency: "USD",
    description:
      "A relaxed pace through the Golden Triangle with more time at each destination.",
    longDescription:
      "With an extra day, this Golden Triangle tour lets you explore at a comfortable pace. Spend more time at each monument, enjoy local cuisine, and soak in the atmosphere of three incredible cities without rushing.",
    highlights: ["Old & New Delhi", "Taj Mahal & Agra Fort", "Amber Fort & City Palace", "Hotel accommodation"],
    included: [
      "3 nights hotel accommodation",
      "Daily breakfast",
      "Private AC car",
      "Licensed guides",
      "Entry tickets",
      "Rickshaw ride in Delhi",
    ],
    excluded: [
      "Lunch and dinner meals",
      "Personal expenses and souvenirs",
      "Tips and gratuities",
    ],
    itinerary: [
      { day: "Day 1", title: "Delhi Sightseeing", description: "Begin your relaxed Golden Triangle journey with a full day exploring Delhi. Start in Old Delhi with a visit to the magnificent Jama Masjid, India's largest mosque, followed by an exhilarating rickshaw ride through the bustling historic lanes of Chandni Chowk, where you'll experience the sights, sounds, and aromas of one of Asia's oldest and busiest markets. Visit the imposing Red Fort, the seat of Mughal power for two centuries. After lunch, explore New Delhi's grand landmarks including Humayun's Tomb — the garden tomb that served as architectural inspiration for the Taj Mahal — India Gate, the stately Parliament House, the soaring Qutub Minar, and the stunning Lotus Temple. Overnight stay in Delhi." },
      { day: "Day 2", title: "Delhi to Agra with Evening Monuments", description: "After a leisurely breakfast, drive to Agra along the scenic Yamuna Expressway (approximately 3 hours). Check into your hotel and freshen up before heading out for an enchanting evening at Mehtab Bagh (Moonlight Garden), where you'll witness a stunning sunset view of the Taj Mahal reflected in the Yamuna River. Visit the exquisite Itimad-ud-Daulah (Baby Taj), often called the jewel box of Mughal architecture, featuring delicate marble lattice screens and intricate inlay work that presaged the techniques used in the Taj Mahal. Enjoy dinner at a recommended restaurant serving authentic Mughlai cuisine. Overnight stay in Agra." },
      { day: "Day 3", title: "Agra to Jaipur via Fatehpur Sikri", description: "Rise early for a magical sunrise visit to the Taj Mahal, watching as the first light transforms the ivory-white marble from soft pink to golden white. Your expert guide shares the fascinating love story and architectural details of this Seven Wonders masterpiece. After breakfast at the hotel, explore the sprawling Agra Fort with its red sandstone ramparts, ornate palaces, and poignant views of the Taj from the Musamman Burj. Depart for Jaipur with an en route stop at Fatehpur Sikri, the hauntingly beautiful abandoned Mughal capital built by Emperor Akbar, featuring the towering Buland Darwaza (world's tallest gateway), the Panch Mahal, and Jodha Bai's Palace. Continue the drive to Jaipur (approximately 4 hours). Overnight stay in Jaipur." },
      { day: "Day 4", title: "Full Day Jaipur & Return to Delhi", description: "After breakfast, begin your exploration of the Pink City with a visit to the majestic Amber Fort perched on a hilltop overlooking Maota Lake. Marvel at the Sheesh Mahal (Hall of Mirrors), the ornate Ganesh Pol gateway, and panoramic views from the ramparts. Explore the City Palace with its blend of Rajasthani and Mughal architecture, visit the Jantar Mantar UNESCO astronomical observatory with the world's largest stone sundial, and photograph the iconic Hawa Mahal (Palace of Winds) with its 953 intricately carved windows. Enjoy lunch featuring traditional Rajasthani cuisine. Browse the colorful bazaars of Jaipur for handicrafts, textiles, gemstones, and traditional jewelry. In the evening, depart for Delhi (approximately 5 hours), arriving late at night to conclude your Golden Triangle tour." },
    ],
    image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=800&q=80",
  },
  {
    id: "golden-5day",
    name: "5 Day Golden Triangle Tour",
    category: "golden-triangle",
    duration: "5 Days / 4 Nights",
    price: 250,
    originalPrice: 358,
    currency: "USD",
    description:
      "The most comprehensive Golden Triangle experience with hidden gems and local experiences.",
    longDescription:
      "Our most popular Golden Triangle package. Five days lets you go beyond the usual tourist spots and discover hidden gems — from the spice markets of Old Delhi to the artisan workshops of Jaipur. Includes cultural experiences like a cooking class and a rickshaw ride through Chandni Chowk.",
    highlights: ["Comprehensive Delhi tour", "Fatehpur Sikri", "Jaipur shopping", "Cultural experiences"],
    included: [
      "4 nights hotel accommodation",
      "Daily breakfast",
      "Private AC car",
      "Guides at each city",
      "All entry tickets",
      "Elephant ride in Jaipur",
      "Rickshaw ride in Old Delhi",
      "Mineral water",
      "All taxes",
    ],
    excluded: [
      "Meals beyond breakfast",
      "Personal expenses and souvenirs",
      "Optional gratuities",
    ],
    itinerary: [
      { day: "Day 1", title: "Delhi Exploration — Old & New", description: "Arrive in Delhi and begin your comprehensive exploration of India's vibrant capital city. Tour Old Delhi starting with the magnificent Jama Masjid, India's largest mosque built by Shah Jahan, then take an exhilarating rickshaw ride through the chaotic, colorful lanes of Chandni Chowk — one of Asia's oldest and busiest market streets. Visit the imposing Red Fort (Lal Qila), a UNESCO World Heritage site and the seat of Mughal power for two centuries. After lunch, explore New Delhi's grand colonial and ancient landmarks including Humayun's Tomb (the architectural inspiration for the Taj Mahal), India Gate war memorial, the sweeping Rajpath boulevard with Parliament House and Rashtrapati Bhavan, the towering Qutub Minar (world's tallest brick minaret at 73 meters), and the serene Lotus Temple with its 27 free-standing marble petals. Overnight stay in Delhi." },
      { day: "Day 2", title: "Drive to Agra — Sunset at Mehtab Bagh & Baby Taj", description: "After breakfast, depart for Agra via the Yamuna Expressway (approximately 3 hours). Check into your hotel and freshen up before an enchanting afternoon exploring Agra's lesser-known Mughal treasures. Visit the exquisite Itimad-ud-Daulah (Baby Taj), a delicate marble mausoleum often called the jewel box of Mughal architecture, featuring stunning marble lattice screens and intricate pietra dura inlay work that preceded the techniques perfected at the Taj Mahal. As evening approaches, head to Mehtab Bagh (Moonlight Garden) on the northern bank of the Yamuna River for one of India's most spectacular sunset views — the Taj Mahal silhouetted against the blazing sky, its reflection shimmering in the river below. Enjoy dinner and overnight stay in Agra." },
      { day: "Day 3", title: "Sunrise Taj Mahal, Agra Fort & Drive to Jaipur", description: "Rise before dawn for a magical sunrise visit to the Taj Mahal, watching in breathtaking awe as the first rays of sunlight gradually illuminate the ivory-white Makrana marble, transforming it from pale grey to soft pink, warm gold, and finally brilliant white. Your expert guide reveals the incredible love story, the architectural genius of 20,000 artisans working over 22 years, and the symbolic elements embedded in every detail. After breakfast, explore the massive Agra Fort, a red sandstone UNESCO World Heritage site featuring grand palaces, the Sheesh Mahal (Mirror Palace), and the poignant Musamman Burj where Shah Jahan was imprisoned. Depart for Jaipur with an en route stop at Fatehpur Sikri, Emperor Akbar's abandoned Mughal capital featuring the towering Buland Darwaza (world's tallest gateway at 54 meters), the five-story Panch Mahal, and the ornate Tomb of Salim Chishti. Continue the drive to Jaipur (approximately 4 hours). Overnight stay in Jaipur." },
      { day: "Day 4", title: "Full Day Jaipur — Forts, Palaces & Bazaars", description: "After breakfast, begin an immersive day in the Pink City starting at the majestic Amber Fort, a stunning hilltop fortress blending Rajput and Mughal architecture. Enjoy an optional elephant ride up to the fort entrance and explore the dazzling Sheesh Mahal (Hall of Mirrors), the ornate Ganesh Pol gateway, and the Sukh Niwas with its ingenious natural cooling system. Visit the picturesque Jal Mahal (Water Palace) floating serenely in Man Sagar Lake. Photograph the iconic Hawa Mahal (Palace of Winds) with its extraordinary facade of 953 intricately carved sandstone windows. Explore the Jantar Mantar UNESCO astronomical observatory with the world's largest stone sundial. Tour the magnificent City Palace, still partially home to Jaipur's royal family, featuring the Mubarak Mahal, the Diwan-i-Khas with the world's largest silver vessels, and beautiful peacock-themed gateways. Enjoy lunch with authentic Rajasthani cuisine. Spend the afternoon browsing Jaipur's legendary colorful bazaars for block-printed textiles, gemstone jewelry, blue pottery, lac bangles, and traditional handicrafts. Overnight stay in Jaipur." },
      { day: "Day 5", title: "Return to Delhi", description: "After a leisurely breakfast, depart Jaipur for your return journey to Delhi (approximately 5 hours via NH48). Enjoy the scenic drive through the Rajasthani countryside, passing colorful villages and the semi-arid landscape. Arrive in Delhi by afternoon, concluding your comprehensive 5-day Golden Triangle journey with unforgettable memories of India's three most iconic cities — the vibrant capital of Delhi, the romantic Mughal heritage of Agra, and the royal splendor of Jaipur." },
    ],
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
  },
  {
    id: "golden-tiger",
    name: "5 Day Golden Triangle with Tiger Safari",
    category: "golden-triangle",
    duration: "5 Days / 4 Nights",
    price: 250,
    originalPrice: 358,
    currency: "USD",
    description:
      "Combine the Golden Triangle with a thrilling tiger safari at Ranthambore National Park.",
    longDescription:
      "Add a dose of wildlife adventure to your Golden Triangle experience! After Delhi and Agra, head to Ranthambore National Park for an exhilarating jungle safari in search of the majestic Bengal tiger. Then continue to Jaipur for royal palaces and forts.",
    highlights: ["Ranthambore safari", "Taj Mahal", "Jaipur forts", "Wildlife photography"],
    included: [
      "4 nights accommodation",
      "Ranthambore safari in shared Gypsy",
      "Private AC car",
      "Guides at each destination",
      "Entry tickets",
      "Rickshaw ride Delhi",
      "Elephant ride Jaipur",
      "Meals as per itinerary",
      "All taxes",
    ],
    excluded: [
      "Meals beyond specified",
      "Personal expenses",
      "Tips and gratuities",
    ],
    itinerary: [
      { day: "Day 1", title: "Delhi Sightseeing", description: "Begin your adventure with a comprehensive tour of India's capital. Explore Old Delhi with a visit to the magnificent Jama Masjid, a rickshaw ride through the bustling lanes of Chandni Chowk, and the imposing Red Fort. After lunch, discover New Delhi's landmarks including Humayun's Tomb, India Gate, Parliament House, Qutub Minar, and the Lotus Temple. Experience the fascinating contrast between the ancient Mughal heritage of Old Delhi and the grand colonial architecture of New Delhi. Overnight stay in Delhi." },
      { day: "Day 2", title: "Delhi to Agra — Baby Taj & Mehtab Bagh Sunset", description: "After breakfast, drive to Agra along the scenic Yamuna Expressway (approximately 3 hours). Check into your hotel and visit the exquisite Itimad-ud-Daulah (Baby Taj), a stunning marble mausoleum featuring delicate lattice screens and intricate pietra dura inlay work. As evening falls, head to Mehtab Bagh for a spectacular sunset view of the Taj Mahal from across the Yamuna River, watching the white marble glow in shades of gold and pink against the fading sky. Enjoy dinner at a local restaurant. Overnight stay in Agra." },
      { day: "Day 3", title: "Sunrise Taj Mahal, Agra Fort & Drive to Ranthambore", description: "Rise before dawn for a magical sunrise visit to the Taj Mahal, witnessing the iconic monument transform from soft grey to brilliant white as the first rays of sunlight illuminate the Makrana marble. After a detailed guided tour and breakfast, visit the magnificent Agra Fort with its red sandstone ramparts, ornate palaces, and views of the Taj from the Musamman Burj. Depart for Ranthambore National Park via Fatehpur Sikri, Emperor Akbar's abandoned Mughal capital featuring the towering Buland Darwaza and exquisite Mughal architecture. Continue the drive to Ranthambore (approximately 5 hours through the Rajasthani countryside). Check into your wildlife resort and prepare for the next day's safari adventure. Overnight stay near Ranthambore." },
      { day: "Day 4", title: "Ranthambore Tiger Safari — Morning & Evening", description: "Experience the thrill of two safari excursions in Ranthambore National Park, one of India's premier tiger reserves. Board shared Gypsy (open-top 4x4) vehicles for both a morning and evening safari through the park's diverse terrain of dry deciduous forests, open grasslands, lakes, and the dramatic ruins of the 10th-century Ranthambore Fort. Search for the majestic Royal Bengal tiger along with leopards, sloth bears, marsh crocodiles, sambar deer, spotted deer, nilgai (blue bull antelope), wild boar, and over 300 species of birds. The park's relatively open terrain offers some of the best tiger sighting opportunities in all of India. Your expert naturalist guide shares insights into the park's ecology, tiger behavior, and ongoing conservation efforts. Overnight stay near Ranthambore." },
      { day: "Day 5", title: "Drive to Jaipur — Forts, Palaces & Return to Delhi", description: "After breakfast, drive to Jaipur (approximately 3.5 hours). Visit the majestic Amber Fort with its stunning hilltop architecture, the Sheesh Mahal (Hall of Mirrors), and panoramic views — optionally enjoy an elephant ride up to the entrance. Explore the City Palace with its blend of Rajasthani and Mughal architecture, and photograph the iconic Hawa Mahal (Palace of Winds) with its 953 intricately carved windows. Enjoy lunch with Rajasthani cuisine and browse the colorful bazaars. In the evening, depart for Delhi (approximately 5 hours), arriving late at night to conclude your extraordinary Golden Triangle and Tiger Safari adventure." },
    ],
    image: "https://images.unsplash.com/photo-1561731216-c3a4d514bfc5?w=800&q=80",
  },
  {
    id: "golden-udaipur",
    name: "6 Day Golden Triangle with Udaipur",
    category: "golden-triangle",
    duration: "6 Days / 5 Nights",
    price: 300,
    originalPrice: 430,
    currency: "USD",
    description:
      "Extend the Golden Triangle to include the romantic city of Udaipur — the Venice of the East.",
    longDescription:
      "Experience the best of North India by adding Udaipur to your Golden Triangle journey. After Delhi, Agra, and Jaipur, fly to the lakeside city of Udaipur for an enchanting finale. Boat rides on Lake Pichola, the stunning City Palace, and Udaipur's intimate atmosphere create the perfect ending to your India adventure.",
    highlights: ["Lake Pichola", "City Palace Udaipur", "Taj Mahal", "Jaipur palaces"],
    included: [
      "5 nights hotel",
      "Daily breakfast",
      "Private AC car",
      "Guides",
      "Entry tickets",
      "Rickshaw ride Delhi",
      "Boat ride Udaipur",
      "All taxes",
    ],
    excluded: [
      "Meals beyond breakfast",
      "Personal expenses",
      "Gratuities",
      "Domestic flight Udaipur to Delhi",
    ],
    itinerary: [
      { day: "Day 1", title: "Delhi Sightseeing", description: "Begin your journey with a comprehensive tour of India's capital city. Explore the towering Qutub Minar — the world's tallest brick minaret at 73 meters, a UNESCO World Heritage site dating back to 1193. Visit the majestic India Gate war memorial, the stunning Humayun's Tomb that served as the architectural inspiration for the Taj Mahal, and the serene Lotus Temple with its 27 free-standing marble petals. In Old Delhi, take an exhilarating rickshaw ride through the bustling lanes of Chandni Chowk and visit the imposing Red Fort, the seat of Mughal power for nearly 200 years. Overnight stay in Delhi." },
      { day: "Day 2", title: "Delhi to Agra — Taj Mahal, Agra Fort & Mehtab Bagh", description: "After breakfast, drive to Agra via the Yamuna Expressway (approximately 3 hours). Visit the magnificent Taj Mahal, one of the New Seven Wonders of the World, with a detailed guided tour exploring the stunning white Makrana marble mausoleum, intricate pietra dura inlay work, symmetrical Charbagh gardens, and the moving love story of Shah Jahan and Mumtaz Mahal. Explore the Agra Fort, a sprawling red sandstone UNESCO World Heritage site with grand palaces and poignant views of the Taj from the Musamman Burj. As evening falls, visit Mehtab Bagh for a spectacular sunset view of the Taj Mahal silhouetted against the sky. Overnight stay in Agra." },
      { day: "Day 3", title: "Agra to Jaipur via Fatehpur Sikri", description: "After breakfast, depart for Jaipur with an en route stop at the UNESCO World Heritage site of Fatehpur Sikri, Emperor Akbar's magnificent abandoned Mughal capital. Explore the towering Buland Darwaza (world's tallest gateway at 54 meters), the five-story Panch Mahal, the exquisite Tomb of Salim Chishti with its stunning marble lattice screens, and Jodha Bai's Palace. Continue the scenic drive through the Rajasthani countryside to Jaipur (approximately 4 hours). In the evening, take a photo stop at the illuminated Hawa Mahal (Palace of Winds), one of Jaipur's most iconic landmarks. Overnight stay in Jaipur." },
      { day: "Day 4", title: "Full Day Jaipur Exploration", description: "Immerse yourself in the Pink City with a full day of exploration. Visit the magnificent City Palace, still partially home to the royal family, featuring the Mubarak Mahal, the Diwan-i-Khas with the world's largest silver vessels, and beautiful peacock gateways. Explore the Jantar Mantar, a UNESCO World Heritage astronomical observatory with the world's largest stone sundial. Marvel at the iconic Hawa Mahal with its 953 intricately carved sandstone windows. Visit the majestic Amber Fort perched on a hilltop overlooking Maota Lake, with its dazzling Sheesh Mahal (Hall of Mirrors) and panoramic views. Browse Jaipur's famous bazaars for traditional handicrafts, gemstones, textiles, and jewelry. Overnight stay in Jaipur." },
      { day: "Day 5", title: "Drive to Udaipur — Markets & Evening", description: "After breakfast, depart for the romantic city of Udaipur — the Venice of the East (approximately 6-7 hours through the stunning Aravalli hills). Along the way, enjoy the changing landscape from semi-arid plains to lush green hills. Upon arrival, check into your lakeside hotel and spend the evening exploring Udaipur's charming narrow streets, vibrant local markets filled with miniature paintings, traditional textiles, silver jewelry, and wooden toys. Watch the sunset over the shimmering lakes. Overnight stay in Udaipur." },
      { day: "Day 6", title: "Udaipur — City Palace, Lakes & Departure", description: "Explore the magnificent City Palace of Udaipur, the largest palace complex in Rajasthan, perched dramatically on the banks of Lake Pichola. This stunning fusion of Rajasthani and Mughal architecture features ornate balconies, towers, cupolas, and courtyards offering breathtaking panoramic views of the city and surrounding lakes. Visit the beautiful Jagdish Temple, a 17th-century Indo-Aryan temple dedicated to Lord Vishnu with exquisite carved pillars and sculptures. Stroll through the peaceful Saheliyon ki Bari (Garden of the Maidens), an 18th-century ornamental garden with fountains, marble elephants, and lotus pools built for the royal ladies. Enjoy a serene boat ride on Lake Pichola, gliding past the famous Lake Palace (Jag Niwas) and Jag Mandir islands. Transfer to the airport for your departure flight, concluding your unforgettable Golden Triangle with Udaipur experience." },
    ],
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
  },
  {
    id: "rajasthan-7day",
    name: "7 Day Royal Rajasthan Tour",
    category: "rajasthan",
    duration: "7 Days / 6 Nights",
    price: 200,
    originalPrice: 300,
    currency: "USD",
    description:
      "Explore the royal state of Rajasthan — majestic forts, colorful bazaars, and desert landscapes.",
    longDescription:
      "A week in Rajasthan takes you through the state's most iconic cities: Jaipur's pink walls, Jodhpur's blue houses, and Udaipur's serene lakes. Stay in heritage hotels, witness traditional folk performances, and explore magnificent forts that have stood for centuries.",
    highlights: ["Jaipur, Jodhpur, Udaipur", "Desert experience", "Palace hotels", "Cultural shows"],
    included: [
      "6 nights heritage hotels",
      "Daily breakfast",
      "Private AC car",
      "Expert guides",
      "All entry tickets",
      "Elephant ride Jaipur",
      "Boat ride Udaipur",
      "Rickshaw ride Delhi",
      "Mineral water",
      "All taxes",
    ],
    excluded: [
      "Meals beyond breakfast",
      "Personal expenses",
      "Tips",
      "Domestic flights",
    ],
    itinerary: [
      { day: "Day 1", title: "Delhi Sightseeing", description: "Begin your Royal Rajasthan journey with a comprehensive tour of India's capital. Explore Old Delhi with the magnificent Jama Masjid, a rickshaw ride through the bustling Chandni Chowk market lanes, and the imposing Red Fort. In New Delhi, visit Humayun's Tomb, India Gate, Parliament House, Qutub Minar, and the Lotus Temple. Experience the captivating contrast between ancient Mughal heritage and grand colonial architecture. Overnight stay in Delhi." },
      { day: "Day 2", title: "Delhi to Agra — Baby Taj & Mehtab Bagh Sunset", description: "After breakfast, drive to Agra via the Yamuna Expressway (approximately 3 hours). Visit the exquisite Itimad-ud-Daulah (Baby Taj), a delicate marble mausoleum featuring stunning lattice screens and intricate pietra dura inlay work. As evening falls, head to Mehtab Bagh for a spectacular sunset panorama of the Taj Mahal reflected in the Yamuna River. Overnight stay in Agra." },
      { day: "Day 3", title: "Sunrise Taj Mahal, Agra Fort & Drive to Jaipur", description: "Rise before dawn for a magical sunrise visit to the Taj Mahal, watching the ivory-white marble transform with the changing light. After a detailed guided tour and breakfast, explore the magnificent Agra Fort with its grand palaces and views of the Taj from the Musamman Burj. Depart for Jaipur via Fatehpur Sikri, Emperor Akbar's abandoned Mughal capital. Continue the drive to Jaipur (approximately 4 hours). Overnight stay in Jaipur." },
      { day: "Day 4", title: "Jaipur — Forts, Palaces, Observatory & Pushkar", description: "After breakfast, explore the majestic Amber Fort with its Sheesh Mahal (Hall of Mirrors) and panoramic views — enjoy an optional elephant ride to the entrance. Visit the picturesque Jal Mahal (Water Palace) floating in Man Sagar Lake. Photograph the iconic Hawa Mahal (Palace of Winds) with its 953 carved windows. Tour the magnificent City Palace and the Jantar Mantar UNESCO astronomical observatory with the world's largest stone sundial. Visit the ancient Galtaji (Monkey Temple) set in a narrow crevice in the Aravalli hills. In the afternoon, drive to the sacred town of Pushkar (approximately 3 hours). Overnight stay in Pushkar." },
      { day: "Day 5", title: "Pushkar — Sacred Lake, Temples & Drive to Jodhpur", description: "Explore the holy town of Pushkar, one of India's most ancient cities. Visit Pushkar Lake with its 52 bathing ghats considered sacred by Hindu pilgrims. See the Man Mahal, a former royal guesthouse overlooking the lake. Visit the famous Brahma Temple, one of very few temples in the world dedicated to Lord Brahma, the creator god of Hinduism. Browse the vibrant local markets filled with silver jewelry, embroidered textiles, leather goods, and aromatic spices. After lunch, drive to the Blue City of Jodhpur (approximately 4 hours). Overnight stay in Jodhpur." },
      { day: "Day 6", title: "Jodhpur — Mehrangarh Fort, Palaces & Blue City", description: "Discover the magnificent city of Jodhpur, dominated by the imposing Mehrangarh Fort — one of India's largest and most impressive forts, perched 125 meters above the city on a volcanic rock hill. Explore the fort's intricate palaces including the Moti Mahal (Pearl Palace), Phool Mahal (Flower Palace), and Sheesh Mahal (Mirror Palace), along with a stunning collection of royal artifacts, palanquins, and weaponry. Visit the pristine white marble Jaswant Thada cenotaph, a beautifully carved memorial often called the Taj Mahal of Rajasthan. See the grand Umaid Bhawan Palace, one of the world's largest private residences, built in Art Deco style. Wander through the atmospheric blue-painted streets of the old city and visit the bustling Clock Tower market surrounded by spice merchants, vegetable sellers, and traditional handicraft shops. Overnight stay in Jodhpur." },
      { day: "Day 7", title: "Drive to Udaipur via Ranakpur — Lakes & Departure", description: "After breakfast, drive to the romantic city of Udaipur (approximately 5-6 hours) with an en route stop at the stunning Ranakpur Jain Temple, an architectural masterpiece featuring 1,444 intricately carved marble pillars, no two of which are alike. Upon arrival in Udaipur, visit the beautiful Jagdish Temple, a 17th-century Indo-Aryan temple with exquisite carvings. Explore the magnificent City Palace of Udaipur, the largest palace complex in Rajasthan, perched on the banks of Lake Pichola with breathtaking panoramic views. Enjoy a serene boat ride on Lake Pichola, gliding past the famous Lake Palace (Jag Niwas) and Jag Mandir islands. Visit Fateh Sagar Lake and the peaceful Saheliyon ki Bari (Garden of the Maidens) with its ornamental fountains and marble elephants. Transfer to the airport or continue onward, concluding your unforgettable Royal Rajasthan journey." },
    ],
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=800&q=80",
  },
  {
    id: "rajasthan-8day",
    name: "8 Day Royal Rajasthan Tour",
    category: "rajasthan",
    duration: "8 Days / 7 Nights",
    price: 200,
    originalPrice: 300,
    currency: "USD",
    description:
      "A deeper dive into Rajasthan's royal heritage with Pushkar and Jaisalmer included.",
    longDescription:
      "Go deeper into Rajasthan with visits to the golden city of Jaisalmer and the sacred town of Pushkar. Experience a camel safari in the Thar Desert, explore ornate Jain temples, and witness the spiritual atmosphere of Pushkar's lakeside ghats.",
    highlights: ["Jaisalmer desert safari", "Pushkar Lake", "Mehrangarh Fort", "Havelis of Rajasthan"],
    included: ["7 nights hotels", "All meals", "Desert camping", "Private car", "Guides", "Camel safari"],
    excluded: [
      "Meals beyond specified",
      "Personal expenses",
      "Tips and gratuities",
    ],
    itinerary: [
      { day: "Day 1-2", title: "Jaipur — The Pink City", description: "Arrive in Jaipur and spend two full days exploring the vibrant capital of Rajasthan. Visit the majestic Amber Fort, a stunning hilltop fortress blending Rajput and Mughal architecture with its dazzling Sheesh Mahal (Hall of Mirrors), ornate Ganesh Pol gateway, and panoramic views over Maota Lake. Explore the magnificent City Palace, still partially home to the royal family, featuring the Mubarak Mahal textile museum and the Diwan-i-Khas with the world's largest sterling silver vessels. Marvel at the iconic Hawa Mahal (Palace of Winds) with its extraordinary facade of 953 intricately carved sandstone jharokha windows. Visit the Jantar Mantar UNESCO World Heritage astronomical observatory, home to the world's largest stone sundial. Browse Jaipur's legendary bazaars for block-printed textiles, precious gemstones, lac bangles, blue pottery, and traditional Rajasthani handicrafts." },
      { day: "Day 3", title: "Pushkar — Sacred Lake & Brahma Temple", description: "Drive to the holy town of Pushkar, one of India's most ancient and revered pilgrimage sites. Visit the sacred Pushkar Lake surrounded by 52 bathing ghats where pilgrims from across India come to perform ritual ablutions. Explore the world-famous Brahma Temple, one of the extremely rare temples dedicated to Lord Brahma, the creator deity in Hinduism. Wander through the vibrant bazaars selling silver jewelry, embroidered textiles, aromatic incense, and colorful Rajasthani crafts. Experience the spiritual atmosphere as temple bells ring and devotional chants echo across the serene lakeside." },
      { day: "Day 4-5", title: "Jaisalmer — The Golden City & Desert Safari", description: "Journey to the magnificent Golden City of Jaisalmer, rising like a mirage from the vast Thar Desert. Explore the breathtaking Jaisalmer Fort (Sonar Quila), one of the world's few living forts where approximately 3,000 people still reside within its golden sandstone walls. Visit the ornate Patwon ki Haveli and Salim Singh ki Haveli, stunning merchant mansions adorned with exquisitely carved sandstone facades, intricate jharokha windows, and elaborate balconies that showcase the finest of Rajasthani craftsmanship. In the afternoon, embark on an unforgettable camel safari through the rolling golden sand dunes of the Thar Desert. As the sun sets over the desert horizon, enjoy an overnight camping experience under a canopy of brilliant desert stars with traditional Rajasthani folk music, dance performances, and a delicious campfire dinner." },
      { day: "Day 6", title: "Jodhpur — The Blue City & Mehrangarh Fort", description: "Drive to the dramatic Blue City of Jodhpur and visit the imposing Mehrangarh Fort, one of the largest and most spectacular forts in India, perched 125 meters above the city on a massive volcanic rock outcrop. Explore the fort's magnificently decorated palaces including the Moti Mahal (Pearl Palace), Phool Mahal (Flower Palace), and Sheesh Mahal (Mirror Palace), along with an impressive museum collection of royal palanquins, armor, paintings, and textiles. Visit the pristine white marble Jaswant Thada cenotaph and wander through the atmospheric blue-painted streets of the old city below the fort, discovering hidden temples, traditional dye workshops, and the bustling Clock Tower spice market." },
      { day: "Day 7", title: "Udaipur — The City of Lakes", description: "Drive to the romantic lake city of Udaipur, often called the Venice of the East. Explore the magnificent City Palace, the largest palace complex in Rajasthan, featuring ornate balconies, towers, and courtyards perched dramatically above Lake Pichola. Visit the beautiful Jagdish Temple, stroll through the charming old city streets, and enjoy a magical boat ride on Lake Pichola passing the iconic Lake Palace and Jag Mandir island palaces. Experience the enchanting atmosphere of this most romantic of Indian cities as the sun sets over the shimmering lakes and the Aravalli hills beyond." },
      { day: "Day 8", title: "Departure", description: "After a final leisurely breakfast, enjoy some free time for last-minute shopping in Udaipur's charming markets for miniature paintings, silver jewelry, traditional textiles, and wooden crafts before transferring to the airport for your departure flight. Bid farewell to the Land of Kings with a treasure trove of memories from one of India's most magnificent states." },
    ],
    image: "https://images.unsplash.com/photo-1609947017136-9daf32a76e94?w=800&q=80",
  },
  {
    id: "rajasthan-9day",
    name: "9 Day Royal Rajasthan Tour",
    category: "rajasthan",
    duration: "9 Days / 8 Nights",
    price: 200,
    originalPrice: 300,
    currency: "USD",
    description:
      "The complete Rajasthan experience covering all major cities and hidden gems.",
    longDescription:
      "Nine days to discover every facet of Rajasthan — from the sacred temples of Mount Abu to the sand dunes of the Thar Desert, the blue streets of Jodhpur to the romantic lakes of Udaipur. This tour covers it all at a comfortable pace.",
    highlights: ["Mount Abu", "Ranakpur temples", "Camel safari", "Traditional cuisine"],
    included: ["8 nights hotels", "All meals", "Private car", "Expert guides", "All entry tickets", "Desert experience"],
    excluded: [
      "Meals beyond specified",
      "Personal expenses",
      "Tips and gratuities",
    ],
    itinerary: [
      { day: "Day 1-2", title: "Jaipur — The Pink City in Depth", description: "Arrive in the vibrant Pink City of Jaipur and spend two days exploring its magnificent royal heritage. Visit the majestic Amber Fort with its stunning hilltop architecture, dazzling Sheesh Mahal (Hall of Mirrors), and panoramic views over Maota Lake — optionally enjoy an elephant ride up to the entrance. Explore the City Palace with its exquisite blend of Rajasthani and Mughal architecture, the Jantar Mantar UNESCO astronomical observatory with the world's largest stone sundial, and photograph the iconic Hawa Mahal (Palace of Winds). Browse the legendary bazaars of Johari Bazaar and Bapu Bazaar for traditional Rajasthani textiles, gemstone jewelry, lac bangles, blue pottery, and handcrafted silverware. Enjoy authentic Rajasthani cuisine including dal baati churma, gatte ki sabzi, and pyaaz ki kachori." },
      { day: "Day 3", title: "Ajmer & Pushkar — Faith & Spirituality", description: "Drive to the historic city of Ajmer, home to the revered Dargah Sharif (Ajmer Sharif), the shrine of the Sufi saint Moinuddin Chishti, one of the most important Muslim pilgrimage sites in India, attracting millions of devotees from all faiths each year. Experience the spiritual atmosphere and the qawwali musical traditions. Continue to the sacred town of Pushkar to visit the holy Pushkar Lake surrounded by 52 bathing ghats, the rare Brahma Temple, and the vibrant lakeside bazaars selling silver jewelry, embroidered textiles, and aromatic spices." },
      { day: "Day 4-5", title: "Jaisalmer — Golden Fort & Desert Safari", description: "Journey to the mesmerizing Golden City of Jaisalmer, rising like a sandcastle mirage from the Thar Desert. Explore the stunning Jaisalmer Fort (Sonar Quila), one of the world's few living forts with approximately 3,000 residents still living within its golden sandstone walls. Visit the intricately carved merchant havelis — Patwon ki Haveli and Salim Singh ki Haveli — showcasing the finest examples of Rajasthani sandstone carving. Experience an unforgettable desert safari on camelback through the rolling Sam Sand Dunes, followed by an overnight camping experience under a vast desert sky blazing with millions of stars, accompanied by traditional Rajasthani folk music, dance, and a delicious campfire dinner." },
      { day: "Day 6", title: "Jodhpur — The Blue City", description: "Drive to the dramatic Blue City of Jodhpur and explore the awe-inspiring Mehrangarh Fort, one of India's largest and most formidable forts. Perched 125 meters above the city on a volcanic rock outcrop, the fort houses magnificently decorated palaces including the Moti Mahal (Pearl Palace), Phool Mahal (Flower Palace), and an extensive museum of royal artifacts. Visit the pristine white marble Jaswant Thada cenotaph, an architectural gem often compared to the Taj Mahal. Wander through the atmospheric blue-painted streets of the old city and browse the bustling Clock Tower market for spices, handicrafts, and traditional textiles." },
      { day: "Day 7", title: "Mount Abu — Rajasthan's Hill Station", description: "Drive to Mount Abu, the only hill station in Rajasthan, nestled in the lush green Aravalli hills at an elevation of 1,220 meters. Visit the extraordinary Dilwara Temples, a complex of five Jain temples dating from the 11th to 13th centuries, considered among the finest examples of Indian temple architecture. The temples feature incredibly intricate marble carvings so detailed they rival lacework — particularly the Vimal Vasahi and Luna Vasahi temples with their breathtaking ceiling medallions. Enjoy a peaceful boat ride on the serene Nakki Lake, surrounded by hills and unique rock formations, and take in the refreshing mountain air of this unique desert oasis." },
      { day: "Day 8-9", title: "Udaipur — Venice of the East & Departure", description: "Drive to the enchanting lake city of Udaipur, widely regarded as India's most romantic city. Spend a full day exploring the magnificent City Palace, the largest palace complex in Rajasthan, with its ornate balconies, towers, and courtyards overlooking Lake Pichola. Visit the beautiful Jagdish Temple, stroll through Saheliyon ki Bari (Garden of the Maidens) with its ornamental fountains and lotus pools, and explore the charming old city streets. Enjoy a magical sunset boat ride on Lake Pichola, passing the iconic Lake Palace (Jag Niwas) and Jag Mandir island palaces. On the final morning, enjoy some free time for shopping before transferring to the airport for your departure, concluding your comprehensive Royal Rajasthan adventure." },
    ],
    image: "https://images.unsplash.com/photo-1586612438666-ffd287da2b25?w=800&q=80",
  },
  {
    id: "rajasthan-12day",
    name: "12 Day Royal Rajasthan Tour",
    category: "rajasthan",
    duration: "12 Days / 11 Nights",
    price: 200,
    originalPrice: 300,
    currency: "USD",
    description:
      "The ultimate Rajasthan journey — every palace, every fort, every experience across the golden desert state.",
    longDescription:
      "The definitive Rajasthan experience. Twelve days to immerse yourself in the land of kings — from Delhi through every major Rajasthani city, with desert camping, palace stays, cooking classes, textile workshops, and moments of pure magic at every turn.",
    highlights: ["All major Rajasthan cities", "Desert camping", "Heritage hotels", "Complete experience"],
    included: ["11 nights heritage hotels", "All meals", "Private luxury car", "Expert guides", "All activities", "Domestic flights"],
    excluded: [
      "Meals beyond specified",
      "Personal expenses",
      "Tips and gratuities",
    ],
    itinerary: [
      { day: "Day 1", title: "Delhi — Capital Exploration", description: "Arrive in India's vibrant capital and embark on a comprehensive sightseeing tour. Explore Old Delhi with the magnificent Jama Masjid (India's largest mosque), an exhilarating rickshaw ride through Chandni Chowk's bustling historic lanes, and the imposing Red Fort. Discover New Delhi's grand landmarks including Humayun's Tomb, India Gate, Parliament House, Qutub Minar, and the Lotus Temple. Experience the fascinating blend of ancient Mughal heritage and colonial grandeur that defines this extraordinary capital city." },
      { day: "Day 2-3", title: "Jaipur — Complete Pink City Experience", description: "Drive to Jaipur and spend two full days discovering every facet of the Pink City. Visit the majestic Amber Fort with its stunning Sheesh Mahal (Hall of Mirrors), ornate Ganesh Pol gateway, and panoramic Aravalli views — enjoy an elephant ride to the entrance. Explore the City Palace with its Mubarak Mahal and Diwan-i-Khas housing the world's largest silver vessels. Marvel at the iconic Hawa Mahal (Palace of Winds) with its 953 intricately carved windows. Visit the Jantar Mantar UNESCO observatory with the world's largest stone sundial. Explore the Nahargarh Fort for sunset panoramic views over the city. Browse the legendary bazaars of Johari Bazaar for gemstones, Bapu Bazaar for textiles, and Tripolia Bazaar for traditional lac bangles. Enjoy cooking classes in traditional Rajasthani cuisine and visit textile workshops demonstrating centuries-old block-printing techniques." },
      { day: "Day 4", title: "Pushkar — Holy Town & Camel Fair Grounds", description: "Drive to the sacred town of Pushkar, one of the world's oldest cities and a major Hindu pilgrimage destination. Visit the holy Pushkar Lake surrounded by 52 bathing ghats where devotees perform ritual ablutions. Explore the rare Brahma Temple, one of the very few temples in the world dedicated to Lord Brahma. Walk through the famous camel fair grounds where the world-renowned Pushkar Camel Fair takes place annually. Browse the vibrant markets for silver jewelry, embroidered textiles, leather goods, and aromatic spices. Experience the deeply spiritual atmosphere as temple bells ring and devotional chants echo across the peaceful lakeside." },
      { day: "Day 5-6", title: "Jaisalmer — Golden Fort & Desert Safari", description: "Journey to the magnificent Golden City of Jaisalmer, rising like a medieval sandcastle from the vast Thar Desert. Explore the breathtaking Jaisalmer Fort (Sonar Quila), a living UNESCO fort where approximately 3,000 people still reside within its golden sandstone walls. Marvel at the ornate Patwon ki Haveli — a complex of five elaborately carved merchant mansions — and Salim Singh ki Haveli with its distinctive peacock-shaped roof brackets. Visit the Bada Bagh royal cenotaphs and explore the hidden Jain temples within the fort featuring exquisite stone carvings. Embark on an unforgettable camel safari through the rolling Sam Sand Dunes, camping overnight under the spectacular desert sky with traditional Rajasthani folk music, energetic Kalbeliya dance performances, and a sumptuous campfire dinner featuring local desert cuisine." },
      { day: "Day 7-8", title: "Jodhpur — Blue City & Spice Markets", description: "Drive to the dramatic Blue City of Jodhpur, named for the thousands of blue-painted houses that cascade down the hillside beneath the mighty Mehrangarh Fort. Explore this awe-inspiring fortress — one of India's largest — perched 125 meters above the city on a volcanic rock outcrop. Discover its magnificent palaces including the Moti Mahal (Pearl Palace), Phool Mahal (Flower Palace), and Sheesh Mahal (Mirror Palace), along with an extensive museum of royal palanquins, armor, paintings, and musical instruments. Visit the pristine white marble Jaswant Thada cenotaph, the grand Umaid Bhawan Palace (one of the world's largest private residences built in Art Deco style), and wander through the atmospheric blue-painted streets discovering hidden temples and traditional indigo dye workshops. Browse the bustling Clock Tower market surrounded by centuries-old spice merchants, vegetable sellers, and handicraft shops overflowing with Jodhpuri mojari shoes, bandhani textiles, and wooden furniture." },
      { day: "Day 9", title: "Ranakpur — Jain Temple Architectural Marvel", description: "Drive through the scenic Aravalli hills to the remarkable Ranakpur Jain Temple complex, one of the most important and largest Jain temples in India. This 15th-century architectural masterpiece is supported by an astounding 1,444 intricately carved marble pillars — no two of which are alike — creating a mesmerizing forest of stone beneath ornate domed ceilings. The main Chaumukha Temple (Four-Faced Temple) dedicated to Adinath features four entrances symbolizing the Jain concept of conquering all four directions. Spend time admiring the extraordinary craftsmanship where every surface is covered in detailed carvings of deities, mythological figures, and geometric patterns of staggering complexity." },
      { day: "Day 10-11", title: "Udaipur — Lakes, Palaces & Boat Rides", description: "Arrive in the enchanting City of Lakes, Udaipur, widely considered India's most romantic city. Spend two full days exploring this jewel of Rajasthan. Visit the magnificent City Palace, the largest palace complex in the state, with its ornate balconies, towers, and courtyards perched dramatically above Lake Pichola. Explore the beautiful Jagdish Temple with its exquisite Indo-Aryan carvings. Stroll through Saheliyon ki Bari (Garden of the Maidens) with its ornamental fountains, marble elephants, and lotus pools. Enjoy a magical sunset boat ride on Lake Pichola, passing the iconic Lake Palace (Jag Niwas) — one of the world's most photographed hotels — and the Jag Mandir island palace. Visit the Fateh Sagar Lake and the serene Monsoon Palace perched high above the city for panoramic views. Explore the charming old city streets with art galleries, traditional puppet workshops, and miniature painting studios." },
      { day: "Day 12", title: "Departure from Udaipur", description: "After a final breakfast at your heritage hotel, enjoy some free time for last-minute shopping in Udaipur's delightful markets for miniature paintings, silver jewelry, traditional textiles, hand-painted wooden crafts, and aromatic Rajasthani spices. Transfer to the airport for your departure flight, bidding farewell to the magnificent Land of Kings — Rajasthan — with twelve days of unforgettable memories spanning ancient forts, shimmering lakes, golden deserts, and the warm hospitality of India's most regal state." },
    ],
    image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=800&q=80",
  },
  {
    id: "photo-taj",
    name: "Taj Mahal Photography Tour",
    category: "photography",
    duration: "1 Day",
    price: 250,
    originalPrice: 360,
    currency: "USD",
    description:
      "A dedicated photography tour of the Taj Mahal with expert guides who know the best angles and timing.",
    longDescription:
      "Designed for photography enthusiasts, this tour takes you to every secret viewpoint of the Taj Mahal. Your guide is both a local expert and photography enthusiast who knows the exact times, angles, and locations for the perfect shot. From the classic reflection pool to hidden rooftop views, you'll capture images that go far beyond the typical tourist photo.",
    highlights: ["Golden hour shots", "Hidden viewpoints", "Professional tips", "Mehtab Bagh sunset"],
    included: ["Hotel pickup", "Photography guide", "Entry tickets", "Mehtab Bagh access", "Light breakfast"],
    excluded: [
      "Meals beyond specified",
      "Personal expenses",
      "Tips and gratuities",
    ],
    itinerary: [
      { day: "5:30 AM", title: "Sunrise Golden Hour Session", description: "Arrive at the Taj Mahal complex in the precious minutes before sunrise, positioning yourself at the optimal vantage points that most tourists never discover. As the first golden rays of sunlight break across the horizon, capture the Taj Mahal's transformation from a ghostly silhouette to a warm amber glow, then brilliant white marble. Your photography guide helps you master the classic reflection pool shot with the monument perfectly mirrored in the still water of the Charbagh garden channels, and advises on exposure settings for the challenging contrast between the luminous marble and shadowed archways." },
      { day: "8:00 AM", title: "Hidden Angles & Secret Viewpoints", description: "Explore the lesser-known viewpoints that only locals and seasoned photographers know about. Capture the Taj Mahal through ornate Mughal archways that create natural frames, from the elevated terraces of the mosque and jawab flanking the main mausoleum, and from angles that reveal the extraordinary symmetry and scale of the complex. Your guide shares composition techniques for photographing the intricate pietra dura marble inlay details, the delicate calligraphy panels, and the geometric precision of the gardens — the macro details that tell the deeper story of this architectural masterpiece." },
      { day: "11:00 AM", title: "Break, Lunch & Photo Review", description: "Take a well-deserved break with a light lunch at a local restaurant. This is an excellent time to review your morning captures with your photography guide, who can offer feedback on composition, exposure, and post-processing suggestions. Discuss strategies for the afternoon golden hour session and plan which specific shots and perspectives you want to prioritize for the sunset session at Mehtab Bagh." },
      { day: "4:00 PM", title: "Mehtab Bagh Sunset Session", description: "Head to Mehtab Bagh (Moonlight Garden) on the northern bank of the Yamuna River for the afternoon golden hour and sunset session. This location offers arguably the most spectacular photographic perspective of the Taj Mahal — the full monument framed against the western sky as the setting sun paints it in warm hues of gold, amber, and deep orange. Capture dramatic silhouettes, long-exposure reflections in the Yamuna River, and the magical moment when the marble seems to absorb and radiate the sunset colors. Your guide helps you find the perfect positions along the garden terraces for both wide-angle panoramas and telephoto compression shots." },
    ],
    image: "https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?w=800&q=80",
  },
  {
    id: "photo-delhi",
    name: "Delhi Photography Tour",
    category: "photography",
    duration: "1 Day",
    price: 250,
    originalPrice: 360,
    currency: "USD",
    description:
      "Capture the vibrant streets, historic monuments, and hidden corners of Delhi with a photography guide.",
    longDescription:
      "Delhi is a photographer's dream — layers of history, vibrant street life, and architectural wonders at every turn. This tour takes you beyond the tourist spots to capture the soul of the city: the spice markets of Chandni Chowk, the serene beauty of Humayun's Tomb, the geometric perfection of Qutub Minar, and the colorful chaos of daily life.",
    highlights: ["Old Delhi streets", "Humayun's Tomb", "Qutub Minar", "Street photography"],
    included: ["Hotel pickup", "Photography guide", "Entry tickets", "Rickshaw ride in Old Delhi", "Chai stops"],
    excluded: [
      "Meals beyond specified",
      "Personal expenses",
      "Tips and gratuities",
    ],
    itinerary: [
      { day: "6:00 AM", title: "Old Delhi Morning — Streets Coming Alive", description: "Begin your photography journey in the atmospheric lanes of Old Delhi as the ancient city awakens with the first light of dawn. Capture the magical early morning scenes of Chandni Chowk — flower sellers arranging marigold garlands, chai wallahs stoking their fires, shopkeepers rolling up their shutters, and the narrow lanes slowly filling with rickshaws, cycles, and pedestrians. Your photography guide leads you through the aromatic Khari Baoli spice market (Asia's largest), where mountains of colorful spices, dried fruits, and herbs create extraordinary visual compositions. Photograph the stunning facades of centuries-old havelis, the bustling Paranthe Wali Gali (the famous fried bread street), and the magnificent Jama Masjid — India's largest mosque — with its soaring minarets catching the golden morning light." },
      { day: "9:00 AM", title: "Humayun's Tomb — Mughal Architecture Masterclass", description: "Visit the magnificent Humayun's Tomb, the garden tomb that served as the direct architectural inspiration for the Taj Mahal, in the soft mid-morning light that perfectly illuminates its red sandstone and white marble facade. This UNESCO World Heritage site offers extraordinary photographic opportunities — capture the perfect symmetry through the grand entrance gateway, the monument reflected in the garden water channels, the intricate geometric lattice screens (jali work) creating patterns of light and shadow, and the lush Charbagh gardens that frame the tomb from every angle. Your guide helps you master architectural photography techniques including perspective correction, leading lines, and using the stunning Mughal archways as natural compositional frames." },
      { day: "12:00 PM", title: "Street Food Photography & Tasting", description: "Combine culinary exploration with street food photography in some of Delhi's most photogenic food lanes. Capture the theatrical preparation of crispy jalebis being swirled into hot oil, steaming plates of chole bhature being served on leaf plates, the vibrant colors of freshly squeezed juice stalls, and the animated expressions of street vendors and customers. Your guide shares tips for food photography in challenging lighting conditions and how to capture the energy and atmosphere of Indian street food culture. Sample the incredible flavors as you shoot, fueling yourself for the afternoon session." },
      { day: "3:00 PM", title: "Qutub Minar & Hauz Khas — Ancient & Modern", description: "Photograph the soaring Qutub Minar, the world's tallest brick minaret at 73 meters, in the warm afternoon light that brings out the rich textures of its red sandstone surface and highlights the intricate Arabic calligraphy and geometric patterns carved into each of its five distinct stories. Explore the surrounding Qutub complex with its Iron Pillar (which has mysteriously resisted rust for over 1,600 years), ruined colonnades, and ornate gateways. Continue to the bohemian neighborhood of Hauz Khas Village, where medieval ruins meet contemporary art galleries, colorful street art, and trendy cafes — creating a fascinating photographic contrast between Delhi's ancient past and its creative, modern present." },
    ],
    image: "https://images.unsplash.com/photo-1597040663342-45b6ba68fa0b?w=800&q=80",
  },
  {
    id: "agra-wildlife",
    name: "Agra with Wildlife SOS Tour",
    category: "two-day",
    duration: "2 Days / 1 Night",
    price: 130,
    originalPrice: 198,
    currency: "USD",
    description:
      "Combine the Taj Mahal visit with a heartwarming trip to the Wildlife SOS Elephant Conservation Center.",
    longDescription:
      "A unique two-day experience that combines the architectural splendor of the Taj Mahal with the heartwarming work of the Wildlife SOS Elephant Conservation Center in Agra. Meet rescued elephants, learn about conservation efforts, and witness the incredible rehabilitation work being done.",
    highlights: ["Taj Mahal", "Wildlife SOS center", "Elephant conservation", "Agra Fort"],
    included: ["1 night hotel", "Private car", "Guide", "Entry tickets", "Wildlife SOS donation", "Meals"],
    excluded: [
      "Meals beyond specified",
      "Personal expenses",
      "Tips and gratuities",
    ],
    itinerary: [
      { day: "Day 1", title: "Delhi to Agra — Taj Mahal & Evening Exploration", description: "Depart from your Delhi hotel in the morning in a comfortable private AC car, driving along the Yamuna Expressway to the historic city of Agra (approximately 3 hours). Upon arrival, head straight to the magnificent Taj Mahal for a comprehensive guided tour of this UNESCO World Heritage site and one of the New Seven Wonders of the World. Your expert guide brings the monument to life with vivid stories of Emperor Shah Jahan's eternal love for Mumtaz Mahal as you examine the stunning white Makrana marble facade, intricate pietra dura inlay work featuring 28 types of precious and semi-precious stones, the perfectly symmetrical Charbagh gardens, and the mesmerizing interior chambers adorned with delicate calligraphy. After this awe-inspiring visit, check into your hotel, enjoy dinner, and rest for the evening." },
      { day: "Day 2", title: "Wildlife SOS Center, Agra Fort & Return to Delhi", description: "Start your morning with a deeply moving and educational visit to the Wildlife SOS Elephant Conservation and Care Center, located on the outskirts of Agra. This internationally acclaimed facility is home to rescued elephants that have been saved from abuse, exploitation, and captivity across India. Walk through the spacious enclosures where elephants receive medical treatment, nutritious food, and the freedom to roam, swim, and socialize for the first time in their lives. Learn about the organization's remarkable rescue operations, veterinary rehabilitation programs, and long-term conservation efforts from passionate staff members. After this heartwarming experience, visit the magnificent Agra Fort, a massive red sandstone UNESCO World Heritage site featuring grand Mughal palaces, ornate courtyards, the dazzling Sheesh Mahal (Mirror Palace), and poignant views of the Taj Mahal from the Musamman Burj where Shah Jahan spent his final imprisoned years. Enjoy lunch before beginning your comfortable return drive to Delhi, arriving by evening." },
    ],
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80",
  },
  {
    id: "agra-fatehpur",
    name: "Agra & Fatehpur Sikri Tour",
    category: "two-day",
    duration: "2 Days / 1 Night",
    price: 75,
    originalPrice: 120,
    currency: "USD",
    description:
      "Explore both the Taj Mahal and the abandoned Mughal city of Fatehpur Sikri over two leisurely days.",
    longDescription:
      "Two days to fully immerse yourself in Mughal history. Day one is devoted to the Taj Mahal and Agra Fort. Day two takes you to the hauntingly beautiful abandoned city of Fatehpur Sikri — a UNESCO World Heritage site with perfectly preserved Mughal architecture, including the magnificent Buland Darwaza, the tallest gateway in the world.",
    highlights: ["Taj Mahal", "Fatehpur Sikri", "Buland Darwaza", "Mughal architecture"],
    included: ["1 night hotel", "Private car", "Guide", "Entry tickets", "Breakfast"],
    excluded: [
      "Meals beyond specified",
      "Personal expenses",
      "Tips and gratuities",
    ],
    itinerary: [
      { day: "Day 1", title: "Agra — Taj Mahal & Agra Fort", description: "Arrive in Agra and begin your immersive exploration of Mughal heritage with a visit to the magnificent Taj Mahal, the crown jewel of Islamic architecture in India and one of the most universally admired masterpieces of the world's heritage. Your expert guide leads you through the sprawling complex, explaining the fascinating love story of Emperor Shah Jahan who commissioned this monument as an eternal tribute to his beloved wife Mumtaz Mahal. Examine the stunning white Makrana marble facade, the intricate pietra dura inlay work with semi-precious stones sourced from across Asia, the perfectly proportioned minarets, and the symmetrical Charbagh gardens with their reflecting pools. After lunch, explore the massive Agra Fort, a red sandstone UNESCO World Heritage site spanning 94 acres along the Yamuna River. Walk through the grand Mughal palaces including Jahangir Palace with its blend of Hindu and Islamic motifs, the white marble Khas Mahal, the dazzling Sheesh Mahal (Mirror Palace), and the poignant Musamman Burj tower where the imprisoned Shah Jahan spent his last days gazing at his beloved Taj Mahal across the river. Check into your hotel for overnight stay." },
      { day: "Day 2", title: "Fatehpur Sikri & Return to Delhi", description: "After breakfast, drive to the hauntingly beautiful abandoned city of Fatehpur Sikri (approximately 40 km from Agra), the magnificent Mughal capital built by Emperor Akbar the Great in 1571. This UNESCO World Heritage site was the seat of the Mughal Empire for just 14 years before being mysteriously abandoned, possibly due to water scarcity, leaving behind an extraordinarily well-preserved ghost city of palatial sandstone architecture. Enter through the towering Buland Darwaza (Gate of Magnificence), the tallest gateway in the world at 54 meters, built to commemorate Akbar's victory in Gujarat. Explore the five-story Panch Mahal with its 176 intricately carved columns, each unique in design. Visit the exquisite white marble Tomb of Salim Chishti with its stunning lattice screens (jali work) so finely carved they appear almost translucent. Wander through the Diwan-i-Khas (Hall of Private Audience) with its single massive pillar supporting a unique platform, Jodha Bai's Palace (the largest palace in the complex), and Birbal's House with its remarkable carved decorations. After this evocative journey into Mughal history, begin your return drive to Delhi, arriving by evening." },
    ],
    image: "https://images.unsplash.com/photo-1621621973777-cf29bc7be2e1?w=800&q=80",
  },
];

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export const services: Service[] = [
  {
    id: "tour-booking",
    title: "Tour Booking",
    description: "Activity-based tours for groups and individuals across India. From day trips to multi-week journeys.",
    icon: "Map",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80",
  },
  {
    id: "car-rental",
    title: "Car Rental",
    description: "A fleet of well-maintained AC cars and luxury coaches for comfortable travel across any distance.",
    icon: "Car",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80",
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking",
    description: "Accommodations ranging from budget-friendly to luxury 5-star hotels across the Indian subcontinent.",
    icon: "Hotel",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
  },
  {
    id: "guide-booking",
    title: "Guide Booking",
    description: "Professional, multilingual tour guides certified by the Ministry of Tourism for heritage and cultural interpretation.",
    icon: "Users",
    image: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=600&q=80",
  },
  {
    id: "flight-tickets",
    title: "Flight Tickets",
    description: "Domestic and international flight booking assistance at competitive rates.",
    icon: "Plane",
    image: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?w=600&q=80",
  },
  {
    id: "custom-itinerary",
    title: "Custom Itineraries",
    description: "Personalized tour planning tailored to your interests, budget, and schedule. Your dream trip, your way.",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
  },
];

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  rating: number;
  text: string;
  tourName: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Mitchell",
    country: "United Kingdom",
    rating: 5,
    text: "Absolutely incredible experience! Fardeen made our Taj Mahal trip unforgettable. The sunrise view was magical and our guide was so knowledgeable.",
    tourName: "Taj Mahal Sunrise Tour",
    avatar: "SM",
  },
  {
    id: "t2",
    name: "James & Emily Cooper",
    country: "Australia",
    rating: 5,
    text: "The Golden Triangle tour exceeded all expectations. Every detail was perfectly arranged. The hotels were lovely and the local experiences were authentic.",
    tourName: "5 Day Golden Triangle Tour",
    avatar: "JC",
  },
  {
    id: "t3",
    name: "Marco Rossi",
    country: "Italy",
    rating: 5,
    text: "Best photography tour I've ever taken. The guide knew all the secret spots for the perfect Taj Mahal shots. Highly recommend for any photographer!",
    tourName: "Taj Mahal Photography Tour",
    avatar: "MR",
  },
  {
    id: "t4",
    name: "Anna Schmidt",
    country: "Germany",
    rating: 5,
    text: "12 days in Rajasthan was a dream come true. From the desert camping to the palace hotels, every moment was special. Thank you, Fardeen Tours!",
    tourName: "12 Day Royal Rajasthan Tour",
    avatar: "AS",
  },
  {
    id: "t5",
    name: "David Chen",
    country: "Canada",
    rating: 5,
    text: "As a solo traveler, I felt completely safe and well taken care of. The driver was professional and the itinerary was perfectly paced.",
    tourName: "3 Day Golden Triangle Tour",
    avatar: "DC",
  },
  {
    id: "t6",
    name: "Sophie Laurent",
    country: "France",
    rating: 5,
    text: "Wonderful experience from booking to the last day. Communication was excellent and Fardeen personally ensured everything went smoothly.",
    tourName: "7 Day Royal Rajasthan Tour",
    avatar: "SL",
  },
];

// ===== CAR RENTALS =====

export interface CarRental {
  id: string;
  name: string;
  type: CarType;
  capacity: string;
  ac: boolean;
  image: string;
  description: string;
  features: string[];
  routes: CarRoute[];
}

export interface CarRoute {
  from: string;
  to: string;
  distance: string;
  priceOneWay: number;
  priceRoundTrip: number;
  duration: string;
}

export type CarType = "sedan" | "suv" | "luxury" | "tempo";

export const CAR_TYPES: { key: CarType; label: string }[] = [
  { key: "sedan", label: "Sedan" },
  { key: "suv", label: "SUV" },
  { key: "luxury", label: "Luxury" },
  { key: "tempo", label: "Tempo Traveller" },
];

export const carRentals: CarRental[] = [
  {
    id: "swift-dzire",
    name: "Maruti Swift Dzire",
    type: "sedan",
    capacity: "4 Passengers",
    ac: true,
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80",
    description: "Compact and fuel-efficient sedan, perfect for small groups and day trips. Comfortable AC cabin with ample boot space for luggage.",
    features: ["AC cabin", "4 passengers + driver", "Ample boot space", "Fuel efficient", "GPS equipped", "First aid kit"],
    routes: [
      { from: "Delhi", to: "Agra", distance: "233 km", priceOneWay: 35, priceRoundTrip: 55, duration: "3.5 hours" },
      { from: "Delhi", to: "Jaipur", distance: "280 km", priceOneWay: 40, priceRoundTrip: 65, duration: "4.5 hours" },
      { from: "Agra", to: "Jaipur", distance: "240 km", priceOneWay: 38, priceRoundTrip: 60, duration: "4 hours" },
      { from: "Delhi", to: "Haridwar", distance: "230 km", priceOneWay: 38, priceRoundTrip: 60, duration: "5 hours" },
      { from: "Delhi", to: "Chandigarh", distance: "250 km", priceOneWay: 40, priceRoundTrip: 65, duration: "4.5 hours" },
      { from: "Jaipur", to: "Udaipur", distance: "395 km", priceOneWay: 55, priceRoundTrip: 90, duration: "6 hours" },
    ],
  },
  {
    id: "toyota-etios",
    name: "Toyota Etios",
    type: "sedan",
    capacity: "4 Passengers",
    ac: true,
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
    description: "Reliable and spacious sedan from Toyota with excellent ride quality. A favorite for long-distance intercity travel.",
    features: ["Spacious AC cabin", "4 passengers + driver", "Large boot", "Smooth ride", "Power steering", "Central locking"],
    routes: [
      { from: "Delhi", to: "Agra", distance: "233 km", priceOneWay: 38, priceRoundTrip: 60, duration: "3.5 hours" },
      { from: "Delhi", to: "Jaipur", distance: "280 km", priceOneWay: 45, priceRoundTrip: 70, duration: "4.5 hours" },
      { from: "Agra", to: "Jaipur", distance: "240 km", priceOneWay: 42, priceRoundTrip: 65, duration: "4 hours" },
      { from: "Delhi", to: "Rishikesh", distance: "250 km", priceOneWay: 45, priceRoundTrip: 72, duration: "5.5 hours" },
      { from: "Delhi", to: "Mathura", distance: "180 km", priceOneWay: 30, priceRoundTrip: 48, duration: "3 hours" },
      { from: "Agra", to: "Lucknow", distance: "335 km", priceOneWay: 50, priceRoundTrip: 80, duration: "5.5 hours" },
    ],
  },
  {
    id: "toyota-innova",
    name: "Toyota Innova Crysta",
    type: "suv",
    capacity: "6 Passengers",
    ac: true,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
    description: "India's most popular premium MPV. Spacious 3-row seating with powerful engine, ideal for families and group tours across long distances.",
    features: ["3-row AC seating", "6 passengers + driver", "Premium interiors", "Powerful diesel engine", "Roof carrier available", "Charging ports"],
    routes: [
      { from: "Delhi", to: "Agra", distance: "233 km", priceOneWay: 55, priceRoundTrip: 85, duration: "3.5 hours" },
      { from: "Delhi", to: "Jaipur", distance: "280 km", priceOneWay: 65, priceRoundTrip: 100, duration: "4.5 hours" },
      { from: "Agra", to: "Jaipur", distance: "240 km", priceOneWay: 60, priceRoundTrip: 92, duration: "4 hours" },
      { from: "Delhi", to: "Manali", distance: "540 km", priceOneWay: 120, priceRoundTrip: 200, duration: "12 hours" },
      { from: "Delhi", to: "Shimla", distance: "350 km", priceOneWay: 85, priceRoundTrip: 140, duration: "7 hours" },
      { from: "Jaipur", to: "Jodhpur", distance: "335 km", priceOneWay: 75, priceRoundTrip: 120, duration: "5 hours" },
      { from: "Delhi", to: "Dehradun", distance: "255 km", priceOneWay: 65, priceRoundTrip: 105, duration: "5.5 hours" },
    ],
  },
  {
    id: "mahindra-xuv",
    name: "Mahindra XUV700",
    type: "suv",
    capacity: "6 Passengers",
    ac: true,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
    description: "Modern luxury SUV with advanced safety features and a premium cabin. Perfect for travelers who want comfort and style.",
    features: ["Panoramic sunroof", "6 passengers + driver", "ADAS safety", "Premium sound system", "Wireless charging", "Climate control"],
    routes: [
      { from: "Delhi", to: "Agra", distance: "233 km", priceOneWay: 60, priceRoundTrip: 95, duration: "3.5 hours" },
      { from: "Delhi", to: "Jaipur", distance: "280 km", priceOneWay: 70, priceRoundTrip: 110, duration: "4.5 hours" },
      { from: "Agra", to: "Jaipur", distance: "240 km", priceOneWay: 65, priceRoundTrip: 100, duration: "4 hours" },
      { from: "Delhi", to: "Nainital", distance: "300 km", priceOneWay: 80, priceRoundTrip: 130, duration: "6.5 hours" },
      { from: "Delhi", to: "Jim Corbett", distance: "260 km", priceOneWay: 72, priceRoundTrip: 115, duration: "5.5 hours" },
    ],
  },
  {
    id: "mercedes-eclass",
    name: "Mercedes E-Class",
    type: "luxury",
    capacity: "3 Passengers",
    ac: true,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    description: "Ultimate luxury sedan for VIP transfers and premium experiences. Plush leather interiors, whisper-quiet cabin, and chauffeur service.",
    features: ["Leather interiors", "3 passengers + chauffeur", "Climate control", "Rear entertainment", "Complimentary water", "WiFi available"],
    routes: [
      { from: "Delhi", to: "Agra", distance: "233 km", priceOneWay: 150, priceRoundTrip: 250, duration: "3.5 hours" },
      { from: "Delhi", to: "Jaipur", distance: "280 km", priceOneWay: 180, priceRoundTrip: 300, duration: "4.5 hours" },
      { from: "Delhi Airport", to: "City Hotel", distance: "30 km", priceOneWay: 50, priceRoundTrip: 80, duration: "45 min" },
      { from: "Agra", to: "Jaipur", distance: "240 km", priceOneWay: 160, priceRoundTrip: 270, duration: "4 hours" },
    ],
  },
  {
    id: "toyota-fortuner",
    name: "Toyota Fortuner",
    type: "luxury",
    capacity: "5 Passengers",
    ac: true,
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    description: "Premium SUV combining luxury with rugged capability. Commanding road presence with plush interiors, perfect for Rajasthan and hill station routes.",
    features: ["Premium cabin", "5 passengers + driver", "4WD available", "High ground clearance", "Cruise control", "LED lighting"],
    routes: [
      { from: "Delhi", to: "Agra", distance: "233 km", priceOneWay: 90, priceRoundTrip: 145, duration: "3.5 hours" },
      { from: "Delhi", to: "Jaipur", distance: "280 km", priceOneWay: 105, priceRoundTrip: 170, duration: "4.5 hours" },
      { from: "Delhi", to: "Manali", distance: "540 km", priceOneWay: 180, priceRoundTrip: 300, duration: "12 hours" },
      { from: "Jaipur", to: "Udaipur", distance: "395 km", priceOneWay: 130, priceRoundTrip: 210, duration: "6 hours" },
      { from: "Delhi", to: "Shimla", distance: "350 km", priceOneWay: 120, priceRoundTrip: 195, duration: "7 hours" },
    ],
  },
  {
    id: "tempo-12",
    name: "Tempo Traveller (12-Seater)",
    type: "tempo",
    capacity: "12 Passengers",
    ac: true,
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80",
    description: "Spacious mini-coach ideal for group tours, family trips, and corporate outings. Push-back seats with individual AC vents and ample luggage space.",
    features: ["Push-back seats", "12 passengers + driver", "Individual AC vents", "Large luggage area", "Music system", "Curtains & LED lights"],
    routes: [
      { from: "Delhi", to: "Agra", distance: "233 km", priceOneWay: 90, priceRoundTrip: 145, duration: "4 hours" },
      { from: "Delhi", to: "Jaipur", distance: "280 km", priceOneWay: 110, priceRoundTrip: 175, duration: "5 hours" },
      { from: "Delhi", to: "Haridwar", distance: "230 km", priceOneWay: 95, priceRoundTrip: 155, duration: "5.5 hours" },
      { from: "Delhi", to: "Manali", distance: "540 km", priceOneWay: 200, priceRoundTrip: 340, duration: "13 hours" },
      { from: "Jaipur", to: "Jodhpur", distance: "335 km", priceOneWay: 130, priceRoundTrip: 210, duration: "5.5 hours" },
    ],
  },
  {
    id: "tempo-17",
    name: "Tempo Traveller (17-Seater)",
    type: "tempo",
    capacity: "17 Passengers",
    ac: true,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    description: "Larger mini-coach for big groups. Comfortable seating with excellent headroom and luggage capacity. Perfect for wedding groups and large family tours.",
    features: ["17 push-back seats", "17 passengers + driver", "Dual AC", "Huge luggage space", "Entertainment system", "First aid kit"],
    routes: [
      { from: "Delhi", to: "Agra", distance: "233 km", priceOneWay: 110, priceRoundTrip: 180, duration: "4 hours" },
      { from: "Delhi", to: "Jaipur", distance: "280 km", priceOneWay: 135, priceRoundTrip: 220, duration: "5 hours" },
      { from: "Delhi", to: "Rishikesh", distance: "250 km", priceOneWay: 120, priceRoundTrip: 195, duration: "6 hours" },
      { from: "Delhi", to: "Shimla", distance: "350 km", priceOneWay: 160, priceRoundTrip: 265, duration: "8 hours" },
      { from: "Agra", to: "Jaipur", distance: "240 km", priceOneWay: 120, priceRoundTrip: 195, duration: "4.5 hours" },
    ],
  },
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "best-time-taj",
    title: "Best Time to Visit the Taj Mahal in 2025",
    excerpt: "Planning a trip to the Taj Mahal? Here's everything you need to know about the best seasons, timings, and tips for the perfect visit.",
    content: `The Taj Mahal is magnificent year-round, but timing your visit right can make the difference between a good experience and an extraordinary one.

## Best Seasons

**October to March** is widely considered the best time to visit. The weather is pleasant with temperatures ranging from 10-25°C, making it comfortable to explore the monument and its gardens. December and January can be quite cold in the mornings, but the misty atmosphere creates ethereal photographs.

**The monsoon season (July-September)** brings dramatic cloud formations that can create spectacular backdrops, though humidity is high and occasional closures may occur.

**Summer (April-June)** sees fewer tourists but temperatures can soar above 40°C. If you visit in summer, aim for the very early morning.

## Best Time of Day

**Sunrise** is magical — the Taj Mahal seems to glow from within as the first light hits the marble. Gates open 30 minutes before sunrise, and this is when you'll find the fewest crowds.

**Late afternoon** offers warm golden light that brings out the intricate marble inlay work. The sunset view from Mehtab Bagh across the Yamuna River is unforgettable.

## Practical Tips

- The Taj Mahal is closed on Fridays
- Book tickets online to avoid queue times
- Photography is allowed but tripods are not
- Wear comfortable shoes as you'll need to walk on marble
- Carry water, especially in warmer months

## Our Recommendation

For the ultimate experience, we recommend visiting during **October or November** at **sunrise**. The weather is perfect, the light is golden, and the gardens are lush from the recent monsoon.`,
    date: "2025-03-15",
    category: "Travel Tips",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80",
    readTime: "5 min read",
    author: "Fardeen Chaudhary",
  },
  {
    id: "golden-triangle-guide",
    title: "The Ultimate Golden Triangle Guide",
    excerpt: "Delhi, Agra, and Jaipur — the three gems of North India. Our comprehensive guide covers everything from must-see spots to hidden gems.",
    content: `The Golden Triangle is India's most iconic tourist circuit, connecting three extraordinary cities that together tell the story of India's rich past and vibrant present.

## Delhi — Where History Meets Modernity

Delhi is a city of contrasts. Start in **Old Delhi**, where narrow lanes buzz with activity — the spice market of Khari Baoli, the food stalls of Chandni Chowk, and the magnificent Jama Masjid create an overwhelming sensory experience.

In **New Delhi**, the wide boulevards designed by Edwin Lutyens lead to landmarks like India Gate, the Presidential Palace, and the serene Humayun's Tomb — often called the precursor to the Taj Mahal.

**Don't miss:** A rickshaw ride through Chandni Chowk at dawn, Humayun's Tomb at sunset, and street food at Paranthe Wali Gali.

## Agra — The City of Love

Agra needs little introduction — it's home to the Taj Mahal, one of the world's most recognizable monuments. But Agra offers much more than this single wonder.

The **Agra Fort** is a sprawling complex with stunning views of the Taj. **Fatehpur Sikri**, the abandoned Mughal capital just outside the city, is hauntingly beautiful. And the local **Petha sweets** are a must-try delicacy.

**Don't miss:** The Taj Mahal at sunrise, the view from Mehtab Bagh at sunset, and the intricate marble inlay workshops.

## Jaipur — The Pink City

Jaipur is a feast for the senses. The **Amber Fort** sprawls across a hilltop with mirror-work halls and panoramic views. The **Hawa Mahal** (Palace of Winds) is the city's most photographed landmark, and the **City Palace** is still partially occupied by the royal family.

Jaipur's bazaars are legendary — from block-printed textiles to gemstones, silver jewelry to leather goods, the shopping here is world-class.

**Don't miss:** Amber Fort in the morning light, Nahargarh Fort at sunset for panoramic views, and shopping in Johari Bazaar.

## How to Connect the Triangle

The three cities form a roughly equilateral triangle with each side about 250 km. The most common route is Delhi → Agra → Jaipur → Delhi, which flows naturally and allows you to stop at Fatehpur Sikri between Agra and Jaipur.

We recommend **at least 5 days** for a comfortable Golden Triangle tour, though 3-4 days work for a faster pace.`,
    date: "2025-02-28",
    category: "Guides",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
    readTime: "8 min read",
    author: "Fardeen Chaudhary",
  },
  {
    id: "rajasthan-food",
    title: "A Foodie's Guide to Rajasthan",
    excerpt: "From dal baati churma to laal maas, discover the rich culinary traditions of Rajasthan that will make your tour even more memorable.",
    content: `Rajasthani cuisine is as colorful and bold as the state itself. Born from the desert's scarcity, local cooks developed ingenious techniques to create flavorful dishes from minimal ingredients.

## The Must-Try Dishes

**Dal Baati Churma** is Rajasthan's most iconic dish — baked wheat balls (baati) served with lentils (dal) and a sweet crumbled wheat dessert (churma). The combination of savory and sweet in one meal is quintessentially Rajasthani.

**Laal Maas** is a fiery red meat curry that gets its color and heat from Mathania chilies. It's not for the faint-hearted, but for spice lovers, it's an unforgettable experience.

**Ker Sangri** is a desert vegetable dish made from dried berries and beans, unique to this region and surprisingly addictive with its tangy-spicy profile.

## City-Specific Specialties

Each Rajasthani city has its own culinary identity:
- **Jaipur**: Famous for its pyaaz ki kachori and ghevar dessert
- **Jodhpur**: Known for mirchi vada and mawa kachori
- **Udaipur**: Celebrated for its refined vegetarian cuisine by the lakeside
- **Jaisalmer**: Desert specialties like ker sangri and papad ki sabzi

## Street Food Adventures

Rajasthan's street food scene is vibrant. Don't miss the chai stalls that serve milky, spiced tea with crispy samosas. The lassi (yogurt drink) served in clay cups is refreshingly different from anything you'll find elsewhere.

## Dining Experiences

For a truly special evening, try a traditional Rajasthani thali at a heritage restaurant. These elaborate meals feature dozens of small dishes served on a large platter — a feast for both eyes and palate.

Many of our tours include visits to local cooking classes where you can learn to make these dishes yourself, taking the flavors of Rajasthan home with you.`,
    date: "2025-02-10",
    category: "Food & Culture",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    readTime: "6 min read",
    author: "Fardeen Chaudhary",
  },
  {
    id: "photo-tips",
    title: "10 Tips for Photographing Indian Monuments",
    excerpt: "Capture stunning photos of India's iconic monuments with these professional photography tips from our expert tour guides.",
    content: `India's monuments are among the most photogenic in the world, but capturing their true magnificence requires more than just pointing and shooting. Here are our top tips from years of guiding photographers.

## 1. Chase the Golden Hours
The hour after sunrise and before sunset bathes monuments in warm, directional light. The Taj Mahal at sunrise is a completely different experience than at noon.

## 2. Arrive Early
Most monuments open at sunrise. Being first in line means empty courtyards and unobstructed compositions — worth waking up for.

## 3. Look for Reflections
Many Indian monuments have reflecting pools or are situated near water. The Taj Mahal's reflection in its garden pools is iconic, but look for less obvious reflections too.

## 4. Include People for Scale
India's monuments are massive. Including a person in your frame — a fellow traveler, a guide, a vendor — instantly communicates the scale.

## 5. Explore Different Angles
Everyone shoots the Taj from the main gate. Walk around to the sides, visit Mehtab Bagh across the river, or photograph through archways for unique perspectives.

## 6. Respect the Light
Midday sun creates harsh shadows on carved surfaces. Overcast days are actually perfect for detailed architectural photography — soft, even light reveals intricate carvings.

## 7. Use Leading Lines
India's architecture is full of natural leading lines — corridors, arches, pathways. Use these to draw the viewer's eye toward your main subject.

## 8. Capture the Details
Don't just photograph the whole monument. Get close to the marble inlay at the Taj, the mirror work at Amber Fort, or the carved screens at Fatehpur Sikri.

## 9. Shoot in RAW
If your camera supports it, shoot in RAW format. India's extreme light conditions (bright marble against deep shadows) benefit enormously from RAW processing.

## 10. Put the Camera Down Sometimes
The most important tip: take time to simply look and absorb. Some moments are best captured in memory, not on a memory card.`,
    date: "2025-01-20",
    category: "Photography",
    image: "https://images.unsplash.com/photo-1506462945848-ac8ea6f609cc?w=800&q=80",
    readTime: "4 min read",
    author: "Fardeen Chaudhary",
  },
  {
    id: "women-safety",
    title: "Solo Female Travel in India: Safety Tips",
    excerpt: "India is a wonderful destination for solo female travelers. Here are our top safety tips and recommendations for a worry-free trip.",
    content: `India welcomes thousands of solo female travelers every year, and with the right preparation, it can be one of the most rewarding travel experiences of your life. Here's our practical guide based on years of helping women explore India safely.

## Before You Go

**Research your destinations.** Stick to well-traveled tourist areas, especially for your first visit. The Golden Triangle (Delhi, Agra, Jaipur) and Rajasthan are excellent choices with well-established tourism infrastructure.

**Book reputable accommodation.** Choose hotels with good reviews from female travelers. Many heritage hotels have excellent security.

**Share your itinerary** with someone back home and check in regularly.

## What to Wear

India is culturally conservative in many areas. Dressing modestly — covering shoulders and knees — will help you blend in and feel more comfortable. Carry a scarf that can serve as a shoulder cover at temples and a sun shield.

## Getting Around Safely

**Use pre-booked transport.** Our tours include private drivers who are vetted and trained. Avoid hailing random vehicles, especially at night.

**Keep your phone charged** and have your accommodation's address saved offline.

## Our Women Safety Program

At Fardeen Tours, we take women's safety seriously:
- All our drivers and guides undergo background checks
- We provide 24/7 emergency contact support
- Our female staff members are available for consultation
- We carefully select women-friendly hotels
- We share real-time location tracking with your emergency contact

## The Reality

Millions of women travel through India safely every year. With sensible precautions — the same you'd take in any country — India offers incredibly warm hospitality, breathtaking sights, and transformative experiences. Don't let fear prevent you from experiencing this extraordinary country.`,
    date: "2025-01-05",
    category: "Travel Tips",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80",
    readTime: "7 min read",
    author: "Fardeen Chaudhary",
  },
  {
    id: "packing-guide",
    title: "What to Pack for Your India Tour",
    excerpt: "Not sure what to bring? Our essential packing list covers everything from clothing to gadgets for a comfortable India tour.",
    content: `Packing for India can seem daunting, but with the right list, you'll have everything you need without over-packing. Here's our tried-and-tested packing guide based on thousands of tours.

## Clothing Essentials

- **Lightweight, breathable fabrics** — cotton and linen are your friends
- **Modest clothing** — shoulders and knees covered for temple visits
- **A versatile scarf/shawl** — the most useful item you'll pack
- **Comfortable walking shoes** — you'll cover a lot of ground
- **Slip-on shoes** — for removing at temples (you'll do this often)
- **A light jacket** — for AC buses/trains and cooler evenings (Oct-Feb)
- **Sun hat and sunglasses**

## Health & Hygiene

- **Prescription medications** with a doctor's note
- **Sunscreen SPF 50+** — the Indian sun is strong
- **Insect repellent** — especially for evening hours
- **Hand sanitizer and wet wipes**
- **Basic first aid kit** — band-aids, pain relievers, anti-diarrhea medication
- **Water purification tablets** as backup

## Technology

- **Universal power adapter** — India uses Type C/D/M plugs (230V)
- **Portable power bank** — long days mean drained batteries
- **Phone with offline maps** downloaded
- **Camera with extra memory cards**

## Documents

- **Passport** with at least 6 months validity
- **Visa** (e-Visa for most nationalities)
- **Travel insurance documents**
- **Photocopies** of all important documents (keep separate from originals)
- **Emergency contact card** in your wallet

## Pro Tips

- Pack 30% less than you think you need — Indian markets are amazing for shopping
- Bring a reusable water bottle with filter
- A small daypack is essential for sightseeing days
- Ziplock bags protect electronics from dust and unexpected rain

We provide a detailed packing list to all our guests before their trip, customized for the specific tour and season.`,
    date: "2024-12-15",
    category: "Guides",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    readTime: "5 min read",
    author: "Fardeen Chaudhary",
  },
];
