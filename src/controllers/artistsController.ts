import {Request, Response} from "express";
import { artistsData } from '../dev-data/artistsData'

export const getAllArtists = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    data: artistsData
  })
}