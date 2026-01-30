import { NextApiRequest, NextApiResponse } from 'next';
import { accommodationsData } from '../../data/accommodations';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  
  if (id) {
    // 返回特定民宿
    const accommodation = accommodationsData.find(acc => acc.id === Number(id));
    if (accommodation) {
      res.status(200).json(accommodation);
    } else {
      res.status(404).json({ error: '民宿不存在' });
    }
  } else {
    // 返回所有民宿
    res.status(200).json(accommodationsData);
  }
}