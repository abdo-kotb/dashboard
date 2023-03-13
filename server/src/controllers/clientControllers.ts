import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
import ProductStats from '../models/productStatsModel.js'
import User from '../models/userModel.js'

export const getProducts = asyncHandler(async (_, res) => {
  const products = await Product.find()

  const productsWithStats = await Promise.all(
    products.map(async product => {
      const stats = await ProductStats.findOne({ productId: product._id })
      return { ...product._doc, stats }
    })
  )

  res.status(200).json(productsWithStats)
})

export const getCustomers = asyncHandler(async (_, res) => {
  const customers = await User.find({ role: 'user' }).select('-password')

  res.status(200).json(customers)
})
