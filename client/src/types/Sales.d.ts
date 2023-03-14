export default interface Sales {
  _id: string
  totalCustomers: number
  yearlySalesTotal: number
  yearlyTotalSoldUnits: number
  year: number
  monthlyData: LyDatum[]
  dailyData: LyDatum[]
  salesByCategory: SalesByCategory
  createdAt: Date
  updatedAt: Date
  __v: number
}

interface LyDatum {
  date?: Date
  totalSales: number
  totalUnits: number
  _id: string
  month?: string
}

interface SalesByCategory {
  shoes: number
  clothing: number
  accessories: number
  misc: number
}
