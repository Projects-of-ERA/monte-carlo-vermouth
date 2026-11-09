import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import AnimatedText from '../AnimatedText/AnimatedText';

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
          {/* MENU */}
          <div className="footer-column">
            <h3>
              <AnimatedText>{t('footer.menu')}</AnimatedText>
            </h3>

            <Link to={`${langPrefix}/products`}>
              <span>
                <AnimatedText>{t('footer.shop')}</AnimatedText>
              </span>
            </Link>

            <Link to={`${langPrefix}/vermouth`}>
              <span>
                <AnimatedText>{t('footer.theVermouth')}</AnimatedText>
              </span>
            </Link>

            <Link to={`${langPrefix}/story`}>
              <span>
                <AnimatedText>{t('footer.ourStory')}</AnimatedText>
              </span>
            </Link>

            <Link to={`${langPrefix}/mixology`}>
              <span>
                <AnimatedText>{t('footer.mixology')}</AnimatedText>
              </span>
            </Link>

            <Link to={`${langPrefix}/news`}>
              <span>
                <AnimatedText>{t('footer.news')}</AnimatedText>
              </span>
            </Link>
          </div>

          {/* SOCIAL */}
          <div className="footer-column">
            <h3>
              <AnimatedText>{t('footer.social')}</AnimatedText>
            </h3>

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

          {/* LEGAL MENU */}
          <div className="footer-column">
            <h3>
              <AnimatedText>{t('footer.legalMenu')}</AnimatedText>
            </h3>

            <a href="#" onClick={(event) => event.preventDefault()}>
              <span>
                <AnimatedText>{t('footer.terms')}</AnimatedText>
              </span>
            </a>

            <a href="#" onClick={(event) => event.preventDefault()}>
              <span>
                <AnimatedText>{t('footer.cookies')}</AnimatedText>
              </span>
            </a>

            <a href="#" onClick={(event) => event.preventDefault()}>
              <span>
                <AnimatedText>{t('footer.legalNotice')}</AnimatedText>
              </span>
            </a>

            <a href="#" onClick={(event) => event.preventDefault()}>
              <span>
                <AnimatedText>{t('footer.privacy')}</AnimatedText>
              </span>
            </a>
          </div>

          {/* CONTACT */}
          <div className="footer-column footer-contact">
            <h3>
              <AnimatedText>{t('footer.contact')}</AnimatedText>
            </h3>

            <a href="mailto:info@montecarlovermouth.com" className="footer-contact-link">
              <span>info@montecarlovermouth.com</span>
            </a>

            <a href="tel:+33611663500" className="footer-contact-link">
              <span>+33 6 11 66 35 00</span>
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>
              © 2026 Monte Carlo Vermouth. <AnimatedText>{t('footer.copyright')}</AnimatedText>
            </p>

            <p>
              <AnimatedText>{t('footer.responsibleDrinking')}</AnimatedText>
            </p>
          </div>

          <div className="footer-bottom-right">
            <p>
              <AnimatedText>{t('footer.licensedTrademark')}</AnimatedText>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
