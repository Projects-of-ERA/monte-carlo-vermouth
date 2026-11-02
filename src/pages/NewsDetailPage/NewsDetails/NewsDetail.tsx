import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { NewsItem, NewsContentPart } from '../../../data/news';

import './NewsDetail.css';

interface NewsDetailProps {
  article: NewsItem;
  previousArticle: NewsItem | null;
  nextArticle: NewsItem | null;
  langPrefix: string;
}

// const renderRichPart = (part: NewsContentPart, index: number) => {
//   if (part.href) {
//     return (
//       <a key={index} href={part.href} target="_blank" rel="noopener noreferrer">
//         {part.text}
//       </a>
//     );
//   }

//   if (part.italic) {
//     return <em key={index}>{part.text}</em>;
//   }

//   return <span key={index}>{part.text}</span>;
// };

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

  return (
    <article className="news-detail">
      {/* HEADER */}
      <header className="news-detail-header">
        <div className="mx-auto max-w-8xl px-4 lg:px-8">
          <p className="news-detail-date">
            {article.date.day} {t(`news.months.${article.date.month}`)} {article.date.year}
          </p>

          <h1 className="news-detail-title font-serif">{t(article.titleKey)}</h1>
        </div>
      </header>

      {/* HERO */}
      <div className="news-detail-hero max-w-8xl px-4 lg:px-8">
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
      </div>

      {/* ARTICLE CONTENT */}
      <div className="news-detail-body max-w-8xl px-4 lg:px-8">
        {article.content.map((block, index) => {
          switch (block.type) {
            case 'heading':
              return (
                <h2 key={index} className="news-detail-subtitle font-serif">
                  {getContentText(`${index}.text`, block.text)}
                </h2>
              );

            case 'paragraph':
              return <p key={index}>{getContentText(`${index}.text`, block.text)}</p>;

            case 'richParagraph':
              return (
                <p key={index}>
                  {block.parts.map((part, partIndex) => renderRichPart(part, index, partIndex))}
                </p>
              );

            case 'list':
              return (
                <ul key={index}>
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{getContentText(`${index}.items.${itemIndex}`, item)}</li>
                  ))}
                </ul>
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
        <div className="news-detail-navigation-content">
          {' '}
          <div className="news-detail-navigation-inner">
            {previousArticle ? (
              <Link
                to={`${langPrefix}/news/${previousArticle.id}`}
                className="news-detail-navigation-link news-detail-navigation-prev">
                <span>← Previous</span>

                <h3>{t(previousArticle.titleKey)}</h3>
              </Link>
            ) : (
              <div />
            )}

            {nextArticle ? (
              <Link
                to={`${langPrefix}/news/${nextArticle.id}`}
                className="news-detail-navigation-link news-detail-navigation-next">
                <span>Next →</span>

                <h3>{t(nextArticle.titleKey)}</h3>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>

        {/* BACK TO NEWS */}
        <div className="news-detail-back">
          <Link to={`${langPrefix}/news`} className="news-detail-back-button">
            {t('newsNotFound.button')}
          </Link>
        </div>
      </nav>
    </article>
  );
};

export default NewsDetail;
