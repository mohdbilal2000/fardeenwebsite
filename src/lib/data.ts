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
      "Hotel pickup & drop-off in Delhi",
      "Private AC car with driver",
      "Licensed English-speaking guide",
      "All monument entry tickets",
      "Bottled water",
    ],
    itinerary: [
      { day: "3:00 AM", title: "Pickup from Delhi", description: "Early morning pickup from your hotel in Delhi. Settle into your private AC car for the drive to Agra." },
      { day: "6:00 AM", title: "Sunrise at Taj Mahal", description: "Arrive at the Taj Mahal gates as they open. Watch the magical sunrise illuminate the white marble." },
      { day: "8:30 AM", title: "Agra Fort", description: "Visit the magnificent Agra Fort, a UNESCO World Heritage site with stunning views of the Taj." },
      { day: "10:00 AM", title: "Return to Delhi", description: "Begin your comfortable drive back to Delhi with a stop for refreshments." },
      { day: "3:00 PM", title: "Delhi Drop-off", description: "Arrive back at your Delhi hotel." },
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
    included: ["Hotel pickup & drop-off", "Private AC car", "Licensed guide", "Monument entry tickets", "Lunch"],
    itinerary: [
      { day: "6:00 AM", title: "Delhi Departure", description: "Pickup from your hotel and drive to Agra via Yamuna Expressway." },
      { day: "10:00 AM", title: "Taj Mahal Visit", description: "Guided tour of the Taj Mahal complex." },
      { day: "12:30 PM", title: "Lunch", description: "Enjoy authentic local cuisine at a recommended restaurant." },
      { day: "2:00 PM", title: "Agra Fort", description: "Explore the historic Agra Fort." },
      { day: "3:30 PM", title: "Return", description: "Drive back to Delhi with hotel drop-off." },
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
    included: ["Train tickets (both ways)", "Station transfers", "Private car in Agra", "Licensed guide", "Entry tickets"],
    itinerary: [
      { day: "7:00 AM", title: "Board Gatimaan Express", description: "Depart from Hazrat Nizamuddin station in Delhi." },
      { day: "8:40 AM", title: "Arrive Agra", description: "Private car waiting at station to take you to Taj Mahal." },
      { day: "9:00 AM", title: "Taj Mahal", description: "Guided exploration of the Taj Mahal complex." },
      { day: "12:00 PM", title: "Lunch & Agra Fort", description: "Lunch followed by Agra Fort visit." },
      { day: "5:00 PM", title: "Return Train", description: "Board the evening train back to Delhi." },
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
    included: ["Hotel pickup & drop-off", "Private AC car", "Licensed guide", "Entry tickets", "Bottled water"],
    itinerary: [
      { day: "6:00 AM", title: "Delhi Departure", description: "Drive to Jaipur via NH48." },
      { day: "10:30 AM", title: "Amber Fort", description: "Explore the majestic hilltop fortress." },
      { day: "12:30 PM", title: "Hawa Mahal & City Palace", description: "Visit the iconic Palace of Winds and City Palace." },
      { day: "2:00 PM", title: "Lunch & Markets", description: "Enjoy Rajasthani cuisine and explore bazaars." },
      { day: "4:00 PM", title: "Return to Delhi", description: "Drive back to Delhi." },
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
    included: ["Hotel pickup & drop-off", "1 night hotel stay", "Private car", "Guide", "Entry tickets", "Dinner & breakfast"],
    itinerary: [
      { day: "Day 1 PM", title: "Delhi to Agra", description: "Drive to Agra, check into hotel." },
      { day: "Day 1 Eve", title: "Mehtab Bagh Sunset", description: "Watch the Taj Mahal glow at sunset from Mehtab Bagh." },
      { day: "Day 2 AM", title: "Taj Mahal Sunrise", description: "Experience the magical sunrise at the Taj Mahal." },
      { day: "Day 2 Mid", title: "Agra Fort & Return", description: "Visit Agra Fort, then drive back to Delhi." },
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
    included: ["2 nights hotel", "All meals", "Private AC car", "Licensed guides", "Entry tickets", "Airport transfers"],
    itinerary: [
      { day: "Day 1", title: "Delhi Exploration", description: "Visit India Gate, Qutub Minar, Humayun's Tomb, and Old Delhi bazaars." },
      { day: "Day 2", title: "Delhi to Agra", description: "Drive to Agra, visit Taj Mahal and Agra Fort. Continue to Jaipur." },
      { day: "Day 3", title: "Jaipur & Departure", description: "Amber Fort, Hawa Mahal, City Palace. Transfer back to Delhi." },
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
    included: ["3 nights hotel", "Breakfast daily", "Private AC car", "Licensed guides", "Entry tickets"],
    itinerary: [
      { day: "Day 1", title: "Arrive Delhi", description: "Airport pickup, Old Delhi walking tour, evening at leisure." },
      { day: "Day 2", title: "Delhi to Agra", description: "New Delhi sights, drive to Agra, Taj Mahal at sunset." },
      { day: "Day 3", title: "Agra to Jaipur", description: "Agra Fort, Fatehpur Sikri en route, arrive Jaipur." },
      { day: "Day 4", title: "Jaipur & Departure", description: "Full day Jaipur sightseeing, transfer to Delhi." },
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
    included: ["4 nights hotel", "All meals", "Private AC car", "Guides at each city", "Entry tickets", "Cultural activities"],
    itinerary: [
      { day: "Day 1", title: "Delhi Arrival", description: "Welcome dinner, orientation walk." },
      { day: "Day 2", title: "Old & New Delhi", description: "Full day Delhi exploration including Chandni Chowk rickshaw ride." },
      { day: "Day 3", title: "Delhi to Agra", description: "Drive to Agra, Taj Mahal, and local market." },
      { day: "Day 4", title: "Agra to Jaipur", description: "Agra Fort, Fatehpur Sikri, drive to Jaipur." },
      { day: "Day 5", title: "Jaipur & Departure", description: "Amber Fort, City Palace, bazaar shopping. Transfer to Delhi." },
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
    included: ["4 nights hotel", "Safari jeep", "Private car", "Guides", "Entry tickets", "Breakfast & dinner"],
    itinerary: [
      { day: "Day 1", title: "Delhi Sightseeing", description: "Explore the capital city's top landmarks." },
      { day: "Day 2", title: "Delhi to Agra", description: "Taj Mahal, Agra Fort, and local experiences." },
      { day: "Day 3", title: "Agra to Ranthambore", description: "Drive to Ranthambore, evening at leisure." },
      { day: "Day 4", title: "Safari & Jaipur", description: "Early morning safari, then drive to Jaipur." },
      { day: "Day 5", title: "Jaipur & Departure", description: "Jaipur sights, transfer to Delhi." },
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
    included: ["5 nights hotel", "Domestic flight to Udaipur", "Private car", "Guides", "Entry tickets", "Boat ride"],
    itinerary: [
      { day: "Day 1", title: "Delhi", description: "Delhi sightseeing." },
      { day: "Day 2", title: "Agra", description: "Taj Mahal and Agra Fort." },
      { day: "Day 3", title: "Jaipur", description: "Drive to Jaipur via Fatehpur Sikri." },
      { day: "Day 4", title: "Jaipur", description: "Amber Fort, City Palace, Hawa Mahal." },
      { day: "Day 5", title: "Udaipur", description: "Fly to Udaipur. City Palace, Lake Pichola boat ride." },
      { day: "Day 6", title: "Udaipur & Departure", description: "Morning at leisure, transfer to airport." },
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
    included: ["6 nights heritage hotels", "All meals", "Private car", "Guides", "Entry tickets", "Cultural evening"],
    itinerary: [
      { day: "Day 1", title: "Arrive Jaipur", description: "Welcome to the Pink City." },
      { day: "Day 2", title: "Jaipur", description: "Amber Fort, Hawa Mahal, City Palace." },
      { day: "Day 3", title: "Jaipur to Jodhpur", description: "Drive to the Blue City." },
      { day: "Day 4", title: "Jodhpur", description: "Mehrangarh Fort, old city walk." },
      { day: "Day 5", title: "Jodhpur to Udaipur", description: "Drive to the City of Lakes via Ranakpur." },
      { day: "Day 6", title: "Udaipur", description: "City Palace, Lake Pichola, Jagdish Temple." },
      { day: "Day 7", title: "Departure", description: "Transfer to airport." },
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
    itinerary: [
      { day: "Day 1-2", title: "Jaipur", description: "Explore the Pink City." },
      { day: "Day 3", title: "Pushkar", description: "Sacred lake town and Brahma Temple." },
      { day: "Day 4-5", title: "Jaisalmer", description: "Golden Fort, desert safari, camping under stars." },
      { day: "Day 6", title: "Jodhpur", description: "The Blue City and Mehrangarh Fort." },
      { day: "Day 7", title: "Udaipur", description: "Lake City and its palaces." },
      { day: "Day 8", title: "Departure", description: "Transfer to airport." },
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
    itinerary: [
      { day: "Day 1-2", title: "Jaipur", description: "Amber Fort, City Palace, local bazaars." },
      { day: "Day 3", title: "Ajmer & Pushkar", description: "Dargah Sharif, Pushkar Lake." },
      { day: "Day 4-5", title: "Jaisalmer", description: "Fort, desert safari, star gazing." },
      { day: "Day 6", title: "Jodhpur", description: "Mehrangarh, Jaswant Thada." },
      { day: "Day 7", title: "Mount Abu", description: "Dilwara Temples, Nakki Lake." },
      { day: "Day 8-9", title: "Udaipur & Departure", description: "Full Udaipur exploration, departure." },
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
    itinerary: [
      { day: "Day 1", title: "Delhi", description: "Arrive and explore." },
      { day: "Day 2-3", title: "Jaipur", description: "Complete Pink City experience." },
      { day: "Day 4", title: "Pushkar", description: "Holy town and camel fair grounds." },
      { day: "Day 5-6", title: "Jaisalmer", description: "Golden Fort, desert safari." },
      { day: "Day 7-8", title: "Jodhpur", description: "Blue City, spice markets." },
      { day: "Day 9", title: "Ranakpur", description: "Jain temple complex." },
      { day: "Day 10-11", title: "Udaipur", description: "Lakes, palaces, boat rides." },
      { day: "Day 12", title: "Departure", description: "Fly from Udaipur." },
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
    itinerary: [
      { day: "5:30 AM", title: "Sunrise Session", description: "Capture the Taj in golden morning light." },
      { day: "8:00 AM", title: "Hidden Angles", description: "Visit secret viewpoints locals know." },
      { day: "11:00 AM", title: "Break & Lunch", description: "Rest and review photos." },
      { day: "4:00 PM", title: "Mehtab Bagh Sunset", description: "Sunset photography from across the Yamuna river." },
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
    itinerary: [
      { day: "6:00 AM", title: "Old Delhi Morning", description: "Capture the waking streets of Chandni Chowk." },
      { day: "9:00 AM", title: "Humayun's Tomb", description: "Mughal architecture in morning light." },
      { day: "12:00 PM", title: "Lunch Break", description: "Street food photography and tasting." },
      { day: "3:00 PM", title: "Qutub Minar & Hauz Khas", description: "Ancient monuments and bohemian village." },
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
    itinerary: [
      { day: "Day 1", title: "Delhi to Agra", description: "Drive to Agra, Taj Mahal visit, evening at leisure." },
      { day: "Day 2", title: "Wildlife SOS & Return", description: "Morning at Wildlife SOS center, Agra Fort, return to Delhi." },
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
    itinerary: [
      { day: "Day 1", title: "Agra", description: "Taj Mahal and Agra Fort exploration." },
      { day: "Day 2", title: "Fatehpur Sikri & Return", description: "Explore the abandoned Mughal city, return to Delhi." },
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
    image: "https://images.unsplash.com/photo-1606611013016-969c19ba27ea?w=800&q=80",
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
