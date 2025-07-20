AI Trip Planner 🚀

An AI-powered trip advisor** that generates personalized travel plans, hotel suggestions, and itineraries based on your budget and preferences.

---

🧭 Project Overview

This project combines Google Maps APIs (Places, Photos, Geolocation) with Gemini AI to:

* Ask the user for location, budget, duration, and interests
* Use AI to craft a day-by-day travel plan
* Recommend hotels that fit your budget
* Stay mindful of a monthly \$200 API usage limit ([github.com][1], [github.com][2], [github.com][3])

---

⚙️ Features

Personalized Trips
  AI-generated itineraries that match your budget, interests, and travel style.

Hotel Recommendations
  Curated based on location, price, and trip duration.

Dynamic Itineraries
  Multi-day planning with structured suggestions for attractions and activities.

---

🛠️ Tech Stack

| Layer    | Technologies                            |
| -------- | --------------------------------------- |
| Frontend | React, Vite, Tailwind CSS               |
| AI       | Google Gemini API                       |
| Maps     | Google Maps Places, Photos, Geolocation |
| Hosting  | (Optional – e.g. Vercel)                |

---

📥 Getting Started

1. Clone the Repo

   ```bash
   git clone https://github.com/KiteMinimal/AI-Trip-Planner.git
   cd AI-Trip-Planner
   ```

2. Configure API Keys
   Create a `.env.local` file:

   ```
   VITE_GOOGLE_PLACE_API_KEY=your_google_places_key
   VITE_GOOGLE_GEMINI_AI_API_KEY=your_gemini_key
   VITE_GOOGLE_AUTH_CLIENT_ID=your_google_auth_id
   ```

3. Install Dependencies

   ```bash
   npm install
   ```

4. Run in Development

   ```bash
   npm run dev
   ```

Once started, the app will prompt you for travel preferences and generate your personalized plan.

---

🌟 Challenges & Learnings

* Integrated Gemini and Maps APIs within a strict \$200 monthly budget
* Built a responsive, interactive frontend using React + Tailwind
* Learned API chaining: location → hotel search → itinerary generation

---

🎯 Future Roadmap

* Add user authentication (Google, email/password)
* Implement Firebase for saving trips
* Turn it into a deployable app (Firebase Hosting, Vercel)
* Improve error handling and loading states
* Add language support for non-English users
* Add support for multi-city planning

---

📬 Contact & Contributing

I’m open to feedback, improvements, or collaboration:

* GitHub Issues / PRs are welcome
* Email: mohdshoyeb189@gmail.com

---
