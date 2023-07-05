import { ReactNode, createContext, useState } from "react"
import { ProductType, ProductInCart } from '@/types/product-types'

export const MinicartContext = createContext({
  minicart: false,
  setMinicart: (value: boolean) => {},
  toggleMinicart: () => {},
  count: {},
  setCount: (id: string, value: number) => {},
  Count: {},
  Calculate: {},
  handleAddToCart: (id: string, product: ProductType[]) => {},
  removeItem: (index: any) => {},
  shipping: '',
  hasShipping: () => {},
})

type MinicartProviderProps = {
  children: ReactNode
}

export const MinicartContextProvider = ({children}: MinicartProviderProps) => {
  const [ minicart, setMinicart ] = useState(false)
  const [ count, setCount ] = useState({
    id: '',
    value: 1
  })

  let cartItems = localStorage.getItem('cart-items')
  let cartItemsArray = JSON.parse(cartItems!)
  let shipping = localStorage.getItem('has-shipping')

  const toggleMinicart = () => {
    setMinicart(!minicart)
    hasShipping()
  }


  const Count = {
    decreaseCount: (id: any) => {
      setCount({id: id, value: count.value - 1})
  
      let existProductIndex = cartItemsArray.findIndex((item: { id: string }) => item.id == id);
      existProductIndex != -1 && (
        (cartItemsArray[existProductIndex].quantity = cartItemsArray[existProductIndex].quantity - 1),
        cartItemsArray[existProductIndex].quantity == 0 && removeItem(id)
      )
      localStorage.setItem('cart-items', JSON.stringify(cartItemsArray));
    },
    increaseCount: (id: any) => {
      setCount({id: id, value: count.value + 1})
  
      let existProductIndex = cartItemsArray.findIndex((item: { id: string }) => item.id == id);
      existProductIndex != -1 && (
        cartItemsArray[existProductIndex].quantity += 1
      )
      localStorage.setItem('cart-items', JSON.stringify(cartItemsArray));
    }
  }
  
  const handleAddToCart = (id: string, product: ProductType[]) => {
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
    } else {
      let newCart = [{ ...product, quantity: 1, id: id }]
      localStorage.setItem('cart-items', JSON.stringify(newCart));
    }
  }

  const removeItem = (index: any) => {
    let existingProductIndex = cartItemsArray.findIndex((item: { id: string; }) => item.id == index);
    existingProductIndex != -1 && (cartItemsArray.splice(existingProductIndex, 1))
    localStorage.setItem('cart-items', JSON.stringify(cartItemsArray))
  }

  const Calculate = {
    totalItems: () => {
      let totalItems = 0;
      if(cartItems) {
        totalItems = cartItemsArray.reduce((acc: number, item: { quantity: number; }) => acc + item.quantity, 0);
      }
  
      return totalItems;
    },
    subtotalPrice: () => {
      let subtotal = 0;
      
      cartItems && ( subtotal = cartItemsArray.reduce((acc: number, item: {quantity: number, selling_price: string}) => 
        acc + (item.quantity * Number(item.selling_price)), 0))

      return subtotal.toFixed(2);
    },
    totalPrice: () => {
      const totalPrice = Number(Calculate.subtotalPrice()) + Number(shipping)
      return totalPrice.toFixed(2)
    }
  }

  const hasShipping = () => {
    cartItems && (
      cartItemsArray.length > 0 ? (
        cartItemsArray.map((product: ProductInCart) => {
          if (Number(product.selling_price) > 30) {
            localStorage.setItem('has-shipping', '12.00')
          }
        })
      ) : localStorage.removeItem('has-shipping')
    )
    return shipping
  }

  return (
    <MinicartContext.Provider value={{ 
      minicart,
      setMinicart,
      toggleMinicart,
      count,
      setCount,
      Count,
      Calculate,
      handleAddToCart,
      removeItem,
      shipping,
      hasShipping,
    }}
    >
      { children }
    </MinicartContext.Provider>
  )
}
