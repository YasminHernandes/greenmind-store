import './styles.scss'

import { MapIcon, PhoneContactIcon, EmailIcon, HoursIcon } from '@/components/icons'

export const Contacts = () => {
  
  return (
    <>
      <div className="contact-wrapper --wrapper">
        <section className="contact">
          <div className="contact-wrapper default-max-width-setup">
            <h2 className="contact__title">
              Contact us
              <span className="contact__text">
                You can contact us by filling out the form below or using the contact details provided. We will respond as soon as possible, usually within 24 hours.
              </span>
            </h2>
            <div className="contact-container">
              <div className="contact-form">
                <h3 className="form__title">Leave us a message</h3>
                <form action="" method="post" className="form">
                  <div className="form__fields">
                    <label htmlFor="name" id="name" className="sr-only">Name</label>
                    <input type="text" name="name" id="name" placeholder="Name" className="contact__input" required={true}/>

                    <label htmlFor="email" id="email" className="sr-only">Email'</label>
                    <input type="email" name="email" id="email" placeholder="Email" className="contact__input" required/>

                    <label htmlFor="message" id="message" className="sr-only">Message</label>
                    <textarea name="message" id="message"  placeholder="Message" cols={50} rows={10} className="contact__input textarea" required/>
                  </div>
                  <button type="submit" className="contact__button">Send</button>
                </form>
              </div>
              <div className="contact-infos">
                <span className="contact-info__text address">
                  7631 Ridge Ave, Philadelphia, PA <br/> 
                  19128, United States
                  <MapIcon className="contact-info__icon" />
                </span>
                <span className="contact-info__text tellphone">
                  +1 215 483 5009
                  <PhoneContactIcon className="phone contact-info__icon" />
                </span>
                <span className="contact-info__text email">
                  greenmindstore@contact.com
                  <EmailIcon className="email contact-info__icon" />
                </span>
                <span className="contact-info__text hours">
                  Open Monday to Friday from 9am to 5pm <br/>
                  Saturday, Sunday and holidays from 10am to 7pm
                  <HoursIcon className="hours contact-info__icon" />
                </span>
              </div>
            </div>
          
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97720.80868285295!2d-75.24453500527997!3d40.05811579215857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b9262dff4d4b%3A0xef3bce8c77579fc9!2sSecret%20Garden!5e0!3m2!1spt-BR!2sbr!4v1687454238659!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="500" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="iframe"
                />

          </div>
        </section>
      </div>
    </>
  )
}