import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import AnimatedText from '../../../components/AnimatedText/AnimatedText';

import type { NewsItem, NewsContentPart } from '../../../data/news';

import './NewsDetail.css';

interface NewsDetailProps {
  article: NewsItem;
  previousArticle: NewsItem | null;
  nextArticle: NewsItem | null;
  langPrefix: string;
}

const NewsDetail = ({ article, previousArticle, nextArticle, langPrefix }: NewsDetailProps) => {
  const { t } = useTranslation();

  const getContentText = (key: string, defaultValue: string) => {
    return t(`newsDetail.content.${article.id}.${key}`, {
      defaultValue,
    });
  };

  const renderRichPart = (part: NewsContentPart, blockIndex: number, partIndex: number) => {
    const text = getContentText(`${blockIndex}.parts.${partIndex}`, part.text);

    if (part.href) {
      return (
        <a key={partIndex} href={part.href} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      );
    }

    if (part.italic) {
      return <em key={partIndex}>{text}</em>;
    }

    return <span key={partIndex}>{text}</span>;
  };

  const contentAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  };

  return (
    <article className="news-detail">
      {/* HEADER */}
      <header className="news-detail-header">
        <div className="mx-auto max-w-8xl px-4 lg:px-8">
          {/* DATE */}
          <motion.p
            className="news-detail-date"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <AnimatedText>
              {article.date.day} {t(`news.months.${article.date.month}`)} {article.date.year}
            </AnimatedText>
          </motion.p>

          {/* TITLE */}
          <motion.h1
            className="news-detail-title font-serif"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <AnimatedText>{t(article.titleKey)}</AnimatedText>
          </motion.h1>
        </div>
      </header>

      {/* HERO */}
      <motion.div
        className="news-detail-hero max-w-8xl px-4 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.1,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}>
        <picture>
          {article.heroMobileImage && (
            <source media="(max-width: 768px)" srcSet={article.heroMobileImage} />
          )}

          <img
            src={article.heroImage}
            alt={t(article.titleKey)}
            className="news-detail-hero-image"
          />
        </picture>
      </motion.div>

      {/* ARTICLE CONTENT */}
      <div className="news-detail-body max-w-8xl px-4 lg:px-8">
        {article.content.map((block, index) => {
          switch (block.type) {
            case 'heading':
              return (
                <motion.h2
                  key={index}
                  className="news-detail-subtitle font-serif"
                  {...contentAnimation}>
                  <AnimatedText>{getContentText(`${index}.text`, block.text)}</AnimatedText>
                </motion.h2>
              );

            case 'paragraph':
              return (
                <motion.p key={index} {...contentAnimation}>
                  <AnimatedText>{getContentText(`${index}.text`, block.text)}</AnimatedText>
                </motion.p>
              );

            case 'richParagraph':
              return (
                <motion.p key={index} {...contentAnimation}>
                  <AnimatedText>
                    {block.parts.map((part, partIndex) => renderRichPart(part, index, partIndex))}
                  </AnimatedText>
                </motion.p>
              );

            case 'list':
              return (
                <motion.ul key={index} {...contentAnimation}>
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <AnimatedText>
                        {getContentText(`${index}.items.${itemIndex}`, item)}
                      </AnimatedText>
                    </li>
                  ))}
                </motion.ul>
              );

            default:
              return null;
          }
        })}
      </div>

      {/* PREVIOUS / NEXT */}
      <nav
        className="news-detail-navigation max-w-8xl px-4 lg:px-8"
        aria-label="Article navigation">
        <motion.div
          className="news-detail-navigation-content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}>
          <div className="news-detail-navigation-inner">
            {previousArticle ? (
              <Link
                to={`${langPrefix}/news/${previousArticle.id}`}
                className="news-detail-navigation-link news-detail-navigation-prev">
                <span>← Previous</span>

                <h3>
                  <AnimatedText>{t(previousArticle.titleKey)}</AnimatedText>
                </h3>
              </Link>
            ) : (
              <div />
            )}

            {nextArticle ? (
              <Link
                to={`${langPrefix}/news/${nextArticle.id}`}
                className="news-detail-navigation-link news-detail-navigation-next">
                <span>Next →</span>

                <h3>
                  <AnimatedText>{t(nextArticle.titleKey)}</AnimatedText>
                </h3>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </motion.div>

        {/* BACK TO NEWS */}
        <motion.div
          className="news-detail-back"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}>
          <Link to={`${langPrefix}/news`} className="news-detail-back-button">
            <AnimatedText>{t('newsNotFound.button')}</AnimatedText>
          </Link>
        </motion.div>
      </nav>
    </article>
  );
};

export default NewsDetail;
