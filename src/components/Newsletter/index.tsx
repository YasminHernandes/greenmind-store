import './styles.scss';
import { EmailIcon } from '@/components/icons';
import { useEmailValidation } from '@/hooks/useEmailValidation';

export const Newsletter = () => {
  const pathName = window.location.pathname.split('/').slice(-1)  

  const { emailSubmit, inputError, setInputError, handleChange, inputRef, handleSubmit } = useEmailValidation();

  return (
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
              { !emailSubmit ? (
                <div className="newsletter-content__input">
                  <form>
                    <div className="newsletter-input-container">
                      <div className="newsletter-input">
                        <label htmlFor="newsletter-email" className="sr-only">
                          Email
                        </label>
                        <input
                          type="email"
                          name="newsletter-email"
                          id="newsletter-email"
                          className={`input newsletter__input ${inputError ? 'error--active' : ''}`}
                          placeholder="email@email.com"
                          onBlur={() => setInputError(false)}
                          onChange={handleChange}
                          ref={inputRef}
                          required
                        />
                        <span className={`error-message ${inputError ? 'error--active' : ''}`}>
                          Please enter a valid email address
                        </span>
                        <EmailIcon className={`email-icon ${inputError ? 'error--active' : ''}`} />
                      </div>
                    </div>
                    <button type="submit" className="newsletter__button" onClick={handleSubmit}>
                      Send
                    </button>
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