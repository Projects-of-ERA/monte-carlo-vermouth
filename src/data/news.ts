export type NewsItem = {
  id: string;
  date: {
    day: string;
    month: string;
    year: string;
  };
  title: string;
  text: string;
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
    title: 'Meet Monte Carlo Vermouth at Wine Paris 2026',
    text: 'From February 9 to 11, Paris once again becomes the global meeting point for the wine and spirits world.',
    image: '/images/HomePage/news/wine-paris-2026.png',
  },
  {
    id: 'merry-christmas-from-monte-carlo-vermouth',
    date: {
      day: '24',
      month: 'December',
      year: '2025',
    },
    title: 'Merry Christmas from Monte Carlo Vermouth',
    text: 'It’s almost Christmas and we would like to thank you all for learning about our product, taking the first sip and finally — falling in love with it! Let’s pour our Vermouth into a glass and wish each other a Merry Christmas — cin-cin!',
    image: '/images/HomePage/news/christmas.png',
  },
  {
    id: 'from-bitter-tincture-to-sweet-trendsetter',
    date: {
      day: '14',
      month: 'November',
      year: '2025',
    },
    title: 'From Bitter Tincture To Sweet Trendsetter',
    text: 'The basis of what vermouth is goes back to ancient times. However, the qualities for which it has been valued has changed significantly.',
    image: '/images/HomePage/news/from-bitter.png',
  },
  {
    id: 'monte-carlo-vermouth-available-online',
    date: {
      day: '01',
      month: 'December',
      year: '2023',
    },
    title: 'Monte Carlo Vermouth Available Online',
    text: 'The moment has finally arrived! We’ve opened online sales of Monte Carlo Vermouth in selected countries – a product created to embody the spirit of Monaco, as well as its lifestyle and refined taste.',
    image: '/images/HomePage/news/available-online.png',
  },
  {
    id: 'chalet-monte-carlo-vermouth',
    date: {
      day: '16',
      month: 'November',
      year: '2023',
    },
    title: 'Chalet Monte Carlo Vermouth',
    text: 'The magic of Christmas comes to Monaco. On this occasion, we are delighted to announce the opening of Monte Carlo Vermouth Chalet.',
    image: '/images/HomePage/news/chalet.png',
  },
  {
    id: 'monte-carlo-vermouth-living-wall',
    date: {
      day: '05',
      month: 'September',
      year: '2023',
    },
    title: 'Monte Carlo Vermouth Living Wall',
    text: 'On September 3rd, we spent a delightful day at the party hosted by Club La Vigie Monte-Carlo, where we proudly presented our living wall.',
    image: '/images/HomePage/news/living-wall.png',
  },
];
