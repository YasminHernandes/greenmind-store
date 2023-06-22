import logoHeader from 'assets/svg/logo.svg'
import minicartIcon from 'assets/svg/minicart.svg'
import perfilIcon from 'assets/svg/perfil.svg'
import settingsIcon from 'assets/svg/settings.svg'
import './styles.scss'

import { Link } from 'react-router-dom'
import { useState } from 'react'

export const Header = (props: any) => {
  const [ active ] = useState(props.activePath)
  
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
              <img src={minicartIcon} alt="minicart icon" className="minicart header-icon" />
              <img src={perfilIcon} alt="perfil icon" className="perfil header-icon" />
          </div>
        </div>
      </header>
    </>
  )
}