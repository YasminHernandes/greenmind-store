import { useContext } from "react"
import { MinicartContext } from "@/contexts/minicartContext.tsx"

export const useMinicartContext = () => {
  return useContext<any>(MinicartContext)
}
