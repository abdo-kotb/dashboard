import { connect } from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await connect(process.env.MONGO_URI)

    console.log(`MongoDB Connected:  ${conn.connection.host}`.cyan.underline)
  } catch (err) {
    console.error(`Error: ${err.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
