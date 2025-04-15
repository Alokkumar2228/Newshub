import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();


const categoryNews = async (req, res) => {
    const category = req.params.category;
    const page = req.query.page || 1;
    const pageSize = req.query.pageSize || 8;
    console.log("ENV KEY:", process.env.NEWS_API_KEY);
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines', {
        params: {
          country: 'us',
          category:category,
          page,
          pageSize,
          apiKey: process.env.NEWS_API_KEY 
        }
      });
  
      res.json(response.data);
    } catch (error) {
      console.error('Error fetching sports news:', error.message);
      res.status(500).json({ error: 'Failed to fetch sports news' });
    }
  };




export {categoryNews}