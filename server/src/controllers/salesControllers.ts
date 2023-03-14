import asyncHandler from 'express-async-handler'
import OverallStat from '../models/overallStatModel.js'

export const getSales = asyncHandler(async (_, res) => {
  const overallStats = await OverallStat.find()

  res.status(200).json(overallStats[0])
})
