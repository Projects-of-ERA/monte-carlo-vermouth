import { useTranslation } from 'react-i18next';

import './VermouthHero.css';

const VermouthHero = () => {
  const { t } = useTranslation();

  return (
    <section className="vermouth-hero">
      {/* BACKGROUND */}
      <div className="vermouth-hero-background">
        <img
          src="/images/VermouthPage/hero/vermouth-hero.png"
          alt="vermouth-hero"
          className="vermouth-hero-image"
        />
      </div>

      {/* OVERLAY */}
      <div className="vermouth-hero-overlay" />

      {/* CONTENT */}
      <div className="vermouth-hero-container mx-auto max-w-8xl px-4 lg:px-8">
        <div className="vermouth-hero-content">
          <h1 className="vermouth-hero-title font-serif">
            <span>{t('vermouthHero.title1')}</span>

            <span>
              {t('vermouthHero.title2')} <em>{t('vermouthHero.title2Accent')}</em>
            </span>

            <span>{t('vermouthHero.title3')}</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default VermouthHero;
