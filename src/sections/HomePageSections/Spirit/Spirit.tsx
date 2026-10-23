import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import './Spirit.css';

const Spirit = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const language = pathname.split('/')[1];

  const langPrefix = language === 'fr' || language === 'es' ? `/${language}` : '';

  return (
    <section className="spirit">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <div className="spirit-grid">
          <div className="spirit-content">
            <div className="spirit-content-inner">
              <h2 className="spirit-title font-serif">
                <span>
                  <em>{t('spirit.title1')}</em> {t('spirit.title1Accent')}
                </span>

                <span>
                  <em>{t('spirit.title2')}</em> {t('spirit.title2Accent')}
                </span>

                <span>{t('spirit.title3')}</span>
              </h2>

              <p className="spirit-text">
                {t('spirit.description1')}
                <br />
                {t('spirit.description2')}
              </p>

              <Link to={`${langPrefix}/vermouth`} className="spirit-button">
                {t('spirit.button')}
              </Link>
            </div>
          </div>

          <div className="spirit-image">
            <img src="/images/HomePage/spirit/bottle.png" alt="Monte Carlo Vermouth" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spirit;
