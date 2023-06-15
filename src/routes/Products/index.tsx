import { Header, Search, CategoryCard } from 'components';

import artificialPlants from 'assets/png/artificial-plants.png'
import naturalPlants from 'assets/png/natural-plants.png'
import cactus from 'assets/png/cactus.png'
import bonsai from 'assets/png/bonsai.png'
import arrowDown from 'assets/svg/arrow-down.svg'

import './styles.scss'
export const Products = () => {  

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
            <div className="products-filter">
              <h3 className="products-filter__title">Types</h3>
              <Search className="search-types-products-wrapper" id="search-types-products" placeholder="Search by type"/>
              <div className="types-options-container">
                <div className="types-options">
                  <input type="checkbox" name="type" id="type1" className="search-type__input" title="type"/>
                  <label htmlFor="type" className="type__label">Cactus</label>
                </div>
                <div className="types-options">
                  <input type="checkbox" name="type" id="type2" className="search-type__input" title="type" />
                  <label htmlFor="type" className="type__label">Cactus</label>
                </div>
                <div className="types-options">
                  <input type="checkbox" name="type" id="type3" className="search-type__input" title="type"/>
                  <label htmlFor="type" className="type__label">Cactus</label>
                </div>
              </div>
            </div>
            <div className="products-card-container">
              <div className="products-count-and-sort">
                <span className="products-count">Showed 30 items</span>
                <span className="products-sort">
                  Sort by
                  <select name="sort" id="sort" title="sort by" className="sort-by__select">
                    <option value="relevancy" selected>Relevancy</option>
                    <option value="price-highest-lowest">Price: highest to lowest</option>
                    <option value="price-lowest-highest">Price: lowest to highest</option>
                    <option value="most-rated">Most rated</option>
                    <option value="best-sellers">Best sellers</option>
                  </select>
                  <img src={arrowDown} alt="arrow down" className="select__arrow" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}