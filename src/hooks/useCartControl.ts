import { ProductType } from '@/types/product-types'
import { useState } from "react"

export const useCartControl = () => {
  const [ count, setCount ] = useState(1)
  const [ addToCart, setAddToCart ] = useState<boolean>(false)
  
  let cartItemsArray = JSON.parse(localStorage.getItem('cart-items'))

  
  const decreaseCount = (id: number) => {
    setCount(count - 1)
    count == 1 && setAddToCart(false)
    cartItemsArray[id-1].quantity = cartItemsArray[id-1].quantity - 1;
    cartItemsArray[id-1].quantity == 0 && localStorage.removeItem('cart-items') 
    localStorage.setItem('cart-items', JSON.stringify(cartItemsArray));
  }

  const increaseCount = (id: number) => {
    setCount(count + 1)
    cartItemsArray[id-1].quantity += 1;
    cartItemsArray[id-1].quantity == 0 && localStorage.removeItem('cart-items') 
    localStorage.setItem('cart-items', JSON.stringify(cartItemsArray));
  }

  const calculateTotalItems = () => {
    let cartItems = localStorage.getItem('cart-items');
    let totalItems = 0;

    if(cartItems) {
      const cartItemsArray = JSON.parse(cartItems);
      totalItems = cartItemsArray.reduce((acc: number, item: { quantity: number; }) => acc + item.quantity, 0);
    }

    return totalItems;
  }

  const handleAddToCart = (id: string, product: ProductType[]) => { 
    localStorage.setItem('add-to-cart', JSON.stringify(true))
    let cartItems = localStorage.getItem('cart-items');
    if(cartItems) {
      let cartItemsArray = JSON.parse(cartItems);
      let existingProductIndex = cartItemsArray.findIndex((item: { id: string; }) => item.id === id);

      if(existingProductIndex != -1){
        cartItemsArray[existingProductIndex].quantity += 1
      } else {
        cartItemsArray.push({ ...product, quantity: 1, id: id })
      }
      
      localStorage.setItem('cart-items', JSON.stringify(cartItemsArray));
    }
    else {
      let newCart = [{ ...product, quantity: 1, id: id }]
      localStorage.setItem('cart-items', JSON.stringify(newCart));
    } 
  }


  return { count, setCount, addToCart, setAddToCart, decreaseCount, increaseCount, calculateTotalItems, handleAddToCart }
}
