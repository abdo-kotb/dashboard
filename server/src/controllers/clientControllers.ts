import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
import ProductStats from '../models/productStatsModel.js'

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find()

  if (!products) {
    res.status(404)
    throw new Error('Products not found')
  }

  const productsWithStats = await Promise.all(
    products.map(async product => {
      const stats = await ProductStats.find({ productId: product._id })
      return { ...product, stats }
    })
  )

  res.status(200).json(productsWithStats)
})
