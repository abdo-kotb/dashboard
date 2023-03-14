export default interface User {
  _id: string
  name: string
  email: string
  password: string
  city: string
  state?: string
  country: string
  occupation: string
  phoneNumber: string
  transaction: any[]
  role: string
  __v: number
  createdAt: Date
  updatedAt: Date
}

export interface UserWithStats extends User {
  affiliateStats: AffiliateStats
}

interface AffiliateStats {
  _id: string
  userId: string
  affiliateSales: AffiliateSale[]
  __v: number
  createdAt: Date
  updatedAt: Date
}

export interface AffiliateSale {
  _id: string
  userId: string
  cost: string
  products: string[]
  __v: number
  createdAt: Date
  updatedAt: Date
}
