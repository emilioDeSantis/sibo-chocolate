// pages/api/location.js
import axios from 'axios';

export default async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  
  try {
    const response = await axios.get(`http://ipinfo.io/${ip}/json`);
    const location = response.data;
    res.status(200).json({ location });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to fetch location' });
  }
};
