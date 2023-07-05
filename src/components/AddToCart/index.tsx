import './styles.scss'

import { CartIcon } from '@/components/icons'
import { useProduct } from '@/hooks/useProduct'
import { useMinicartContext } from '@/hooks/useMinicartContext'
import { useEffect } from 'react'

type Props = {
  id: string,
}

export const AddToCart = ({id}: Props) => {
  const { toggleMinicart, handleAddToCart, Calculate, hasShipping } = useMinicartContext()
  const { product } = useProduct(id)

  useEffect(() => {
    Calculate.totalItems(),
    hasShipping()
  }, [])


  const handleClickAddToCart = (id: string) => {
    handleAddToCart(id, product)
    toggleMinicart()
  }


  return (
    <>
      <div className="product-add-to-cart__button" id={id} onClick={() => handleClickAddToCart(id)}>
        <CartIcon id={id}/>
        Add to cart
      </div>
    </>
  )
}
