import { AddToCart } from '@/components'

import './styles.scss'

type Props = {
  id: string,
  title: string,
  type?: string, 
  price?: string, 
  sellingPrice: string, 
  img: string,
  soldOut: string,
  hasButton: boolean,
}

export const ProductCard = (props: Props) => {

  return (
    <>
      <div className="product-card-container">
        <div className="product-card" id={props.id}>
          <div className={`tag ${props.soldOut}`}>Sold out</div>
          <img src={props.img} alt="" id={props.id} className="product__image"/>
          <div className="product-container__title" id={props.id}>
            <p className="product__title">{props.title}</p>
            <span className="product__type">{props.type}</span>
          </div>
          <div className="product-container__price" id={props.id}>
            <span className="product-price">{props.price ? `$ ${props.price}` : ""}</span>
            <span className="product-selling-price">{props.sellingPrice ? `$ ${props.sellingPrice}` : ""}</span>
          </div>
        </div>
        {props.hasButton && (
          <AddToCart id={props.id}/>
        )}
      </div>
    </>
  )
}
