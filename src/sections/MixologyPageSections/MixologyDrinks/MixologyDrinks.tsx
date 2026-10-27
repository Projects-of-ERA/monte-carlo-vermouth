import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { cocktails } from '../../../data/cocktails';
import './MixologyDrinks.css';

const MixologyDrinks = () => {
  const { t, i18n } = useTranslation();

  const [openDrinks, setOpenDrinks] = useState<string[]>([]);

  const toggleDrink = (id: string) => {
    setOpenDrinks((prev) =>
      prev.includes(id) ? prev.filter((drinkId) => drinkId !== id) : [...prev, id],
    );
  };

  return (
    <section className="mixology-drinks">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        {/* HEADER */}
        <div className="mixology-drinks-header">
          <h2 className="mixology-drinks-title font-serif">
            <span>
              <em>{t('mixologyDrinks.title1')}</em>
              {i18n.language === 'fr' ? '' : ' '}
              {t('mixologyDrinks.title1Accent')}
            </span>

            <span>
              <em>{t('mixologyDrinks.title2')}</em> {t('mixologyDrinks.title2Accent')}
            </span>
          </h2>
        </div>

        {/* DRINKS CONTENT */}
        <div className="mixology-drinks-list">
          {cocktails.map((cocktail, index) => {
            const isOpen = openDrinks.includes(cocktail.id);
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={cocktail.id}
                className={`mixology-drink ${isReversed ? 'is-reversed' : ''} ${
                  isOpen ? 'is-open' : ''
                }`}>
                {/* TOGGLE */}
                <button
                  type="button"
                  className="mixology-drink-toggle"
                  aria-expanded={isOpen}
                  aria-controls={`cocktail-${cocktail.id}`}
                  onClick={() => toggleDrink(cocktail.id)}>
                  <span className="mixology-drink-name font-serif">{cocktail.title}</span>

                  <svg
                    className="mixology-drink-chevron"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    aria-hidden="true">
                    <path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z" />
                  </svg>
                </button>

                {/* EXPANDABLE CONTENT */}
                <div
                  id={`cocktail-${cocktail.id}`}
                  className="mixology-drink-panel"
                  inert={!isOpen}>
                  <div className="mixology-drink-panel-inner">
                    <div className="mixology-drink-grid">
                      {/* TEXT */}
                      <div className="mixology-drink-content">
                        <p className="mixology-drink-description">{t(cocktail.descriptionKey)}</p>

                        {/* RECIPE */}
                        <div className="mixology-drink-info">
                          <h3 className="mixology-drink-info-title">
                            {' '}
                            {t('mixologyDrinks.recipeTitle')}
                          </h3>

                          <ul className="mixology-drink-recipe">
                            {cocktail.recipeKeys.map((ingredientKey) => (
                              <li key={ingredientKey}>{t(ingredientKey)}</li>
                            ))}
                          </ul>
                        </div>

                        {/* METHOD */}
                        <div className="mixology-drink-info">
                          <h3 className="mixology-drink-info-title">
                            {t('mixologyDrinks.methodTitle')}
                          </h3>

                          <p className="mixology-drink-method">{t(cocktail.methodKey)}</p>
                        </div>
                      </div>

                      {/* IMAGE */}
                      <div className="mixology-drink-image-wrapper">
                        <img
                          src={cocktail.image}
                          alt={cocktail.title}
                          className="mixology-drink-image"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MixologyDrinks;
