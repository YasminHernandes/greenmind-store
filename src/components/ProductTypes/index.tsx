import { useEffect, useState } from "react";
import { ProductType } from "@/types/product-types";
import { useApi } from "@/hooks/useApi";
import { ArrowDown } from "@/components/icons";
import { Search } from "@/components";

export const ProductTypes = ({...props}) => {
  
  const { data: products } = useApi<ProductType[]>('https://plantsapi.vercel.app');
  const [productsFiltered, setProductsFiltered] = useState<string[]>([]);
  const [openTypes, setOpenTypes] = useState(false);

  const handleOpenTypes = () => {
    setOpenTypes(!openTypes)
  }

  
  useEffect(() => {
    const arrayAux: string[] = [];
    const typeProducts = products.map((item: ProductType) => item.type);

    typeProducts.forEach((type: string) => {
      !arrayAux.includes(type) && arrayAux.push(type)
    });

    setProductsFiltered(arrayAux)
  }, [products])

  return (
    <div className={"products-filter " + props.className}>
      <h3 className="products-filter__title" onClick={handleOpenTypes}>
        Types
        <ArrowDown className="arrow-down"/>
      </h3>

      <div className={`option-wrapper ${openTypes ? '--open' : ''}`}>
        <Search 
          className="search-types-products-wrapper" 
          id="search-types-products" 
          placeholder="Search by type"/>
        <div className="types-options-container">
          <div className="types-options">
            { productsFiltered.map((type: string) => (
              <div className="type-option" key={type}>
                <label htmlFor="type" className="type__label">
                  <input type="checkbox" 
                      name="type" 
                      id={type} 
                      className="search-type__input" 
                      title={`type ${type}`}
                    />
                  {type.toUpperCase()}
                  <span className="input-checkmark"></span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
