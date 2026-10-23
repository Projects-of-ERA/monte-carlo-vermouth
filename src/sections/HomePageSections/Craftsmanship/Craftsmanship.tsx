import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import CraftsmanshipSlider from './CraftsmanshipSlider';

import './Craftsmanship.css';

const Craftsmanship = () => {
  const { t } = useTranslation();

  const { pathname } = useLocation();

  const language = pathname.split('/')[1];

  const langPrefix = language === 'fr' || language === 'es' ? `/${language}` : '';

  return (
    <section className="craftsmanship">
      {/* INTRO */}
      <div className="craftsmanship-intro">
        <div className="mx-auto max-w-8xl px-4 lg:px-8">
          <div className="craftsmanship-intro-content">
            <p className="craftsmanship-eyebrow">{t('craftsmanship.eyebrow')}</p>

            <h2 className="craftsmanship-title font-serif">
              <span>{t('craftsmanship.title1')}</span>

              <span>
                <em>{t('craftsmanship.title2')}</em> {t('craftsmanship.title2Accent')}
              </span>

              <span>{t('craftsmanship.title3')}</span>
            </h2>

            <p className="craftsmanship-description">{t('craftsmanship.description')}</p>

            <Link to={`${langPrefix}/mixology`} className="craftsmanship-button">
              {t('craftsmanship.button')}
            </Link>
          </div>
        </div>
      </div>

      {/* SWIPER */}
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <CraftsmanshipSlider />
      </div>
    </section>
  );
};

export default Craftsmanship;
