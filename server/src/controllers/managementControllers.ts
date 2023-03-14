import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

export const getAdmins = asyncHandler(async (_, res) => {
  const admins = await User.find({ role: 'admin' }).select('-password')

  res.status(200).json(admins)
})
