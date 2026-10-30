// import { useTranslation } from 'react-i18next';
// import { varietals } from '../../../data/varietals';

// import './Varietals.css';

// const Varietals = () => {
//   const { t } = useTranslation();

//   return (
//     <section className="varietals">
//       <div className="mx-auto max-w-8xl px-4 lg:px-8">
//         <h2 className="varietals-heading font-serif">{t('varietals.title')}</h2>

//         <div className="varietals-grid">
//           {varietals.map((varietal) => (
//             <article key={varietal.id} className="varietals-card">
//               <div className="varietals-image-wrapper">
//                 <img src={varietal.image} alt={varietal.alt} className="varietals-image" />
//               </div>

//               <div className="varietals-title">
//                 <h3 className="font-serif">{varietal.name}</h3>

//                 <span className="font-serif">{t(varietal.typeKey)}</span>
//               </div>

//               <a href="#" className="varietals-button" onClick={(event) => event.preventDefault()}>
//                 {t('varietals.button')}
//               </a>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Varietals;

import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { varietals } from '../../../data/varietals';

import './Varietals.css';

const Varietals = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const language = pathname.split('/')[1];
  const langPrefix = language === 'fr' || language === 'es' ? `/${language}` : '';

  return (
    <section className="varietals">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <h2 className="varietals-heading font-serif">{t('varietals.title')}</h2>

        <div className="varietals-grid">
          {varietals.map((varietal) => {
            const productUrl = `${langPrefix}/products/${varietal.slug}`;

            return (
              <Link
                key={varietal.id}
                to={productUrl}
                className="varietals-card"
                aria-label={`${varietal.name} ${t(varietal.typeKey)}`}>
                {/* IMAGE */}
                <div className="varietals-image-wrapper">
                  <img src={varietal.image} alt={varietal.alt} className="varietals-image" />
                </div>

                {/* TITLE */}
                <div className="varietals-title">
                  <h3 className="font-serif">{varietal.name}</h3>

                  <span className="font-serif">{t(varietal.typeKey)}</span>
                </div>

                {/* BUTTON */}
                <span className="varietals-button">{t('varietals.button')}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Varietals;
