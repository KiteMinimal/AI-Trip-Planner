const BASE_URL = "https://places.googleapis.com/v1/places:searchText"


const config = {
    headers: {
        'Context-Type': 'application/json',
        'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_API_KEY,
    }
}