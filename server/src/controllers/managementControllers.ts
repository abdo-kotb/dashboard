import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'

import User from '../models/userModel.js'

export const getAdmins = asyncHandler(async (_, res) => {
  const admins = await User.find({ role: 'admin' }).select('-password')

  res.status(200).json(admins)
})

export const getUserPerformance = asyncHandler(async (req, res) => {
  const { id } = req.params

  const userWithStatsAndTransactions = (
    await User.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: 'affiliatestats',
          localField: '_id',
          foreignField: 'userId',
          as: 'affiliateStats',
        },
      },
      { $unwind: '$affiliateStats' },
      {
        $lookup: {
          from: 'transactions',
          let: { affiliateSales: '$affiliateStats.affiliateSales' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: ['$_id', '$$affiliateSales'],
                },
              },
            },
          ],
          as: 'affiliateStats.affiliateSales',
        },
      },
    ])
  )[0]

  res.status(200).json(userWithStatsAndTransactions)
})
