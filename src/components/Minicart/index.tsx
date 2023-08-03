import './styles.scss'

import { ProductInCart } from '@/types/product-types'
import { useMinicartContext } from '@/hooks/useMinicartContext'
import { useEffect, useRef } from 'react'
import { Counter, BuyNow } from '@/components'
import { MinicartEmptyIcon, TrashIcon, CloseIcon } from '@/components/icons'
import { Link } from 'react-router-dom'


export const Minicart = () => {
  const cartItems = localStorage.getItem('cart-items')
  const cartItemsArray = JSON.parse(cartItems!)
  const { minicart, setMinicart, toggleMinicart, removeItem, Calculate, shipping, hasShipping } =  useMinicartContext()
  const minicartRef = useRef<HTMLDivElement>(null)
  const shippingAvailable = hasShipping()
  
  minicart && (
    window.addEventListener('keydown', (e) => {
      e.key === 'Escape' && setMinicart(false)
    })
  )

  useEffect(() => {
    const handleCloseMinicart = (event: MouseEvent) => {
      if (minicartRef.current && !minicartRef.current.contains(event.target as Node)) {
        setMinicart(false);
      }
    };

    window.addEventListener('mousedown', handleCloseMinicart);
    
    return () => {
      window.removeEventListener('mousedown', handleCloseMinicart);
    };
  }, []);

  useEffect(() => {
    hasShipping()
  })

  
  return (
    <>
      <div className={`minicart-overlay ${minicart && '--open'}`}>
        <div className="minicart-wrapper" ref={minicartRef}>
        { cartItems && cartItemsArray.length > 0 ? (
          <>
          <h2 className="minicart__title">
            Order Summary
            <CloseIcon onClick={toggleMinicart} />
          </h2>
          <div className="minicart-content">
            <ul className="minicart-products-list">
              {cartItemsArray.map((product: typeof ProductInCart) => (
                <li className="product-container__item" key={product.id}>
                <img 
                  src={product.img} 
                  alt={`${product.name} image`}
                  title={`${product.name} image`} 
                />
                <div className="minicart-product-info">
                  <p className="product-name">
                    {product.name}
                  </p>
                  <p className="product-price">
                    ${product.price}
                  </p>
                  <p className="product-selling-price">
                    $ {product.selling_price}
                  </p>
                </div>
                <div className="trash-and-count-container">
                  <TrashIcon onClick={() => removeItem(product.id)} />
                  <Counter id={product.id} quantity={product.quantity}/>
                </div>
                </li>
              ))}
            </ul>
            <div className="minicart__footer">
              <div className="subtotal-and-shipping-container">
                <span className="subtotal__title">
                  Subtotal
                  <span className="subtotal__price">
                    $ {Calculate.subtotalPrice()}
                  </span>
                </span>
                <span className="shipping__title">
                  Shipping
                  <span className="shipping__price">
                    {shipping ? `$ ${shippingAvailable}` : '$0'}
                  </span>
                </span>
              </div>
              <span className="total__title">
                  Total
                  <span className="total__price">
                    $ {Calculate.totalPrice()}
                  </span>
              </span>
              <span className="shipping-info">
                products priced $30 and above incur an additional shipping fee.
              </span>         
              <Link to={'/checkout'} reloadDocument className="confirm-order__button">
                Confirm Order
              </Link>
            </div>
          </div>
          </> 
          ) : (
            <>
              <h2 className="minicart__title">
                Minicart empty
              </h2>
              <div className="minicart-empty">
                <MinicartEmptyIcon/>
                <p className="minicart-empty__text">
                  Sorry, you have no products here
                </p>
                <p className="minicart-empty__text">
                  Please come back and explore to add products to your shopping cart.
                </p>
                <BuyNow/>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}