import './styles.scss'
import logoHeader from '@/assets/svg/logo.svg'
import minicartIcon from '@/assets/svg/minicart.svg'
import perfilIcon from '@/assets/svg/perfil.svg'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Minicart } from '@/components'
import { useMinicartContext } from '@/hooks/useMinicartContext'


export const Header = (props: any) => {
  const [ active ] = useState(props.activePath)
  const { minicart, toggleMinicart, Calculate } = useMinicartContext()
 
  
  return (
    <>
      <header className="header">
        <div className="header-wrapper default-max-width-setup">
          <a href="/" className="logo__link">
            <img className="logo-header" src={logoHeader} alt="" />
          </a>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className={`nav__link home ${active == 'home' ? 'active' : ''}`}>Home</Link>
              </li>
              <li className="nav__item">
                <Link to="/products" className={`nav__link products ${active == 'products' ? 'active' : ''}`}>Products</Link>
              </li>
              <li className="nav__item">
                <Link to="/contacts" className={`nav__link contacts ${active == 'contacts' ? 'active' : ''}`}>Contacts</Link>
              </li>
            </ul>
          </nav>
          <div className="header-column-right">
            <div className="minicart-container" onClick={toggleMinicart}>
              <img src={minicartIcon} alt="minicart icon" className="minicart header-icon"/>
              <span className="count">{ Calculate.totalItems() } </span>
            </div>
            <img src={perfilIcon} alt="perfil icon" className="perfil header-icon" />
          </div>
          { minicart && <Minicart /> }
        </div>
      </header>
    </>
  )
}