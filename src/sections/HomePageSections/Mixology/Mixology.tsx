import { useTranslation } from 'react-i18next';
import MixologyQuotes from './MixologyQuotes';

import './Mixology.css';

const Mixology = () => {
  const { t } = useTranslation();

  return (
    <section className="mixology">
      {/* INTRO */}
      <div className="mixology-intro">
        <div className="mx-auto max-w-8xl px-4 lg:px-8">
          <div className="mixology-intro-grid">
            <h2 className="mixology-title font-serif">
              <span className="mixology-title-elegant">{t('mixology.title1')}</span>

              <span>{t('mixology.title2')}</span>
            </h2>

            <p className="mixology-description">
              {t('mixology.description1')}
              <br />
              {t('mixology.description2')}
            </p>
          </div>
        </div>
      </div>

      {/* FEATURE */}
      <div className="mixology-feature">
        <img
          src="/images/HomePage/mixology/mixology.png"
          alt="Monte Carlo Vermouth mixology"
          className="mixology-feature-image"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 z-[1] bg-black/40" />

        <div className="mixology-feature-content">
          <h3 className="mixology-feature-title font-serif">
            <span>
              {t('mixology.featureTitle1')} <em>{t('mixology.featureTitle1Accent')}</em>
            </span>

            <span>
              <em>{t('mixology.featureTitle2')}</em> {t('mixology.featureTitle2Accent')}
            </span>

            <span>{t('mixology.featureTitle3')}</span>
          </h3>
        </div>
      </div>

      {/* QUOTES SWIPER */}
      <MixologyQuotes />
    </section>
  );
};

export default Mixology;
