import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <div className="footer-top">
          <div className="footer-divider" />

          <div className="footer-logo">
            <img src="/images/footer/main-logo-blue.svg" alt="Monte Carlo Vermouth" />
          </div>

          <div className="footer-divider" />
        </div>

        <div className="footer-grid">
          <div className="footer-column">
            <h3>Menu</h3>

            <a href="#" onClick={(event) => event.preventDefault()}>
              <span>Shop</span>
            </a>

            <a href="#" onClick={(event) => event.preventDefault()}>
              <span>Our Varietals</span>
            </a>

            <a href="#" onClick={(event) => event.preventDefault()}>
              <span>The Vermouth</span>
            </a>

            <a href="#" onClick={(event) => event.preventDefault()}>
              <span>Our Story</span>
            </a>

            <a href="#" onClick={(event) => event.preventDefault()}>
              <span>Mixology</span>
            </a>

            <a href="#" onClick={(event) => event.preventDefault()}>
              <span>News</span>
            </a>
          </div>

          <div className="footer-column">
            <h3>Social</h3>

            <a
              href="https://www.instagram.com/montecarlo_vermouth/"
              target="_blank"
              rel="noopener noreferrer">
              <span>Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/montecarlovermouth"
              target="_blank"
              rel="noopener noreferrer">
              <span>Facebook</span>
            </a>
          </div>

          <div className="footer-column">
            <h3>Legal Menu</h3>

            <a href="#" onClick={(event) => event.preventDefault()}>
              <span>Terms and conditions of sale</span>
            </a>

            <a href="#" onClick={(event) => event.preventDefault()}>
              <span>Cookies Policy</span>
            </a>

            <a href="#" onClick={(event) => event.preventDefault()}>
              <span>Legal Notice</span>
            </a>

            <a href="#" onClick={(event) => event.preventDefault()}>
              <span>Privacy Policy</span>
            </a>
          </div>

          <div className="footer-column footer-contact">
            <h3>Contact</h3>

            <a href="mailto:info@montecarlovermouth.com" className="footer-contact-link">
              <span>info@montecarlovermouth.com</span>
            </a>

            <a href="tel:+33611663500" className="footer-contact-link">
              <span>+33 6 11 66 35 00</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>© 2026 Monte Carlo Vermouth. All rights reserved.</p>
            <p>Alcohol abuse is harmful to your health. Please drink responsibly.</p>
          </div>

          <div className="footer-bottom-right">
            <p>Monte Carlo, official licensed trademark by Monaco Brands</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
