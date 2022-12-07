import {Request, Response} from "express";
import { rankingData } from '../dev-data/productsData'

export const getRankingProducts = (req: Request, res:Response) => {
  res.status(200).json({
    status: 'success',
    data: rankingData
  })
}