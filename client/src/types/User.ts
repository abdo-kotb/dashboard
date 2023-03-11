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
