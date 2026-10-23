import './Botanicals.css';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import BotanicalsSlider from './BotanicalsSlider';

const Botanicals = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const language = pathname.split('/')[1];

  const langPrefix = language === 'fr' || language === 'es' ? `/${language}` : '';

  return (
    <section className="botanicals">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <div className="botanicals-grid">
          {/* LEFT */}
          <div className="botanicals-left">
            <img
              src="/images/HomePage/botanicals/botanicals.png"
              alt="botanicals-image"
              className="botanicals-image"
            />

            <div className="botanicals-left-content">
              <h2 className="botanicals-title font-serif">
                <span>
                  <em>{t('botanicals.title1')}</em>
                </span>

                <span>
                  <em>{t('botanicals.title2')}</em> {t('botanicals.title2Accent')}
                </span>

                <span>{t('botanicals.title3')}</span>

                <span>
                  <em>{t('botanicals.title4')}</em> {t('botanicals.title4Accent')}
                </span>

                <span>{t('botanicals.title5')}</span>
              </h2>

              <Link to={`${langPrefix}/story`} className="botanicals-button">
                {t('botanicals.button')}
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="botanicals-right">
            <BotanicalsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Botanicals;
