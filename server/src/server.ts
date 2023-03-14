import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import colors from 'colors'
import path from 'path'

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

if (process.env.NODE_ENV !== 'production') app.use(morgan('common'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

connectDB()

/* ROUTES */
app.use('/api/client', clientRoutes)
app.use('/api/general', generalRoutes)
app.use('/api/management', managementRoutes)
app.use('/api/sales', salesRoutes)

const __dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/dist')))

  app.get('*', (_, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  )
} else {
  app.get('/', (_, res) => {
    res.send('API is running....')
  })
}

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
