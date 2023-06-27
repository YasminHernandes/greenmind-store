import { CartIcon } from './cart-icon'

import './styles.scss'
type Props = {
  id: string,
  title: string,
  type?: string, 
  price?: string, 
  sellingPrice: string, 
  img: string,
  soldOut: string,
  hasButton: boolean
}

export const ProductCard = (props: Props) => {

  return (
    <div className="product-card">
      <div className={`tag ${props.soldOut}`}>Sold out</div>
      <img src={props.img} alt="" className="product__image"/>
      <div className="product-container__title">
        <p className="product__title">{props.title}</p>
        <span className="product__type">{props.type}</span>
      </div>
      <div className="product-container__price">
        <span className="product-price">{props.price ? `$ ${props.price}` : ""}</span>
        <span className="product-selling-price">{props.sellingPrice ? `$ ${props.sellingPrice}` : ""}</span>
      </div>
      {props.hasButton ? (
        <button className="product-add-to-cart__button">
          <CartIcon/>
          Add to cart
        </button>
      ) : ''}
    </div>
  )
}
