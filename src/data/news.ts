export type NewsItem = {
  id: string;
  date: {
    day: string;
    month: string;
    year: string;
  };
  titleKey: string;
  textKey: string;
  image: string;
};

export const news: NewsItem[] = [
  {
    id: 'wine-paris-2026',
    date: {
      day: '04',
      month: 'February',
      year: '2026',
    },
    titleKey: 'news.articles.wineParis2026.title',
    textKey: 'news.articles.wineParis2026.text',
    image: '/images/HomePage/news/wine-paris-2026.png',
  },
  {
    id: 'merry-christmas-from-monte-carlo-vermouth',
    date: {
      day: '24',
      month: 'December',
      year: '2025',
    },
    titleKey: 'news.articles.merryChristmas.title',
    textKey: 'news.articles.merryChristmas.text',
    image: '/images/HomePage/news/christmas.png',
  },
  {
    id: 'from-bitter-tincture-to-sweet-trendsetter',
    date: {
      day: '14',
      month: 'November',
      year: '2025',
    },
    titleKey: 'news.articles.bitterTincture.title',
    textKey: 'news.articles.bitterTincture.text',
    image: '/images/HomePage/news/from-bitter.png',
  },
  {
    id: 'monte-carlo-vermouth-available-online',
    date: {
      day: '01',
      month: 'December',
      year: '2023',
    },
    titleKey: 'news.articles.availableOnline.title',
    textKey: 'news.articles.availableOnline.text',
    image: '/images/HomePage/news/available-online.png',
  },
  {
    id: 'chalet-monte-carlo-vermouth',
    date: {
      day: '16',
      month: 'November',
      year: '2023',
    },
    titleKey: 'news.articles.chalet.title',
    textKey: 'news.articles.chalet.text',
    image: '/images/HomePage/news/chalet.png',
  },
  {
    id: 'monte-carlo-vermouth-living-wall',
    date: {
      day: '05',
      month: 'September',
      year: '2023',
    },
    titleKey: 'news.articles.livingWall.title',
    textKey: 'news.articles.livingWall.text',
    image: '/images/HomePage/news/living-wall.png',
  },
];
