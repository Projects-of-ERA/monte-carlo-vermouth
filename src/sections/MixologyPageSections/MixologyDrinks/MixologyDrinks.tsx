import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';
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
    <section className="mixology-drinks overflow-hidden">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        {/* HEADER */}
        <div className="mixology-drinks-header">
          <motion.h2
            className="mixology-drinks-title font-serif"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <span>
              <AnimatedText>
                <em>{t('mixologyDrinks.title1')}</em>
                {i18n.language === 'fr' ? '' : ' '}
                {t('mixologyDrinks.title1Accent')}
              </AnimatedText>
            </span>

            <span>
              <AnimatedText>
                <em>{t('mixologyDrinks.title2')}</em> {t('mixologyDrinks.title2Accent')}
              </AnimatedText>
            </span>
          </motion.h2>
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
                <motion.button
                  type="button"
                  className="mixology-drink-toggle"
                  aria-expanded={isOpen}
                  aria-controls={`cocktail-${cocktail.id}`}
                  onClick={() => toggleDrink(cocktail.id)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.85,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}>
                  <span className="mixology-drink-name font-serif">{cocktail.title}</span>

                  <svg
                    className="mixology-drink-chevron"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    aria-hidden="true">
                    <path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 266.1 105.3 278.7L297.3 470.7z" />
                  </svg>
                </motion.button>

                {/* EXPANDABLE CONTENT */}
                <div
                  id={`cocktail-${cocktail.id}`}
                  className="mixology-drink-panel"
                  inert={!isOpen}>
                  <div className="mixology-drink-panel-inner">
                    <div className="mixology-drink-grid">
                      {/* TEXT */}
                      <motion.div
                        className="mixology-drink-content"
                        initial={false}
                        animate={{
                          opacity: isOpen ? 1 : 0,
                          y: isOpen ? 0 : 20,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: isOpen ? 0.15 : 0,
                          ease: [0.22, 1, 0.36, 1],
                        }}>
                        <p className="mixology-drink-description">
                          <AnimatedText>{t(cocktail.descriptionKey)}</AnimatedText>
                        </p>

                        {/* RECIPE */}
                        <div className="mixology-drink-info">
                          <h3 className="mixology-drink-info-title">
                            <AnimatedText>{t('mixologyDrinks.recipeTitle')}</AnimatedText>
                          </h3>

                          <ul className="mixology-drink-recipe">
                            {cocktail.recipeKeys.map((ingredientKey) => (
                              <li key={ingredientKey}>
                                <AnimatedText>{t(ingredientKey)}</AnimatedText>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* METHOD */}
                        <div className="mixology-drink-info">
                          <h3 className="mixology-drink-info-title">
                            <AnimatedText>{t('mixologyDrinks.methodTitle')}</AnimatedText>
                          </h3>

                          <p className="mixology-drink-method">
                            <AnimatedText>{t(cocktail.methodKey)}</AnimatedText>
                          </p>
                        </div>
                      </motion.div>

                      {/* IMAGE */}
                      <motion.div
                        className="mixology-drink-image-wrapper"
                        initial={false}
                        animate={{
                          opacity: isOpen ? 1 : 0,
                          scale: isOpen ? 1 : 0.96,
                        }}
                        transition={{
                          duration: 0.7,
                          delay: isOpen ? 0.2 : 0,
                          ease: [0.22, 1, 0.36, 1],
                        }}>
                        <img
                          src={cocktail.image}
                          alt={cocktail.title}
                          className="mixology-drink-image"
                          loading="lazy"
                        />
                      </motion.div>
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
