export interface AuthForm {
    email: string
    password: string
    remember: boolean
  }
  export interface User {
    id: number 
    name:string
    contactNumber: string
    email: string
    password: string
    status: string
    role: string
  }
  export interface Category {
    id: number
    name: string
  }
  export interface Produit {
    id: number
    name:string
    categoryId: string
    description: string
    price: number 
    status: string
  }
  export interface Bill{
    id: number
    uuid: string
    name: string
    email: string
    contactNumber: string
    paymentMethod: string
    total: number
    productDetails: string
    createdBy: string
  }