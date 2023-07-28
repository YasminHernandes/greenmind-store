import './styles.scss'

import { useMinicartContext } from "@/hooks/useMinicartContext"

export const BuyNow = () => {
  const { toggleMinicart } = useMinicartContext()
  
  return (
    <a href='/products' className="buy-now__button" onClick={toggleMinicart}>
      Buy now
    </a>
  )
}
