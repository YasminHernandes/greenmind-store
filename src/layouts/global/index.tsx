import { ReactNode } from "react"
import { Header } from "../../components"
import { Footer } from "../../components/Footer"

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