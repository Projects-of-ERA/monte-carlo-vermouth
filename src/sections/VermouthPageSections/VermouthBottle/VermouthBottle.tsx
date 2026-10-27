import { useTranslation } from 'react-i18next';

import './VermouthBottle.css';

const VermouthBottle = () => {
  const { t } = useTranslation();

  return (
    <section className="vermouth-bottle">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        {/* HEADER */}
        <div className="vermouth-bottle-header">
          <h2 className="vermouth-bottle-title font-serif">
            <span>
              <em>{t('vermouthBottle.title1')}</em> {t('vermouthBottle.title1Accent')}
            </span>

            <span>
              <em>{t('vermouthBottle.title2')}</em>
            </span>
          </h2>
        </div>

        {/* CONTENT */}
        <div className="vermouth-bottle-grid">
          {/* LEFT — TEXT AND DETAILS */}
          <div className="vermouth-bottle-content">
            <div className="vermouth-bottle-text">
              <p className="vermouth-bottle-intro">{t('vermouthBottle.intro')}</p>

              <p>
                <strong>{t('vermouthBottle.closureTitle')}</strong>{' '}
                {t('vermouthBottle.closureDescription')}
              </p>

              <p>
                <strong>{t('vermouthBottle.topLabelTitle')}</strong>{' '}
                {t('vermouthBottle.topLabelDescription')}
              </p>

              <p>
                <strong>{t('vermouthBottle.centralLabelTitle')}</strong>{' '}
                {t('vermouthBottle.centralLabelDescription')}
              </p>
            </div>

            {/* DETAIL IMAGES */}
            <div className="vermouth-bottle-details">
              <div className="vermouth-bottle-detail-image">
                <img
                  src="/images/VermouthPage/bottle/closure.webp"
                  alt="Rose gold medallion on the Monte Carlo Vermouth bottle closure"
                  loading="lazy"
                />
              </div>

              <div className="vermouth-bottle-detail-image">
                <img
                  src="/images/VermouthPage/bottle/label.webp"
                  alt="Decorative label on the Monte Carlo Vermouth bottle"
                  loading="lazy"
                />
              </div>

              <div className="vermouth-bottle-detail-image vermouth-bottle-detail-wide">
                <img
                  src="/images/VermouthPage/bottle/base.webp"
                  alt="Engraved glass base of the Monte Carlo Vermouth bottle"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — MAIN IMAGE */}
          <div className="vermouth-bottle-image-wrapper">
            <img
              src="/images/VermouthPage/bottle/bottle.png"
              alt="Monte Carlo Vermouth Rosé crystal bottle"
              className="vermouth-bottle-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VermouthBottle;
