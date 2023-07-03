import { ProductType } from '@/types/product-types'

export type CountProductsTypes = {
  addToCart: boolean,
  count: number,
  setAddToCart: React.Dispatch<React.SetStateAction<boolean>>,
  setCount: React.Dispatch<React.SetStateAction<number>>,
  decreaseCount: () => void,
  increaseCount: () => void,
  calculateTotalItems: () => number,
  handleAddToCart: (id: string, product: ProductType[]) => void
}