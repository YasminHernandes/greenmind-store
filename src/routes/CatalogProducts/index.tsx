import artificialPlants from 'assets/png/artificial-plants.png'
import naturalPlants from 'assets/png/natural-plants.png'
import cactus from 'assets/png/cactus.png'
import bonsai from 'assets/png/bonsai.png'
import banner from 'assets/png/banner-footer.png'
import bannerStroke from 'assets/svg/banner-image-stroke.svg'

import { 
  Header,
  Search,
  CategoryCard,
  Dropdown,
  ProductCard,
  SwiperCatalogProducts
} from 'components';

import { ProductType } from 'types/product-types';
import { useApi } from 'hooks/useApi';
import { SwiperSlide } from 'swiper/react';
import { useParams } from 'react-router-dom'
import './styles.scss'
import { useEffect, useState } from 'react'

export const CatalogProducts = () => {  
  const { data: products } = useApi<ProductType[]>('https://plantsapi.vercel.app');
  let [productsFiltered, setProductsFiltered] = useState<string[]>([]);

  useEffect(() => {
    let arrayAux: string[] = [];
    console.log(products);
    const typeProducts = products.map((item: ProductType) => item.type);
    console.log(typeProducts);
    typeProducts.forEach((type: string) => {
      if (!arrayAux.includes(type)) {
        arrayAux.push(type);
      }
    });
    console.log(arrayAux);
  setProductsFiltered(arrayAux)
  }, [products])

  const options = [
    {value: "relevancy", label: "Relevancy"},
    {value: "highest_to_lowest", label: "Price: Highest to Lowest"},
    {value: "lowest_to_highest", label: "Price: Lowest to Highest"},
    {value: "most_rated", label: "Most rated"},
    {value: "bestsellers", label: "Best sellers"},
  ]

  const params = useParams()
  console.log('params: ', params)

  return (
    <>
      <Header activePath="products"/>
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
              <div className="products-filter">
                <h3 className="products-filter__title">Types</h3>
                <Search className="search-types-products-wrapper" id="search-types-products" placeholder="Search by type"/>
                <div className="types-options-container">
                  <div className="types-options">
                    { productsFiltered.map((product: string) => (
                      <div className="type-option" key={product}>
                        <label htmlFor="type" className="type__label">
                          <input type="checkbox" 
                              name="type" 
                              id={product} 
                              className="search-type__input" 
                              title={`type ${product}`}
                            />
                          {product.toUpperCase()}
                          <span className="input-checkmark"></span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="products-cards-container">
                <div className="products-count-and-sort">
                  <span className="products-count">Showed 30 items</span>
                  <span className="products-sort">
                    Sort by
                    <Dropdown placeholder="Relevancy" options={options}/>
                  </span>
                </div>
                <div className="products__cards">
                  { products.map((product: ProductType) => (
                      <ProductCard key={product.id}
                        id={product.id}
                        title={product.name}
                        type={product.type}
                        price={product.price.replace(',', '.')}
                        sellingPrice={product.selling_price.replace(',', '.')}
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
              <SwiperCatalogProducts>
                { products.map((product: ProductType) => (
                  <SwiperSlide>
                    <ProductCard key={product.id}
                      title={product.name}
                      type={product.type}
                      price={product.price.replace(',', '.')}
                      sellingPrice={product.selling_price.replace(',', '.')}
                      img={product.img}
                      soldOut={(product.sold_out === 'true') ? 'sold-out' : ''}
                    />
                  </SwiperSlide>
                  ))
                }
              </SwiperCatalogProducts>
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
            <img src={bannerStroke} alt="banner stroke" className="banner-stroke"/>
            <img src={bannerStroke} alt="banner stroke" className="banner-stroke"/>
          </div>
        </div>
      </section>
    </>
  )
}