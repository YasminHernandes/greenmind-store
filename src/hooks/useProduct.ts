import { ProductType } from "../types/product-types";
import { useApi } from "./useApi";

export const useProduct = (id: string) => {
  const { data } = useApi<ProductType[]>('https://plantsapi.vercel.app');

    const product = data.find(product => product.id === id)

  return { product }
}