import { useTranslation } from 'react-i18next';

import './VermouthCulture.css';

const VermouthCulture = () => {
  const { t } = useTranslation();

  return (
    <section className="vermouth-culture">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        {/* HEADER */}
        <div className="vermouth-culture-header">
          <h2 className="vermouth-culture-title font-serif">
            <span>
              <em>{t('vermouthCulture.title1')}</em>
            </span>

            <span>{t('vermouthCulture.title2')}</span>

            <span>
              <em>{t('vermouthCulture.title3')}</em> {t('vermouthCulture.title3Accent')}
            </span>
          </h2>
        </div>

        {/* CONTENT */}
        <div className="vermouth-culture-grid">
          {/* LEFT — TEXT */}
          <div className="vermouth-culture-text">
            <p>{t('vermouthCulture.description1')}</p>

            <p>{t('vermouthCulture.description2')}</p>

            <p>{t('vermouthCulture.description3')}</p>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="vermouth-culture-image-wrapper">
            <img
              src="/images/VermouthPage/culture/monaco.png"
              alt="Historic architecture of Monaco with a grand staircase and palm trees"
              className="vermouth-culture-image"
              loading="lazy"
            />
          </div>
        </div>

        {/* CONTENT SECOND PART */}
        <div className="vermouth-culture-grid vermouth-culture-grid-reverse">
          {/* LEFT — IMAGE */}
          <div className="vermouth-culture-image-wrapper">
            <img
              src="/images/VermouthPage/culture/craft.png"
              alt="Monte Carlo Vermouth Rosé bottle in a wicker basket"
              className="vermouth-culture-image"
              loading="lazy"
            />
          </div>

          {/* RIGHT — TEXT */}
          <div className="vermouth-culture-text">
            <p>{t('vermouthCulture.description4')}</p>

            <p>{t('vermouthCulture.description5')}</p>

            <p>{t('vermouthCulture.description6')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VermouthCulture;
