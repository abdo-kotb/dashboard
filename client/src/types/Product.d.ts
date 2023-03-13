export default interface Product {
  _id: string
  name: string
  price: number
  description: string
  category: string
  rating: number
  supply: number
  __v: number
  createdAt: Date
  updatedAt: Date
  stats: Stat
}

interface Stat {
  _id: string
  productId: string
  yearlySalesTotal: number
  yearlyTotalSoldUnits: number
  monthlyData: LyDatum[]
  dailyData: LyDatum[]
  __v: number
  createdAt: Date
  updatedAt: Date
}

interface LyDatum {
  date?: Date
  totalSales: number
  totalUnits: number
  _id: string
  month?: Month
}

enum Month {
  April = 'april',
  August = 'august',
  December = 'december',
  February = 'february',
  January = 'january',
  July = 'july',
  June = 'june',
  March = 'march',
  May = 'may',
  November = 'november',
  October = 'october',
  September = 'september',
}
