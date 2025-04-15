// 📦 Backend: Express API for Google Places
import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Route to handle place search
app.post('/api/search-places', async (req, res) => {
  const { textQuery } = req.body;

  try {
    const response = await axios.post(
      'https://places.googleapis.com/v1/places:searchText',
      { textQuery },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': process.env.GOOGLE_API_KEY,
          'X-Goog-FieldMask': 'places.id,places.displayName,places.photos',
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Google API Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch places' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
