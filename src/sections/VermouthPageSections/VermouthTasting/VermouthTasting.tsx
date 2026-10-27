import { useTranslation } from 'react-i18next';

import './VermouthTasting.css';

const VermouthTasting = () => {
  const { t } = useTranslation();

  return (
    <section className="vermouth-tasting">
      {/* HEADER */}
      <div className="vermouth-tasting-header">
        <div className="mx-auto max-w-8xl px-4 lg:px-8">
          <h2 className="vermouth-tasting-title font-serif">
            <span>{t('vermouthTasting.title1')}</span>
            <span>
              <em>{t('vermouthTasting.title2')}</em>
            </span>
          </h2>

          <p className="vermouth-tasting-subtitle">{t('vermouthTasting.subtitle')}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="vermouth-tasting-content">
        {/* BACKGROUND */}
        <div className="vermouth-tasting-background">
          <img
            src="/images/VermouthPage/tasting/tasting.png"
            alt=""
            className="vermouth-tasting-image"
            loading="lazy"
          />
        </div>

        {/* OVERLAY */}
        <div className="vermouth-tasting-overlay" />

        <div className="vermouth-tasting-container mx-auto max-w-8xl px-4 lg:px-8">
          <div className="vermouth-tasting-text">
            <p className="vermouth-tasting-description">{t('vermouthTasting.description')}</p>

            <div className="vermouth-tasting-details">
              <div className="vermouth-tasting-detail">
                <h3>{t('vermouthTasting.eyeTitle')}</h3>
                <p>{t('vermouthTasting.eyeDescription')}</p>
              </div>

              <div className="vermouth-tasting-detail">
                <h3>{t('vermouthTasting.noseTitle')}</h3>
                <p>{t('vermouthTasting.noseDescription')}</p>
              </div>

              <div className="vermouth-tasting-detail">
                <h3>{t('vermouthTasting.palateTitle')}</h3>
                <p>{t('vermouthTasting.palateDescription')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VermouthTasting;
