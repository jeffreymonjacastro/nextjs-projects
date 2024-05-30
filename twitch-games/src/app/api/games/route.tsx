import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post('https://api.igdb.com/v4/games', {}, {
        headers: {
          'Client-ID': process.env.IGDB_CLIENT_ID,
          'Authorization': `Bearer ${process.env.IGDB_ACCESS_TOKEN}`,
          'Content-Type': 'application/json'
        }
      });
      res.status(200).json(response.data);
    } catch (error: any) {
      res.status(error.response?.status || 500).json({ message: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
