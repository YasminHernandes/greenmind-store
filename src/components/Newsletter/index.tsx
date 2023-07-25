import './styles.scss';
import { EmailIcon } from '@/components/icons';
import { useState, ChangeEvent, useRef } from 'react';

export const Newsletter = () => {
  const [emailSubmit, setEmailSubmit] = useState(false);
  const [inputError, setInputError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);


  const handleChange = () => {
    const isValid = inputRef?.current?.checkValidity();
    setInputError(!isValid);
  };

  const handleSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    inputRef?.current?.checkValidity() && setEmailSubmit(true);
    handleChange()
  };

  return (
    <div className="newsletter-main">
      <div className="newsletter">
        <div className="newsletter-wrapper default-max-width-setup">
          <div className="newsletter-content">
            <div className="newsletter-content__title">
              <h2 className="newsletter__title">Join our newsletter</h2>
              <span className="newsletter__text">
                Stay on top of the latest trends in gardening and plant decoration
              </span>
            </div>
            { !emailSubmit ? (
              <div className="newsletter-content__input">
                <form>
                  <div className="newsletter-input-container">
                    <div className="newsletter-input">
                      <label htmlFor="newsletter-email" className="sr-only">Email</label>
                      <input
                        type="email"
                        name="newsletter-email"
                        id="newsletter-email"
                        className={`newsletter__input ${inputError ? 'error--active' : ''}`}
                        placeholder="email@email.com"
                        onBlur={() => setInputError(false)}
                        onChange={handleChange}
                        ref={inputRef}
                        required
                      />
                      <EmailIcon className={`email-icon ${inputError ? 'error--active' : ''}`} />
                    </div>
                    <span className={`error ${inputError ? 'error--active' : ''}`}>
                      Please enter a valid email address
                    </span>
                  </div>
                  <button type="submit" className="newsletter__button" onClick={handleSubmit}>Send</button>
                </form>
              </div>
            ) : (
              <span className="email-submit-message">
                Thanks!
              </span>
            )}
          </div>
          <div className="newsletter-footer">
            <p className="newsletter-footer__text">
              Receive expert plant care tips, and learn cultivation techniques to keep your plants healthy and thriving.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}