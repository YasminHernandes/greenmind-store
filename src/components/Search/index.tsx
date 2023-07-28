import './styles.scss'

import { SearchIcon } from '@/components/icons'

type Props = {
  className: string,
  id: string,
  placeholder: string
}

export const Search = ({className, id, placeholder} : Props) => {
  return (
    <div className={className}>
      <div className="input-search-container">
        <input 
          type="text"
          name="search" 
          id={id} 
          className="search" 
          placeholder={placeholder}
        />
        <button type='submit' className="button-search">
          <SearchIcon className="search-icon"/>
        </button>
      </div>
    </div>
  )
}
