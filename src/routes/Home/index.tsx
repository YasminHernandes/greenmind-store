import heroImage from 'assets/svg/bg-hero.svg'
import arrowRight from 'assets/svg/arrow-right.svg'
import plantIcon from 'assets/svg/plant-icon.svg'
import boxIcon from 'assets/svg/box-icon.svg'
import phoneIcon from 'assets/svg/phone-icon.svg'
import quotesIcon from 'assets/svg/quotes.svg'
import starFill from 'assets/svg/starfill.svg'

import { person } from 'assets/data'

import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper';

import 'swiper/scss'
import 'swiper/scss/autoplay'
import './styles.scss'
import { Header, Search } from 'components'
import { useApi } from 'hooks/useApi'
import { Product } from 'types/product-types'

export const Home = () => {
  const { data: product } = useApi<Product[]>('https://plantsapi.vercel.app')
  const newProduct = product!.splice(0, 3)

  SwiperCore.use([Autoplay])

  type ArrowColorType = {
    fillColor: string
  }
  const ArrowRight = ({fillColor}: ArrowColorType) => {
    return (
      <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" 
          clip-rule="evenodd" 
          d="M2 10.0001C2 9.8343 2.07902 9.67533 2.21967 9.55812C2.36032 9.44091 2.55109 9.37506 2.75 9.37506H20.4395L15.719 5.44256C15.5782 5.3252 15.4991 5.16603 15.4991 5.00006C15.4991 4.83409 15.5782 4.67492 15.719 4.55756C15.8598 4.4402 16.0508 4.37427 16.25 4.37427C16.4492 4.37427 16.6402 4.4402 16.781 4.55756L22.781 9.55756C22.8508 9.61561 22.9063 9.68458 22.9441 9.76052C22.9819 9.83645 23.0013 9.91785 23.0013 10.0001C23.0013 10.0823 22.9819 10.1637 22.9441 10.2396C22.9063 10.3155 22.8508 10.3845 22.781 10.4426L16.781 15.4426C16.6402 15.5599 16.4492 15.6258 16.25 15.6258C16.0508 15.6258 15.8598 15.5599 15.719 15.4426C15.5782 15.3252 15.4991 15.166 15.4991 15.0001C15.4991 14.8341 15.5782 14.6749 15.719 14.5576L20.4395 10.6251H2.75C2.55109 10.6251 2.36032 10.5592 2.21967 10.442C2.07902 10.3248 2 10.1658 2 10.0001Z" 
          fill={fillColor}
        />
      </svg>
    )
  }
  return (
    <>
      <Header activePath="home"/>
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
          <img src={heroImage} alt="hero image" className='hero-image' />
        </div>
      </section>

      <section className="section best-selling-plants-wrapper default-max-width-setup">
        <div className="container best-selling-plants-container">
          <div className="first-column">
            <h2 className="best-selling-plants__title title">Best Selling Plants</h2>
            <p className="best-selling-plants__text subtitle">
            Easiest way to healthy life by buying your favorite plants
            </p>
            <Link to="/products" className="best-selling-plants__button">
              See more
              <ArrowRight fillColor="#446969"/>
            </Link>
          </div>
          <div className="products-cards">
            {
              newProduct.map((product:any) => {
                return (
                  <div key={product.id} className="product-container">
                    <img src={product.img} alt="" className="product__image" />
                    <p className="product__name">{product.name}</p>
                    <p className="product__price">${product.price}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      
      <section className="section about-us-wrapper default-max-width-setup">
        <div className="container about-us-container">
          <h3 className="about-us__title title">About us</h3>
          <p className="about-us__text subtitle">Order now and appreciate the beauty of nature</p>
          <div className="about-us-content">
            <div className="about-us__item">
              <span className="about-us__item-icon">
                <img src={plantIcon} alt="" className='about-us__icon' />
              </span>
              <h4 className="about-us__item-title">Large Asssortment</h4>
              <p className="about-us__item-text">we offer many different types of products with fewer variations in each category.</p>
            </div>
            <div className="about-us__item">
              <span className="about-us__item-icon">
                <img src={boxIcon} alt="" className='about-us icon' />
              </span>
              <h4 className="about-us__item-title">Fast & Free Shipping</h4>
              <p className="about-us__item-text">4-day or less delivery time, free shipping and an expedited delivery option.</p>
            </div>
            <div className="about-us__item">
              <span className="about-us__item-icon">
                <img src={phoneIcon} alt="" className='about-us icon' />
              </span>
              <h4 className="about-us__item-title">24/7 Support</h4>
              <p className="about-us__item-text">answers to any business related inquiry 24/7 and in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section categories-wrapper default-max-width-setup">
        <div className="categories__header">
          <h4 className="categories__title title">Categories</h4>
          <span className="categories__text subtitle">Find what you are looking for</span>
        </div>
        <div className="categories-container">
          <div className="categories-content">
            <div className="categories-cards">
              <div className="categories-card">
                <img src="https://images.unsplash.com/photo-1526565782131-a13074f0dbbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="Plant image" 
                    className="categories__image">
                </img>
                <span className="categories-card__title">Natural Plants</span>
              </div>
              <div className="categories-card">
                <img src="https://images.unsplash.com/photo-1508502726440-477c94bc369e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                    alt="Plant image"
                    className="categories__image">
                </img>
                <span className="categories-card__title">Plants Accessories</span>
                <div className="info-container">
                  <span className="categories-card__text subtitle">Horem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                  <Link to="/products" className='categories__button'>
                    Explore
                    <ArrowRight fillColor="#1E1E1E"/>
                  </Link>
                </div>
              </div>
              <div className="categories-card">
                <img src="https://images.unsplash.com/photo-1569350080887-dd38c27caad0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" 
                    alt="Plant image"
                    className="categories__image">
                </img>
                <span className="categories-card__title">Artificial Plants</span>  
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <section className="section rates-wrapper default-max-width-setup">
        <div className="container rates-container">
          <h4 className="rates__title">What customers say about GREENMIND?</h4>
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
                }
              }}
            >
              {
                person.map((item:any) => {
                  return (
                    <SwiperSlide className="rates-card" key={item.id}>
                    <p className="rates-card__text">Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    <div className="rates-card-person-info">
                      <img src={quotesIcon} alt="quotes icon" className="quotes-icon" />
                      <img src={item.img} alt="" className="person-image" />
                      <span className="person-name">
                        {item.name}
                        <span className="person-job">
                          {item.jobTitle}
                        </span>
                      </span>
                      <span className="rates-value">
                        <img src={starFill} alt="Star rate" className="star-icon"/>
                        4.5
                      </span>
                    </div>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
        </div>
      </section>
    </>
  )
}