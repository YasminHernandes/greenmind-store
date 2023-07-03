import { DOMAttributes } from "react"

export const MinusIcon = (props: DOMAttributes<unknown>) => {
  return (
    <div onClick={props.onClick}>
      <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 13.4979H5V11.4979H19V13.4979Z" fill="#598888"/>
      </svg>
    </div>
  )
}