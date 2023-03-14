export default interface Dashboard {
  totalCustomers: number
  yearlyTotalSoldUnits: number
  yearlySalesTotal: number
  monthlyData: CurMonthStats[]
  salesByCategory: SalesByCategory
  curMonthStats: CurMonthStats
  todayStats: CurMonthStats
  transactions: Transaction[]
}

interface CurMonthStats {
  month?: string
  totalSales: number
  totalUnits: number
  _id: string
  date?: Date
}

interface SalesByCategory {
  shoes: number
  clothing: number
  accessories: number
  misc: number
}

interface Transaction {
  _id: string
  userId: string
  cost: string
  products: string[]
  __v: number
  createdAt: Date
  updatedAt: Date
}
