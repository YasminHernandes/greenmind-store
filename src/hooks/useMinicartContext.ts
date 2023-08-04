import { useContext } from "react"
import { MinicartContext } from "@/contexts"

export const useMinicartContext = () => {
  return useContext<any>(MinicartContext)
}
