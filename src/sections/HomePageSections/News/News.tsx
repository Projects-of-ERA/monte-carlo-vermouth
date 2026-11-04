// import { useRef, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { Link, useLocation } from 'react-router-dom';

// import { news } from '../../../data/news';
// import './News.css';

// const News = () => {
//   const { t } = useTranslation();
//   const { pathname } = useLocation();

//   const language = pathname.split('/')[1];
//   const langPrefix = language === 'fr' || language === 'es' ? `/${language}` : '';

//   const [showAll, setShowAll] = useState(false);
//   const sectionRef = useRef<HTMLElement>(null);

//   const visibleNews = showAll ? news : news.slice(0, 3);

//   const handleToggleNews = () => {
//     if (showAll) {
//       setShowAll(false);

//       requestAnimationFrame(() => {
//         sectionRef.current?.scrollIntoView({
//           behavior: 'smooth',
//           block: 'start',
//         });
//       });

//       return;
//     }

//     setShowAll(true);
//   };

//   return (
//     <section ref={sectionRef} className="news-section">
//       <div className="mx-auto max-w-8xl px-4 lg:px-8">
//         <div className="news-list">
//           {visibleNews.map((item) => (
//             <Link key={item.id} to={`${langPrefix}/news/${item.id}`} className="news-item">
//               {' '}
//               <div className="news-date">
//                 {item.date.day} {t(`news.months.${item.date.month}`)} {item.date.year}
//               </div>
//               <div className="news-content">
//                 <div className="news-copy">
//                   <h2 className="news-title font-serif">{t(item.titleKey)}</h2>

//                   <p className="news-text">{t(item.textKey)}</p>
//                 </div>

//                 <div className="news-image-wrapper">
//                   <img src={item.image} alt={t(item.titleKey)} className="news-image" />
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {news.length > 3 && (
//           <button type="button" className="news-toggle-button" onClick={handleToggleNews}>
//             {showAll ? t('news.showLess') : t('news.showMore')}
//           </button>
//         )}
//       </div>
//     </section>
//   );
// };

// export default News;

import { memo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';
import { news } from '../../../data/news';

import './News.css';

const MotionLink = motion.create(Link);

type NewsItemData = (typeof news)[number];

interface NewsItemProps {
  item: NewsItemData;
  langPrefix: string;
  index: number;
}

const NewsItem = memo(({ item, langPrefix, index }: NewsItemProps) => {
  const { t } = useTranslation();

  return (
    <MotionLink
      to={`${langPrefix}/news/${item.id}`}
      className="news-item"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.9,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}>
      <div className="news-date">
        {item.date.day} <AnimatedText>{t(`news.months.${item.date.month}`)}</AnimatedText>{' '}
        {item.date.year}
      </div>

      <div className="news-content">
        <div className="news-copy">
          <h2 className="news-title font-serif">
            <AnimatedText>{t(item.titleKey)}</AnimatedText>
          </h2>

          <p className="news-text">
            <AnimatedText>{t(item.textKey)}</AnimatedText>
          </p>
        </div>

        <div className="news-image-wrapper">
          <img src={item.image} alt={t(item.titleKey)} className="news-image" />
        </div>
      </div>
    </MotionLink>
  );
});

NewsItem.displayName = 'NewsItem';

const News = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const language = pathname.split('/')[1];
  const langPrefix = language === 'fr' || language === 'es' ? `/${language}` : '';

  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const initialNews = news.slice(0, 3);
  const extraNews = news.slice(3);

  const handleToggleNews = () => {
    if (showAll) {
      setShowAll(false);

      requestAnimationFrame(() => {
        sectionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });

      return;
    }
    setShowAll(true);
  };

  return (
    <section ref={sectionRef} className="news-section">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <div className="news-list">
          {initialNews.map((item, index) => (
            <NewsItem key={item.id} item={item} langPrefix={langPrefix} index={index} />
          ))}

          {showAll &&
            extraNews.map((item, index) => (
              <NewsItem key={item.id} item={item} langPrefix={langPrefix} index={index} />
            ))}
        </div>

        {news.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <button type="button" className="news-toggle-button" onClick={handleToggleNews}>
              <AnimatedText>{showAll ? t('news.showLess') : t('news.showMore')}</AnimatedText>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default News;
