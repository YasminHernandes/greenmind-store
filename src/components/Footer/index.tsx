import './styles.scss'

import { Logo, FacebookIcon, InstagramIcon, TwitterIcon, HeartIcon } from '@/components/icons'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className=" footer-wrapper default-max-width-setup">
      <div className="footer-top-line">
        <div className="footer-column-left">
          <Logo className='logo-footer'/>
          <span className="column-left__text">
            We help you find your dream plant
          </span>
          <div className="network-container">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='network__link'
            >
              <FacebookIcon className="facebook network-icon"/>
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='network__link'
            >
              <InstagramIcon className="instagram network-icon"/>
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='network__link'
            >
              <TwitterIcon className="twitter network-icon"/>
            </a>
          </div>
        </div>
        <div className="footer-column-right">
          <ul className="footer__list information__list">
            <p className="list__title">
              Information
            </p>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='footer__link'
            >
              <li className="footer__item">
                About
              </li>
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='footer__link'
            >
              <li className="footer__item">
                Product
              </li>
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='footer__link'
            >
              <li className="footer__item">
                Blog
              </li>
            </a>
          </ul>
          <ul className="footer__list company__list">
            <p className="list__title">
              Company
            </p>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='footer__link'
            >
              <li className="footer__item">
                Community
              </li>
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='footer__link'
            >
              <li className="footer__item">
                Carrer
              </li>
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='footer__link'
            >
              <li className="footer__item">
                Our story
              </li>
            </a>
          </ul>
          <ul className="footer__list contact__list">
            <p className="list__title">
              Contact
            </p>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='footer__link'
            >
              <li className="footer__item">
                Getting Started
              </li>
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='footer__link'
            >
              <li className="footer__item">
                Pricing
              </li>
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='footer__link'
            >
              <li className="footer__item">
                Resources
              </li>
            </a>
          </ul>
        </div>
      </div>
      <span className="footer-copyright">
        <span className="copyright__text">
          2023 all Right Reserved Term of use GREENMIND
        </span>
        <span className="develop-by__text">
          Designed and Coded with
          <HeartIcon/>
          by
          <a href="https://yasminhernandes.vercel.app" target='_blank'>
            Yasmin Hernandes
          </a>
        </span>
      </span>
      </div>
    </footer>
  )
}