import './styles.scss'
import { MinusIcon, PlusIcon } from "@/components/icons"
import { useMinicartContext } from "@/hooks/useMinicartContext"



interface CountProps {
  id: string,
  quantity: number
}

export const Counter = ({id, quantity}: CountProps) => {
  const { Count, removeItem } = useMinicartContext()

  return (
    <div className="product-count__button" id={id}>
      <MinusIcon onClick={() => Count.decreaseCount(Number(id))} />
        { quantity < 1 ? removeItem(id) : quantity }
      <PlusIcon onClick={() => Count.increaseCount(Number(id))} /> 
    </div>
  )
}