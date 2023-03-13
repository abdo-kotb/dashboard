import dotenv from 'dotenv'
import colors from 'colors'

import connectDB from './config/db.js'

import { dataUser, dataProduct, dataProductStat } from './data/index.js'

import User from './models/userModel.js'
import Product from './models/ProductModel.js'
import ProductStats from './models/ProductStatsModel.js'

dotenv.config()

colors.enable()

connectDB()

const importData = async () => {
  try {
    await User.deleteMany({})
    await Product.deleteMany({})
    await ProductStats.deleteMany({})

    await User.insertMany(dataUser)
    await Product.insertMany(dataProduct)
    await ProductStats.insertMany(dataProductStat)

    console.log('Data Imported'.green.inverse)
    process.exit()
  } catch (err) {
    console.error(`${err}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await User.deleteMany({})
    await Product.deleteMany({})
    await ProductStats.deleteMany({})

    console.log('Data Destroyed'.red.inverse)
    process.exit()
  } catch (err) {
    console.error(`${err}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') destroyData()
else importData()
