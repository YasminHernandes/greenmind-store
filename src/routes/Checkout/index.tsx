import './styles.scss';
import { ProductInCart } from '@/types/product-types';
import { useMinicartContext } from '@/hooks/useMinicartContext';
import { BackButton, Counter, BuyNow } from '@/components';
import { ErrorIcon, MinicartEmptyIcon, TrashIcon } from '@/components/icons';

export const Checkout = () => {
  const cartItemsArray = JSON.parse(localStorage.getItem('cart-items')!);
  const { Calculate, removeItem, hasShipping } = useMinicartContext()
  const shipping = localStorage.getItem('has-shipping')


  return (
    <>
      <div className="checkout-wrapper">
        <BackButton />
        <div className="default-max-width-setup">
          { cartItemsArray.length > 0 ? (
              <div className="checkout-container">
                <div className="cart-items">
                  <h1 className='cart__title'>
                    Cart
                    <span className="total-items">
                      {cartItemsArray.length} items in cart
                    </span>
                  </h1>
                  <table>
                      <thead>
                        <tr>
                          <th> PRODUCT </th>
                          <th> QUANTITY </th>
                          <th> PRICE </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItemsArray.map((product: ProductInCart) => (
                          <tr key={product.id}>
                          <td>
                            <div className="product-item-container">
                              <img src={product.img}  alt={product.img} className="product__image"/>
                              <div className="product__title">
                                <span className="product-name">
                                  {product.name}
                                </span>
                                <span className="product-type">
                                  {product.type}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="product-count-container">
                              <Counter id={product.id} quantity={product.quantity}/>
                              <span onClick={() => removeItem(product.id)}>
                                <TrashIcon />
                                Remove
                              </span>
                            </div>
                          </td>
                          <td>
                            <div className="product-price-container">
                              <span className='price'>
                                ${product.price}
                              </span>
                              <span className='selling-price'>
                                ${product.selling_price}
                              </span>
                            </div>
                          </td>
                        </tr>
                        ))}
                      </tbody>
                  </table>
                  <div className="checkout-mobile">
                    { cartItemsArray.map((product: ProductInCart) => (
                      <div className="product-container" key={product.id}>
                        <div className="product-image-and-info">
                          <img 
                            src={product.img} 
                            alt={product.img} 
                            className="product__image"
                          />
                          <div className="product-info-container">
                            <h2 className="product-name">
                              {product.name}
                            </h2>
                            <span className="product-type">
                              {product.type}
                            </span>
                            <div className="product-price">
                              <span className='price'>
                                ${product.price}
                              </span>
                              <span className='selling-price'>
                                ${product.selling_price}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="product-count-container">
                          <Counter
                            id={product.id} 
                            quantity={product.quantity}
                          />
                          <span onClick={() => removeItem(product.id)}>
                            <TrashIcon />
                            Remove
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>  
                <div className="cart-total-price">
                  <span className="cart-subtotal cart-value">
                    Subtotal
                    <span className="cart-subtotal-value --value">
                      ${Calculate.subtotalPrice()}
                    </span>
                  </span>
                  <span className="cart-shipping cart-value">
                    Shipping
                    <span className="cart-shipping-value --value">
                      {shipping ? `$ ${hasShipping()}` : `$0`}
                    </span>
                  </span>
                  <span className="cart-total">
                    Total
                    <span className="cart-total-value">
                      ${Calculate.totalPrice()}
                    </span>
                  </span>
                  <span className="shipping-info">
                    products priced $30 and above incur an additional shipping fee.
                  </span>
                  <button className="checkout__button">
                    Checkout now
                  </button>
                </div>
              </div>
            ) : (
              <div className="checkout-empty-container">
                <div className="minicart-empty-icon">
                  <MinicartEmptyIcon/>
                  <ErrorIcon/>
                </div>
                <h2 className="empty-cart__title">
                    Your shopping cart is empty! 
                </h2>
                <h3 className="empty-cart__text">
                  Explore our store and add the products you want to start your shopping experience.
                </h3>
                <BuyNow/>
              </div>
            )
        }
        </div>
      </div>
    </>
  );
};
