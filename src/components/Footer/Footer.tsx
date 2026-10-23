import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const language = pathname.split('/')[1];
  const langPrefix = language === 'fr' || language === 'es' ? `/${language}` : '';

  return (
    <footer className="footer">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <div className="footer-top">
          <div className="footer-divider" />

          <div className="footer-logo">
            <img src="/images/footer/main-logo-blue.svg" alt="Monte Carlo Vermouth logo" />
          </div>

          <div className="footer-divider" />
        </div>

        <div className="footer-grid">
          <div className="footer-column">
            <h3>{t('footer.menu')}</h3>

            <a href="#" onClick={(event) => event.preventDefault()}>
              <span>{t('footer.shop')}</span>
            </a>

            <Link to={`${langPrefix}/vermouth`}>
              <span>{t('footer.theVermouth')}</span>
            </Link>

            <Link to={`${langPrefix}/story`}>
              <span>{t('footer.ourStory')}</span>
            </Link>

            <Link to={`${langPrefix}/mixology`}>
              <span>{t('footer.mixology')}</span>
            </Link>

            <a href="#" onClick={(event) => event.preventDefault()}>
              <span>{t('footer.news')}</span>
            </a>
          </div>

          <div className="footer-column">
            <h3>{t('footer.social')}</h3>

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
            <h3>{t('footer.legalMenu')}</h3>

            <a href="#" onClick={(event) => event.preventDefault()}>
              <span>{t('footer.terms')}</span>
            </a>

            <a href="#" onClick={(event) => event.preventDefault()}>
              <span>{t('footer.cookies')}</span>
            </a>

            <a href="#" onClick={(event) => event.preventDefault()}>
              <span>{t('footer.legalNotice')}</span>
            </a>

            <a href="#" onClick={(event) => event.preventDefault()}>
              <span>{t('footer.privacy')}</span>
            </a>
          </div>

          <div className="footer-column footer-contact">
            <h3>{t('footer.contact')}</h3>

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
            <p>© 2026 Monte Carlo Vermouth. {t('footer.copyright')}</p>
            <p>{t('footer.responsibleDrinking')}</p>
          </div>

          <div className="footer-bottom-right">
            <p>{t('footer.licensedTrademark')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
