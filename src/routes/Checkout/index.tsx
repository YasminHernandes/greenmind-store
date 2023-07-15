import './styles.scss';
import { TrashIcon } from '@/components/icons';
import { BackButton } from '@/components';
import { ProductInCart } from '@/types/product-types';
import { useMinicartContext } from '@/hooks/useMinicartContext';
import { Count } from '@/components';

export const Checkout = () => {
  const cartItemsArray = JSON.parse(localStorage.getItem('cart-items')!);
  const { Calculate, removeItem, hasShipping } = useMinicartContext()
  const shipping = localStorage.getItem('has-shipping')


  return (
    <>
      <div className="checkout">
        <BackButton />
        <div className="default-max-width-setup">
          <div className="checkout-wrapper">
            <div className="cart-items">
              <h1 className='cart__title'>
              Cart
              <span className="total-items">{cartItemsArray.length} items in cart</span>
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
                      <tr>
                      <td>
                        <div className="product-item-container">
                          <img src={product.img}  alt={product.img} />
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
                          <Count id={product.id} quantity={product.quantity}/>
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
            </div>  
            <div className="cart-total-price">
              <span className="cart-subtotal cart-value">
                Subtotal
                <span className="cart-subtotal-value --value">${Calculate.subtotalPrice()}</span>
              </span>
              <span className="cart-shipping cart-value">
                Shipping
                <span className="cart-shipping-value --value">{shipping ? `$ ${hasShipping()}` : `$0`}</span>
              </span>
              <span className="cart-total">
                Total
                <span className="cart-total-value">${Calculate.totalPrice()}</span>
              </span>
              <button className="checkout__button">Checkout now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
