export default interface Transactions {
  transactions: Transaction[]
  total: number
}

export interface Transaction {
  _id: string
  userId: string
  cost: string
  products: string[]
  __v: number
  createdAt: Date
  updatedAt: Date
}
