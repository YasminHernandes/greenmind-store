import { ReactNode, createContext, useState } from "react"
import { ProductType, ProductInCart } from '@/types/product-types'

export const MinicartContext = createContext({
  minicart: false,
  setMinicart: (value: boolean) => {},
  toggleMinicart: () => {},
  countValue: {},
  setCountValue: (id: string, value: number) => {},
  Count: {},
  Calculate: {},
  handleAddToCart: (id: string, product: ProductType[]) => {},
  removeItem: (index: string) => {},
  shipping: '',
  hasShipping: () => {},
})

type MinicartProviderProps = {
  children: ReactNode
}

export const MinicartContextProvider = ({children}: MinicartProviderProps) => {
  const [ minicart, setMinicart ] = useState(false)
  const [ countValue, setCountValue ] = useState({
    id: '',
    value: 1
  })

  let cartItems = localStorage.getItem('cart-items')
  let cartItemsArray = JSON.parse(cartItems!)
  let shipping = localStorage.getItem('has-shipping') || ''

  const [productItems, setProductItems] = useState(cartItemsArray || [])
  
  const toggleMinicart = () => {
    setMinicart(!minicart)
  }

  const Count = {
    decreaseCount: (id: string) => {
      setCountValue({id: id, value: countValue.value - 1})
  
      let existProductIndex = cartItemsArray.findIndex((item: { id: string }) => item.id == id);
      existProductIndex != -1 && (
        (cartItemsArray[existProductIndex].quantity = cartItemsArray[existProductIndex].quantity - 1),
        cartItemsArray[existProductIndex].quantity == 0 && removeItem(id)
      )
      localStorage.setItem('cart-items', JSON.stringify(cartItemsArray));
    },

    increaseCount: (id: any) => {
      setCountValue({id: id, value: countValue.value + 1})

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
      
      existingProductIndex != -1 ? cartItemsArray[existingProductIndex].quantity += 1
      : cartItemsArray.push({ ...product, quantity: 1, id: id })
      
      localStorage.setItem('cart-items', JSON.stringify(cartItemsArray));
    } else {
      let newCart = [{ ...product, quantity: 1, id: id }]
      localStorage.setItem('cart-items', JSON.stringify(newCart));
    }
  }

  const removeItem = (productId: string) => {
    setProductItems((prevItems: any[]) => prevItems.filter((item) => item.id !== productId));
    
    const updatedCartItems = cartItemsArray.filter((item: any) => item.id !== productId);
    
    localStorage.setItem('cart-items', JSON.stringify(updatedCartItems));

  }

  const Calculate = {
    totalItems: () => {
      let totalItems = 0;
      cartItems && (totalItems = cartItemsArray.reduce((acc: number, item: { quantity: number; }) => acc + item.quantity, 0))
  
      return totalItems;
    },
    subtotalPrice: () => {
      let subtotal = 0;
      
      cartItems && (subtotal = cartItemsArray.reduce((acc: number, item: {quantity: number, selling_price: string}) => 
        acc + (item.quantity * Number(item.selling_price)), 0))

      return subtotal.toFixed(2);
    },
    totalPrice: () => {
      const totalPrice = Number(Calculate.subtotalPrice()) + Number(shipping)
      return totalPrice.toFixed(2)
    }
  }

  const hasShipping = () => {
    const shippingAvailable = cartItemsArray.some((product: ProductInCart) => Number(product.selling_price) > 30);
  
    shippingAvailable ? localStorage.setItem('has-shipping', '12.00')
    : localStorage.removeItem('has-shipping');
     
    return shipping;
  };

  return (
    <MinicartContext.Provider value={{ 
      minicart,
      setMinicart,
      toggleMinicart,
      countValue,
      setCountValue,
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
