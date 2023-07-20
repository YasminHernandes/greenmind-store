import './styles.scss'

import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Minicart } from '@/components'
import { useMinicartContext } from '@/hooks/useMinicartContext'
import { MinicartIcon, MenuMobile, Logo, CloseIcon, Profile} from '@/components/icons'


export const Header = () => {
  const pathName = window.location.pathname.split('/').slice(-1)  
  const { minicart, toggleMinicart, Calculate } = useMinicartContext()
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  
  menuOpen && (
    window.addEventListener('keydown', (e) => {
      e.key === 'Escape' && setMenuOpen(false)
    })
  )

  return (
    <>
      <header className={`header --${pathName}`}>
        <div className="header-wrapper default-max-width-setup">
          <MenuMobile onClick={toggleMenu}/>
          <Logo className='logo-header'/>
          <nav className={`nav ${menuOpen ? '--open' : ''}`}>
            <div className="nav-container__mobile">
              <div className="menu-mobile__header">
                <CloseIcon onClick={toggleMenu}/>
                <Logo className='logo-menu'/>
              </div>
              <div className="menu-mobile__login">
                <a href='\' className="login-title menu-item">
                  Login
                  <Profile className="profile-menu"/>
                </a>
                <a href="\" className='menu-item'>Account</a>
                <a href="\" className='menu-item'>My orders</a>
                <a href="\" className='menu-item'>My wishlist</a>
              </div>
            </div>
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
              <MinicartIcon className="minicart-icon header-icon"/>
              <span className="count">{ Calculate.totalItems() } </span>
            </div>
            <Profile className="profile header-icon"/>
          </div>
          { minicart && <Minicart /> }
        </div>
      </header>
    </>
  )
}