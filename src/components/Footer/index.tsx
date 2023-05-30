import logoFooter from 'assets/svg/logo.svg'
import facebookIcon from 'assets/svg/facebook-icon.svg'
import instagramIcon from 'assets/svg/instagram-icon.svg'
import twitterIcon from 'assets/svg/twitter-icon.svg'

import './styles.scss'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-line">
        <div className="footer-column-left">
          <img src={logoFooter} alt="logo icon" className="logo-footer" />
          <span className="column-left__text">We help you find your dream plant</span>
          <div className="network-container">
            <img src={facebookIcon} alt="Facebook icon" className="facebook network-icon" />
            <img src={instagramIcon} alt="Instagram icon" className="instagram network-icon" />
            <img src={twitterIcon} alt="Twitter icon" className="twitter network-icon" />
          </div>
        </div>
        <div className="footer-column-right">
          <ul className="footer__list information__list">
            <p className="list__title">Information</p>
            <li className="footer__item">About</li>
            <li className="footer__item">Product</li>
            <li className="footer__item">Blog</li>
          </ul>
          <ul className="footer__list company__list">
            <p className="list__title">Company</p>
            <li className="footer__item">Community</li>
            <li className="footer__item">Carrer</li>
            <li className="footer__item">Our story</li>
          </ul>
          <ul className="footer__list contact__list">
            <p className="list__title">Contact</p>
            <li className="footer__item">Getting Started</li>
            <li className="footer__item">Pricing</li>
            <li className="footer__item">Resources</li>
          </ul>
        </div>
      </div>
      <div className="footer-lower-line">
        <span className="footer-copyright">
          2023 all Right Reserved Term of use GREENMIND
        </span>
      </div>
    </footer>
  )
}