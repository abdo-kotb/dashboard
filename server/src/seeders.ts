import dotenv from 'dotenv'
import colors from 'colors'

import connectDB from './config/db.js'

import { dataUser } from './data/index.js'

import User from './models/userModel.js'

dotenv.config()

colors.enable()

connectDB()

const importData = async () => {
  try {
    await User.deleteMany({})

    const createdUsers = await User.insertMany(dataUser)

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

    console.log('Data Destroyed'.red.inverse)
    process.exit()
  } catch (err) {
    console.error(`${err}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') destroyData()
else importData()
