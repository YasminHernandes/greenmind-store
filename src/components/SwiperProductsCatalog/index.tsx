import { ReactNode } from "react";
import { Swiper } from "swiper/react";

import 'swiper/scss'

type Props = {
  children: ReactNode
}
export const SwiperProductsCatalog = ({children}: Props) => {
  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={48}
    >
    {children}
  </Swiper>

  )
}