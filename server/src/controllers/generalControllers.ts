import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

export const getUser = asyncHandler(async (req, res) => {
  const { id } = req.params

  const user = await User.findById(id)

  res.status(200).json(user)
})
