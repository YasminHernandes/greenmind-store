import { ProductTypes } from "../types/product-types";
import { useApi } from "./useApi";

export const useProduct = (id: string) => {
  const { data: products } = useApi<ProductTypes[]>('https://plantsapi.vercel.app');

  const product = products.find(product => product.id === id) || null;

  return { product };
};