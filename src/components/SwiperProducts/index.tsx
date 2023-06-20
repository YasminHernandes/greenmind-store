import { ReactNode } from "react";
import { Swiper } from "swiper/react";

import 'swiper/scss'

type Props = {
  children: ReactNode
}
export const SwiperProducts = ({children}: Props) => {
  return (
    <Swiper
      loop={true} 
      slidesPerView={'auto'}
      spaceBetween={48}
    >
    {children}
  </Swiper>

  )
}