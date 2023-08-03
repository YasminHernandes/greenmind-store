export interface ProductTypes {
  id: string,
  name: string,
  selling_price: string,
  price: string,
  type: string,
  img: string,
  description: string,
  sold_out: boolean
}

export interface ProductInCart extends ProductTypes {
  quantity: number
}

export interface ProductResponse { 
  data: {
    Product: ProductTypes
  }
}