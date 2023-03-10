import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import colors from 'colors'

import clientRoutes from './routes/clientRoutes.js'
import generalRoutes from './routes/generalRoutes.js'
import managementRoutes from './routes/managementRoutes.js'
import salesRoutes from './routes/salesRoutes.js'
import { errorHandler, notFound } from './middlewares/errorMiddlewares.js'
import connectDB from './config/db.js'
/* CONFIGURATION */
colors.enable()
dotenv.config()

const app = express()

app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

connectDB()

/* ROUTES */
app.get('/', (_, res) => {
  res.send('API running...')
})

// app.use('/api/client')
// app.use('/api/general')
// app.use('/api/management')
// app.use('/api/sales')

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
  console.log(
    `Server running in "${process.env.NODE_ENV} mode" on port ${PORT}`.yellow
      .bold
  )
)

/* Error Handlers */
app.use(notFound)
app.use(errorHandler)
