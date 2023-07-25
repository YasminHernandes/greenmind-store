import './styles.scss'
import artificialPlants from '@/assets/png/artificial-plants.png'
import naturalPlants from '@/assets/png/natural-plants.png'
import cactus from '@/assets/png/cactus.png'
import bonsai from '@/assets/png/bonsai.png'
import banner from '@/assets/png/banner-footer.png'
import { PlantDrawBanner } from '@/components/icons'

import { 
  Search,
  CategoryCard,
  Dropdown,
  ProductCard,
  SwiperProductsCatalog
} from '@/components';

import { SwiperSlide } from 'swiper/react';
import { ProductType } from '@/types/product-types';
import { SortByType } from '@/types/sort-by-type'
import { useApi } from '@/hooks/useApi'
import { ProductTypes } from '@/components/ProductTypes'

export const ProductsCatalog = () => {  
  const { data: products } = useApi<ProductType[]>('https://plantsapi.vercel.app');
  const options = [
    { value: SortByType.RELEVANCY, label: SortByType.RELEVANCY },
    { value: SortByType.HIGHEST_TO_LOWEST, label: SortByType.HIGHEST_TO_LOWEST },
    { value: SortByType.LOWEST_TO_HIGHEST, label: SortByType.LOWEST_TO_HIGHEST },
    { value: SortByType.MOST_RATED, label: SortByType.MOST_RATED },
    { value: SortByType.BESTSELLERS, label: SortByType.BESTSELLERS }
  ]
  

  return (
    <>
      <div className="catalog-wrapper --wrapper">
        <section className="hero">
          <div className="hero-wrapper default-max-width-setup">
            <div className="hero-content">
                <div className="hero-content-wrapper">
                  <h1 className="hero__title">
                    Best Selling Plants
                  </h1>
                  <p className="hero__text">
                    we offer many different types of products with fewer variations in each category.
                  </p>
                  <Search className="search-products-wrapper" id="search-products" placeholder="What are you looking for?"/>
                </div>
            </div>
          </div>
        </section>
        <section className="category">
          <div className="category-wrapper default-max-width-setup">
            <div className="category-cards-container">
              <CategoryCard img={artificialPlants} title="Artificial Plants" />
              <CategoryCard img={naturalPlants} title="Natural Plants" />
              <CategoryCard img={cactus} title="Cactus" />
              <CategoryCard img={bonsai} title="Bonsai" />
            </div>
          </div>
        </section>
        <section className="products">
          <div className="products-wrapper default-max-width-setup">
            <div className="products-content">
              <div className="products-filter-and-cards">
               <ProductTypes className="--desktop"/>
                <div className="products-cards-container">
                  <div className="products-count-and-types-wrapper">
                    <div className="count-and-sort">
                      <span className="products-count">Showed 30 items</span>
                      <div className="products-sort">
                        <span className="sort__text">
                          Sort by
                        </span>
                        <Dropdown placeholder="Relevancy" options={options}/>
                      </div>
                    </div>
                    <ProductTypes className="--mobile"/>
                  </div>
                  <div className="products__cards">
                    { products.map((product: ProductType) => (
                        <ProductCard
                          key={Number(product.id)+1}
                          id={product.id}
                          title={product.name}
                          type={product.type}
                          price={product.price}
                          sellingPrice={product.selling_price}
                          img={product.img}
                          soldOut={(product.sold_out === 'true') ? 'sold-out' : ''}
                          hasButton={true}
                        />
                      ))
                    }
                  </div>
                </div>
              </div>
              <div className="products-best-sellers">
                <h3 className="best-sellers__title">Best sellers</h3>
                <SwiperProductsCatalog>
                  { products.map((product: ProductType) => (
                    <SwiperSlide key={Number(product.id)+1}>
                      <ProductCard
                        key={Number(product.id)+1}
                        id={product.id}
                        title={product.name}
                        type={product.type}
                        price={product.price.replace(',', '.')}
                        sellingPrice={product.selling_price.replace(',', '.')}
                        img={product.img}
                        soldOut={(product.sold_out === 'true') ? 'sold-out' : ''}
                        hasButton={true}
                      />
                    </SwiperSlide>
                    ))
                  }
                </SwiperProductsCatalog>
              </div>
            </div>
          </div>
        </section>
        <section className="banner">
          <div className="banner-wrapper default-max-width-setup">
            <div className="banner-content">
              <h3 className="banner__title">
                Transform 
                <span className="banner__text">any environment into a natural and cozy haven with plants.</span>
              </h3>
              <img src={banner} alt="Banner footer image" className="banner-image" />
              <PlantDrawBanner  className="banner-stroke"/>
              <PlantDrawBanner  className="banner-stroke"/>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}