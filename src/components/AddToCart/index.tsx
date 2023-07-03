import { CartIcon, MinusIcon, PlusIcon } from '@/components/icons'
import { useCartControl } from '@/hooks/useCartControl'

import './styles.scss'
import { useProduct } from '../../hooks/useProduct'
type Props = {
  id: string,
}


export const AddToCart = ({id}: Props) => {
  const { count, setCount, addToCart, setAddToCart, decreaseCount, increaseCount, handleAddToCart, calculateTotalItems } = useCartControl()
  const { product } = useProduct(id)

  const handleClickAddToCart = () => {
    setAddToCart(true)
    handleAddToCart(id, product)
    calculateTotalItems()
    existProduct()
  }

  const handleUpdateDecreaseCount = () => {
    decreaseCount(Number(id))
    calculateTotalItems()
  }

  const handleUpdateIncreaseCount = () => {
    increaseCount(Number(id))
    calculateTotalItems()
  }

  const existProduct = () => {
    let cartItems = localStorage.getItem('cart-items');
    let cartItemsArray = [] as any;

    if(cartItems) {
      cartItemsArray = JSON.parse(cartItems);
      let existingProductIndex = cartItemsArray.findIndex((item: { id: string; }) => item.id === id);

      return existingProductIndex != -1 && setCount(cartItemsArray[existingProductIndex].quantity)
  }
  }

  return (
    <>
      {!addToCart ? (
        <div className="product-add-to-cart__button" id={id} onClick={handleClickAddToCart}>
          <CartIcon id={id}/>
          Add to cart
        </div>
      ) : (
        <div className="product-count__button" id={id}>
          <MinusIcon onClick={handleUpdateDecreaseCount}/>
          { count }
          <PlusIcon onClick={handleUpdateIncreaseCount}/> 
        </div>
      )}
    </>
  )
}
