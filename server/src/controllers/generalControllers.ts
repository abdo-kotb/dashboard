import asyncHandler from 'express-async-handler'

import User from '../models/userModel.js'
import OverallStat from '../models/overallStatModel.js'
import Transaction from '../models/transactionModel.js'

export const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params

  const user = await User.findById(id)

  res.status(200).json(user)
})

export const getDashboardStats = asyncHandler(async (_, res) => {
  const curMonth = 'November'
  const curYear = 2021
  const curDay = '2021-11-15'

  const transactions = await Transaction.find()
    .limit(50)
    .sort({ createdOn: -1 })
  const overallStats = await OverallStat.findOne({ year: curYear })

  const {
    totalCustomers,
    yearlyTotalSoldUnits,
    yearlySalesTotal,
    monthlyData,
    dailyData,
    salesByCategory,
  } = overallStats

  const curMonthStats = monthlyData.find(({ month }) => month === curMonth)
  const todayStats = dailyData.find(({ date }) => date === curDay)

  res.status(200).json({
    totalCustomers,
    yearlyTotalSoldUnits,
    yearlySalesTotal,
    monthlyData,
    salesByCategory,
    curMonthStats,
    todayStats,
    transactions,
  })
})
