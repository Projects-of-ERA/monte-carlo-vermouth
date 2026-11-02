import { Link, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { news } from '../../data/news';

import './NewsDetails/NewsDetail.css';
import NewsDetail from './NewsDetails/NewsDetail';

const NewsDetailPage = () => {
  const { newsId } = useParams();
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const language = pathname.split('/')[1];
  const langPrefix = language === 'fr' || language === 'es' ? `/${language}` : '';

  const currentIndex = news.findIndex((item) => item.id === newsId);
  const article = news[currentIndex];

  if (!article) {
    return (
      <main className="news-not-found">
        <div className="news-not-found-content">
          <h1 className="news-not-found-title font-serif">{t('newsNotFound.title')}</h1>

          <Link to={`${langPrefix}/news`} className="news-not-found-button">
            {t('newsNotFound.button')}
          </Link>
        </div>
      </main>
    );
  }

  const previousArticle = news[currentIndex - 1] ?? null;
  const nextArticle = news[currentIndex + 1] ?? null;

  return (
    <main>
      <NewsDetail
        key={article.id}
        article={article}
        previousArticle={previousArticle}
        nextArticle={nextArticle}
        langPrefix={langPrefix}
      />
    </main>
  );
};

export default NewsDetailPage;
