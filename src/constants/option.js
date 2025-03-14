export const SelectTravelesList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveles in exploration",
    icon: "✈️",
    people: "1 single",
  },
  {
    id: 1,
    title: "A Couple",
    desc: "Two traveles in tanden",
    icon: "🥂",
    people: "2 people",
  },
  {
    id: 1,
    title: "Family",
    desc: "A group of fun loving adv",
    icon: "🏡",
    people: "3 to 5 people",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill seeking",
    icon: "🚢",
    people: "more than 5 people",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "cheap",
    desc: "Stay conscious of costs",
    icon: "💲",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Money dosen't matters",
    icon: "💸",
  },
];

export const AI_PROMPT = "Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget, give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format."