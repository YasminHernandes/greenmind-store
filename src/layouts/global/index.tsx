import { ReactNode } from "react"
import { Newsletter, Footer } from "@/components"

type Props = {
  children: ReactNode,
}

export const GlobalLayout = ({children}: Props) => {

  return (
    <>
      {children}
      <Newsletter/>
      <Footer/>
    </>
  )
}