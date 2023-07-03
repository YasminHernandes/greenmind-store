import { ProductType } from '@/types/product-types'
export interface ProductType {
  id: string;
  name: string,
  selling_price: string,
  price: string,
  type: string,
  img: string,
  description: string
}

export interface ProductInCart extends ProductType {
  quantity: number
}

export interface ProductResponse { 
  data: {
    Product: ProductType
  }
}