import { useTranslation } from 'react-i18next';

import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero relative h-[min(100vh,1080px)] overflow-hidden bg-black text-white">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source
          media="(max-width: 768px)"
          src="/images/HomePage/hero/monte-carlo-vermouth.webm"
          type="video/webm"
        />

        <source src="/images/HomePage/hero/monte-carlo-vermouth.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="relative z-[2] mx-auto flex h-full max-w-[1450px] items-center px-8">
        <div className="hero-content">
          <h1 className="hero-title font-serif">
            <span>
              <em>{t('hero.title1')}</em> {t('hero.title1Accent')}
            </span>

            <span className="hero-title-offset">
              <em>{t('hero.title2')}</em> {t('hero.title2Accent')}
            </span>

            <span className="hero-title-last">{t('hero.title3')}</span>
          </h1>

          <a href="#" className="hero-shop-button">
            {t('hero.button')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
