import logoHeader from 'assets/svg/logo.svg'
import minicartIcon from 'assets/svg/minicart.svg'
import perfilIcon from 'assets/svg/perfil.svg'
import settingsIcon from 'assets/svg/settings.svg'
import './styles.scss'

import { useEffect, useState } from 'react'

export const Header = () => {
  const [active, setActive] = useState('home')

  useEffect(() => {
    if (window.location.pathname == '/products') setActive('products')
    else if(window.location.pathname == '/contacts') setActive('contacts')
  }, [])

  console.log(active)

  return (
    <>
      <header className="header default-max-width-setup">
        <img className="logo-header" src={logoHeader} alt="" />
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/" className={`nav__link home ${active == 'home' ? 'active' : ''}`}>Home</a>
            </li>
            <li className="nav__item">
              <a href="/products" className={`nav__link products ${active == 'products' ? 'active' : ''}`}>Products</a>
            </li>
            <li className="nav__item">
              <a href="/contacts" className={`nav__link contacts ${active == 'contacts' ? 'active' : ''}`}>Contacts</a>
            </li>
          </ul>
        </nav>
        <div className="header-column-right">
          <div className="minicart-perfil-container">
            <img src={minicartIcon} alt="minicart icon" className="minicart header-icon" />
            <img src={perfilIcon} alt="perfil icon" className="perfil header-icon" />
          </div>
          <img src={settingsIcon} alt="" className="settings header-icon" />
        </div>
      </header>
    </>
  )
}