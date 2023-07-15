import './styles.scss'
import logoHeader from '@/assets/svg/logo.svg'
import minicartIcon from '@/assets/svg/minicart.svg'
import perfilIcon from '@/assets/svg/perfil.svg'

import { NavLink } from 'react-router-dom'
import { Minicart } from '@/components'
import { useMinicartContext } from '@/hooks/useMinicartContext'


export const Header = () => {
  const pathName = window.location.pathname.split('/').slice(-1)  
  const { minicart, toggleMinicart, Calculate } = useMinicartContext()
  
  return (
    <>
      <header className={`header --${pathName}`}>
        <div className="header-wrapper default-max-width-setup">
          <a href="/" className="logo__link">
            <img className="logo-header" src={logoHeader} alt="" />
          </a>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink 
                  to="/" 
                  reloadDocument 
                  className={({ isActive }) => `home nav__link ${isActive ? 'active' : ''}`}
                  >
                    Home
                  </NavLink>
              </li>
              <li className="nav__item">
                <NavLink 
                  to="/products" 
                  reloadDocument 
                  className={({ isActive }) => `products nav__link ${isActive ? 'active' : ''}`}
                  >
                    Products
                  </NavLink>
              </li>
              <li className="nav__item">
                <NavLink 
                  to="/contacts" 
                  reloadDocument 
                  className={({ isActive }) => `contacts nav__link ${isActive ? 'active' : ''}`}
                  >
                    Contacts
                  </NavLink>
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