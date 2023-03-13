import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'
import ProductStats from '../models/productStatsModel.js'
import Transaction from '../models/transactionModel.js'
import User from '../models/userModel.js'

interface Sort {
  field: string
  sort: 'asc' | 'desc'
}

const generateSort = (sort: string) => {
  const sortParsed: Sort = JSON.parse(sort)
  const sortFormatted: {
    [x: string]: 1 | -1
  } = {
    [sortParsed.field]: sortParsed.sort === 'asc' ? 1 : -1,
  }

  return sortFormatted
}

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

export const getTransactions = asyncHandler(async (req, res) => {
  const { page = 1, pageSize = 20, sort = null, search = '' } = req.query

  const sortFormatted = !!sort ? generateSort(sort as string) : {}

  const transactions = await Transaction.find({
    $or: [
      { cost: { $regex: new RegExp(search as string, 'i') } },
      { userId: { $regex: new RegExp(search as string, 'i') } },
    ],
  })
    .sort(sortFormatted)
    .skip(+page * +pageSize)
    .limit(+pageSize)

  const total = await Transaction.countDocuments({
    name: { $regex: search, $options: 'i' },
  })

  res.status(200).json({
    transactions,
    total,
  })
})
