import {Request, Response} from "express";
import { rankingData, newestData } from '../dev-data/productsData'

export const getRankingProducts = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    data: rankingData
  })
}

export const getNewestProducts = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    data: newestData
  })
}