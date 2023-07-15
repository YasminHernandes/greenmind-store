import './styles.scss'
import { MinusIcon, PlusIcon } from "@/components/icons"
import { useMinicartContext } from "@/hooks/useMinicartContext"



interface CountProps {
  id: string,
  quantity: number
}

export const Count = ({id, quantity}: CountProps) => {
  const { Count } = useMinicartContext()

  return (
    <div className="product-count__button" id={id}>
      <MinusIcon onClick={() => Count.decreaseCount(Number(id))} />
        { quantity }
      <PlusIcon onClick={() => Count.increaseCount(Number(id))} /> 
    </div>
  )
}