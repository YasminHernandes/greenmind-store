import 'swiper/scss'
import 'swiper/scss/autoplay'
import './styles.scss'

import { 
  ArrowRight, 
  BgHero, 
  PlantIcon, 
  BoxIcon, 
  PhoneHomeIcon, 
  Quotes,
  StarFill 
} from '@/components/icons'

import { 
  Search, 
  ProductCard
} from '@/components'

import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper';
import { person } from '@/assets/data'
import { useApi } from '@/hooks/useApi'
import { ProductTypes } from '@/types/product-types.d.ts'



export const Home = () => {
  const { data: product } = useApi('https://plantsapi.vercel.app')
  const newProduct = product!.splice(0, 3)

  SwiperCore.use([Autoplay])

  return (
    <>
      <div className="home-wrapper --wrapper">
        <section className="section hero-wrapper default-max-width-setup">
          <div className="container hero-container">
            <div className="hero-column-left">
              <h1 className="hero-title">
                Buy your dream plants
              </h1>
              <div className="species-customers-container">
                <span className="species-values">
                  50+
                  <span className="species__text">
                    Plant Species
                  </span>
                </span>
                <span className="customers-values">
                  100+ 
                  <span className="customers__text">
                    Customers
                  </span>
                </span>
              </div>
              <Search className="search-home" placeholder="What are you looking for?"/>
            </div>
            <BgHero className='hero-image'/>
          </div>
        </section>

        <section className="section best-selling-plants-wrapper default-max-width-setup">
          <div className="container best-selling-plants-container">
            <div className="first-column">
              <h2 className="best-selling-plants__title title">
                Best Selling Plants
              </h2>
              <p className="best-selling-plants__text subtitle">
                Easiest way to healthy life by buying your favorite plants
              </p>
              <Link to="/products" className="best-selling-plants__button">
                See more
                <ArrowRight fillColor="#446969"/>
              </Link>
            </div>
            <div className="home-products__cards">
              {
                newProduct.map((product: typeof ProductTypes) => {
                  return (
                    <ProductCard 
                      key={product.id}
                      id={product.id}
                      title={product.name}
                      sellingPrice={product.selling_price.replace(',', '.')}
                      img={product.img}
                      alt={product.img}
                      soldOut={(product.sold_out === 'true') ? 'sold-out' : ''}
                      hasButton={false}
                    />
                  )
                })
              }
            </div>
          </div>
        </section>
        
        <section className="section about-us-wrapper default-max-width-setup">
          <div className="container about-us-container">
            <h3 className="about-us__title title">
              About us
            </h3>
            <p className="about-us__text subtitle">
              Order now and appreciate the beauty of nature
            </p>
            <div className="about-us-content">
              <div className="about-us__item">
                <span className="about-us__item-icon">
                  <PlantIcon className='about-us__icon'/>
                </span>
                <h4 className="about-us__item-title">
                  Large Asssortment
                </h4>
                <p className="about-us__item-text">
                  we offer many different types of products with fewer variations in each category.
                </p>
              </div>
              <div className="about-us__item">
                <span className="about-us__item-icon">
                  <BoxIcon className='about-us icon'/>
                </span>
                <h4 className="about-us__item-title">
                  Fast & Free Shipping
                </h4>
                <p className="about-us__item-text">
                  4-day or less delivery time, free shipping and an expedited delivery option.
                </p>
              </div>
              <div className="about-us__item">
                <span className="about-us__item-icon">
                  <PhoneHomeIcon className='about-us icon' />
                </span>
                <h4 className="about-us__item-title">
                  24/7 Support
                </h4>
                <p className="about-us__item-text">
                  answers to any business related inquiry 24/7 and in real-time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section categories-wrapper default-max-width-setup">
          <div className="categories__header">
            <h4 className="categories__title title">
              Categories
            </h4>
            <span className="categories__text subtitle">
              Find what you are looking for
            </span>
          </div>
          <div className="categories-container">
            <div className="categories-content">
              <div className="categories-cards">
                <div className="categories-card">
                  <img
                    src="https://images.unsplash.com/photo-1526565782131-a13074f0dbbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="Plant image" 
                    className="categories__image"
                  >
                  </img>
                  <span className="categories-card__title">
                    Natural Plants
                  </span>
                </div>
                <div className="categories-card">
                  <img 
                    src="https://images.unsplash.com/photo-1508502726440-477c94bc369e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="Plant image"
                    className="categories__image"
                  >
                  </img>
                  <span className="categories-card__title">
                    Plants Accessories
                  </span>
                  <div className="info-container">
                    <span className="categories-card__text subtitle">
                      Horem ipsum dolor sit amet, consectetur adipiscing elit.
                    </span>
                    <Link to="/products" className='categories__button'>
                      Explore
                      <ArrowRight fillColor="#1E1E1E"/>
                    </Link>
                  </div>
                </div>
                <div className="categories-card">
                  <img 
                    src="https://images.unsplash.com/photo-1569350080887-dd38c27caad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" 
                    alt="Plant image"
                    className="categories__image"
                  >
                  </img>
                  <span className="categories-card__title">
                    Artificial Plants
                  </span>  
                </div>
                
              </div>
            </div>
          </div>
        </section>

        <section className="section rates-wrapper default-max-width-setup">
          <div className="container rates-container">
            <h4 className="rates__title">
              What customers say about GREENMIND?
            </h4>
              <Swiper
                loop={true}
                autoplay={{
                  delay: 3000,
                  pauseOnMouseEnter: true
                }}
                spaceBetween={48}
                breakpoints={{
                  1025: {
                    slidesPerView: "auto"
                  },
                  768: {
                    slidesPerView: 1.2,
                    spaceBetween: 24
                  }
                }}
              >
                {person.map((item:any) => {
                  return (
                    <SwiperSlide className="rates-card" key={item.id}>
                      <p className="rates-card__text">
                        Jorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nunc vulputate libero et velit interdum, ac aliquet odio mattis. 
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                      </p>
                      <div className="rates-card-person-info">
                        <Quotes className="quotes-icon" />
                        <img src={item.img} alt="" className="person-image" />
                        <span className="person-name">
                          {item.name}
                          <span className="person-job">
                            {item.jobTitle}
                          </span>
                        </span>
                        <span className="rates-value">
                          <StarFill className="star-icon"/>
                          4.5
                        </span>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
          </div>
        </section>
      </div>
    </>
  )
}