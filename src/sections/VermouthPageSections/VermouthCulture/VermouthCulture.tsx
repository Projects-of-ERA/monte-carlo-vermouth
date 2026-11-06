import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';

import './VermouthCulture.css';

const VermouthCulture = () => {
  const { t } = useTranslation();

  return (
    <section className="vermouth-culture overflow-hidden">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        {/* HEADER */}
        <div className="vermouth-culture-header">
          <motion.h2
            className="vermouth-culture-title font-serif"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <span>
              <AnimatedText>
                <em>{t('vermouthCulture.title1')}</em>
              </AnimatedText>
            </span>

            <span>
              <AnimatedText>{t('vermouthCulture.title2')}</AnimatedText>
            </span>

            <span>
              <AnimatedText>
                <em>{t('vermouthCulture.title3')}</em> {t('vermouthCulture.title3Accent')}
              </AnimatedText>
            </span>
          </motion.h2>
        </div>

        {/* CONTENT FIRST PART */}
        <div className="vermouth-culture-grid">
          {/* LEFT — TEXT */}
          <motion.div
            className="vermouth-culture-text"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <p>
              <AnimatedText>{t('vermouthCulture.description1')}</AnimatedText>
            </p>

            <p>
              <AnimatedText>{t('vermouthCulture.description2')}</AnimatedText>
            </p>

            <p>
              <AnimatedText>{t('vermouthCulture.description3')}</AnimatedText>
            </p>
          </motion.div>

          {/* RIGHT — IMAGE */}
          <motion.div
            className="vermouth-culture-image-wrapper"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <img
              src="/images/VermouthPage/culture/monaco.png"
              alt="Historic architecture of Monaco with a grand staircase and palm trees"
              className="vermouth-culture-image"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* CONTENT SECOND PART */}
        <div className="vermouth-culture-grid vermouth-culture-grid-reverse">
          {/* LEFT — IMAGE */}
          <motion.div
            className="vermouth-culture-image-wrapper"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <img
              src="/images/VermouthPage/culture/craft.png"
              alt="Monte Carlo Vermouth Rosé bottle in a wicker basket"
              className="vermouth-culture-image"
              loading="lazy"
            />
          </motion.div>

          {/* RIGHT — TEXT */}
          <motion.div
            className="vermouth-culture-text"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <p>
              <AnimatedText>{t('vermouthCulture.description4')}</AnimatedText>
            </p>

            <p>
              <AnimatedText>{t('vermouthCulture.description5')}</AnimatedText>
            </p>

            <p>
              <AnimatedText>{t('vermouthCulture.description6')}</AnimatedText>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VermouthCulture;
