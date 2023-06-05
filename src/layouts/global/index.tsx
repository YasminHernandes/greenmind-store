import { ReactNode } from "react"
import { Header, Footer } from "components"

type Props = {
  children: ReactNode
}

export const GlobalLayout = ({children}: Props) => {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}