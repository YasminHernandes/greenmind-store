import searchIcon from '@/assets/svg/search-icon.svg'

import './styles.scss'

type Props = {
  className: string,
  id: string,
  placeholder: string
}

export const Search = ({className, id, placeholder} : Props) => {
  return (
    <div className={className}>
      <div className="input-search-container">
        <input type="text" name="search" id={id} className="search" placeholder={placeholder}/>
        <button type='submit' className="button-search">
          <img src={searchIcon} alt="search icon" />
        </button>
      </div>
    </div>
  )
}
