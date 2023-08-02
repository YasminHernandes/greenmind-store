import './styles.scss'

import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Minicart } from '@/components'
import { useMinicartContext } from '@/hooks/useMinicartContext'
import { MinicartIcon, MenuMobile, Logo, CloseIcon, Profile} from '@/components/icons'


export const Header = () => {
  const pathName = window.location.pathname.split('/').slice(-1)  
  const { minicart, toggleMinicart, Calculate } = useMinicartContext()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  
  menuOpen ? (
    window.addEventListener('keydown', (e) => {
      e.key === 'Escape' && setMenuOpen(false)
    }),
    document.body.style.overflow = 'hidden'
  ) : document.body.style.overflow = 'auto'


  useEffect(() => {
    const handleCloseMenu = (event: MouseEvent) => {
      (menuRef.current && !menuRef.current.contains(event.target as Node)) 
      && setMenuOpen(false);
    }

    window.addEventListener('mousedown', handleCloseMenu)
    return () => {
      window.removeEventListener('mousedown', handleCloseMenu)
    }
  }, [])

  return (
    <>
      <header className={`header --${pathName}`}>
        <div className="header-wrapper default-max-width-setup">
          <MenuMobile onClick={toggleMenu}/>
          <Logo className='logo-header'/>
          <nav className={`nav ${menuOpen ? '--open' : ''}`} ref={menuRef}>
            <div className="nav-container__mobile">
              <div className="menu-mobile__header">
                <CloseIcon onClick={toggleMenu}/>
                <Logo className='logo-menu'/>
              </div>
              <div className="menu-mobile__login">
                <NavLink to='/' reloadDocument className="login-title menu-item">
                  Login
                  <Profile className="profile-menu"/>
                </NavLink>
                <NavLink to="/" reloadDocument className='menu-item'>
                  Account
                </NavLink>
                <NavLink to="/" reloadDocument className='menu-item'>
                  My orders
                </NavLink>
                <NavLink to="/" reloadDocument className='menu-item'>
                  My wishlist
                </NavLink>
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
              <span className="count">
                { Calculate.totalItems() }
              </span>
            </div>
            <Profile className="profile header-icon"/>
          </div>
          { minicart && <Minicart /> }
        </div>
      </header>
    </>
  )
}