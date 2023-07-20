import { EmailIcon } from '@/components/icons'

import './styles.scss'
export const Newsletter = () => {
  const pathName = window.location.pathname.split('/').slice(-1)
  
  return (
    <>
    <div className={`newsletter-main --${pathName}`}>
      <div className="newsletter">
        <div className="newsletter-wrapper default-max-width-setup">
          <div className="newsletter-content">
            <div className="newsletter-content__title">
              <h2 className="newsletter__title">
                Join our newsletter
              </h2>
              <span className="newsletter__text">
                Stay on top of the latest trends in gardening and plant decoration
              </span>
            </div>
            <div className="newsletter-content__input">
              <div className="newsletter-input-container">
                <label htmlFor="newsletter-email" className="sr-only">Email</label>
                <input type="email" name="newsletter-email" id="newsletter-email" className="newsletter__input"
                placeholder="email@email.com"/>
                <EmailIcon className="email-icon"/>
              </div>
              <button type="submit" className="newsletter__button">Send</button>
            </div>
          </div>
          <div className="newsletter-footer">
            <p className="newsletter-footer__text">
              Receive expert plant care tips, and learn cultivation techniques to keep your plants healthy and thriving.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
