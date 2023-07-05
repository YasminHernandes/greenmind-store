import { useContext } from "react"
import { MinicartContext } from "@/contexts/MinicartContext"

export const useMinicartContext = () => {
  return useContext<any>(MinicartContext)
}
