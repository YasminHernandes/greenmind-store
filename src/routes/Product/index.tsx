import { BackButton } from "@/components/BackButton"
import { useProduct } from "@/hooks/useProduct"

import './styles.scss'
import { AddToCart } from "@/components"
import { useParams } from "react-router-dom"

export const Product = () => {
  const { id }  = useParams()
  const { product } = useProduct(id!)


  return (
    <>
      <div className="product-wrapper">
        <BackButton/> 
        <section className="product default-max-width-setup">
          <img src={product?.img} id={product?.id} alt={`${product?.name} image`} title={`${product?.name} image`}/>
          <div className="product-info" id={product?.id}>
            <div className="product-container-title-price">
              <span className="product-type">{product?.type}</span>
              <h2 className="product-name">{product?.name}</h2>
              <span className="product-price">{product?.price}</span>
              <span className="product-selling-price">{product?.selling_price}</span>
            </div>
            <div className="product-container-description">
            <span className="product-description__title">Description</span>
            <span className="product-description">{product?.description}</span>
            </div>
            <AddToCart id={product?.id}/>
          </div>
        </section>
      </div>
    </>
  )
}
