// export type NewsItem = {
//   id: string;
//   date: {
//     day: string;
//     month: string;
//     year: string;
//   };
//   titleKey: string;
//   textKey: string;
//   image: string;
// };

// export const news: NewsItem[] = [
//   {
//     id: 'wine-paris-2026',
//     date: {
//       day: '04',
//       month: 'February',
//       year: '2026',
//     },
//     titleKey: 'news.articles.wineParis2026.title',
//     textKey: 'news.articles.wineParis2026.text',
//     image: '/images/HomePage/news/wine-paris-2026.png',
//   },
//   {
//     id: 'merry-christmas-from-monte-carlo-vermouth',
//     date: {
//       day: '24',
//       month: 'December',
//       year: '2025',
//     },
//     titleKey: 'news.articles.merryChristmas.title',
//     textKey: 'news.articles.merryChristmas.text',
//     image: '/images/HomePage/news/christmas.png',
//   },
//   {
//     id: 'from-bitter-tincture-to-sweet-trendsetter',
//     date: {
//       day: '14',
//       month: 'November',
//       year: '2025',
//     },
//     titleKey: 'news.articles.bitterTincture.title',
//     textKey: 'news.articles.bitterTincture.text',
//     image: '/images/HomePage/news/from-bitter.png',
//   },
//   {
//     id: 'monte-carlo-vermouth-available-online',
//     date: {
//       day: '01',
//       month: 'December',
//       year: '2023',
//     },
//     titleKey: 'news.articles.availableOnline.title',
//     textKey: 'news.articles.availableOnline.text',
//     image: '/images/HomePage/news/available-online.png',
//   },
//   {
//     id: 'chalet-monte-carlo-vermouth',
//     date: {
//       day: '16',
//       month: 'November',
//       year: '2023',
//     },
//     titleKey: 'news.articles.chalet.title',
//     textKey: 'news.articles.chalet.text',
//     image: '/images/HomePage/news/chalet.png',
//   },
//   {
//     id: 'monte-carlo-vermouth-living-wall',
//     date: {
//       day: '05',
//       month: 'September',
//       year: '2023',
//     },
//     titleKey: 'news.articles.livingWall.title',
//     textKey: 'news.articles.livingWall.text',
//     image: '/images/HomePage/news/living-wall.png',
//   },
// ];

export type NewsContentPart = {
  text: string;
  href?: string;
  italic?: boolean;
};

export type NewsContentBlock =
  | {
      type: 'paragraph';
      text: string;
    }
  | {
      type: 'richParagraph';
      parts: NewsContentPart[];
    }
  | {
      type: 'heading';
      text: string;
    }
  | {
      type: 'list';
      items: string[];
    };

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
  heroImage: string;
  heroMobileImage?: string;
  content: NewsContentBlock[];
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
    heroImage: '/images/NewsDetailPage/wine-paris-2026/hero.png',
    heroMobileImage: '/images/NewsDetailPage/wine-paris-2026/hero-mob.png',
    content: [
      {
        type: 'paragraph',
        text: 'From February 9 to 11, Paris once again becomes the global meeting point for the wine and spirits world. Wine Paris is one of the most important international trade fairs, bringing together producers, distributors, sommeliers, buyers, and industry professionals from across the globe.',
      },
      {
        type: 'paragraph',
        text: 'This year’s edition promises to be especially dynamic, with an even stronger international presence, a growing focus on premium positioning, terroir-driven wines, and refined spirits, as well as a rich program of tastings, conferences, and professional encounters.',
      },
      {
        type: 'heading',
        text: 'Discover Our Selection',
      },
      {
        type: 'paragraph',
        text: 'We’ll be delighted to welcome you at Stand A011, Hall 5.1, where we will present a curated selection from our portfolio:',
      },
      {
        type: 'list',
        items: [
          'Burgundy wines, showcasing elegance, precision, and the expression of great terroirs',
          'New Zealand wines, known for their purity, vibrancy, and contemporary style',
          'And, of course, our star: Monte Carlo Vermouth, a refined expression of Mediterranean elegance and savoir-faire',
        ],
      },
      {
        type: 'richParagraph',
        parts: [
          {
            text: 'Our stand will be shared with our Piedmontese friends from ',
          },
          {
            text: 'Scarpa',
            href: 'http://scarpawine.com/',
          },
          {
            text: ', allowing visitors to explore a dialogue between classic Italian heritage and modern craftsmanship.',
          },
        ],
      },
      {
        type: 'heading',
        text: 'Why Wine Paris Matters',
      },
      {
        type: 'paragraph',
        text: 'Wine Paris has become a key platform for shaping the future of the industry. It is not just a showcase, but a place where trends are discussed, partnerships are formed, and brands present their vision to an international audience. The fair’s growing influence reflects the evolution of wine and spirits towards authenticity, storytelling, and meaningful experiences.',
      },
      {
        type: 'heading',
        text: 'Let’s Meet in Paris',
      },
      {
        type: 'paragraph',
        text: 'Whether you are a long-standing partner or discovering our range for the first time, we look forward to welcoming you, sharing our wines and vermouth, and exchanging ideas in the vibrant atmosphere of Wine Paris.',
      },
      {
        type: 'paragraph',
        text: '📍 Stand A011, Hall 5.1',
      },
      {
        type: 'paragraph',
        text: '🍷 Wine Paris 2026',
      },
      {
        type: 'paragraph',
        text: 'We’ll see you there.',
      },
    ],
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
    heroImage: '/images/NewsDetailPage/merry-christmas/hero.png',
    heroMobileImage: '/images/NewsDetailPage/merry-christmas/hero-mob.png',
    content: [
      {
        type: 'paragraph',
        text: 'It’s almost Christmas and we would like to thank you all for learning about our product, taking the first sip and finally — falling in love with it!',
      },
      {
        type: 'paragraph',
        text: 'Let’s pour our Vermouth into a glass and wish each other a Merry Christmas — cin-cin!',
      },
      {
        type: 'paragraph',
        text: 'We hope that you’re spending this wonderful time with all of your closest ones and have made the right choice of gifting them a bottle of our Vermouth: Rosso or Bianco.',
      },
      {
        type: 'paragraph',
        text: 'And if you, by any chance, have lost track of time and forgot about gifts in general — the perfect solution would be to buy Monte Carlo Vermouth of your choice at our selling spot at the Place du Casino Avenue de Monte Carlo or place an online order next year of 2026!',
      },
      {
        type: 'paragraph',
        text: 'Classy, elegant, coming from the best vermouth making traditions and a fabulous mix of Italian and French culture — it will fill anyone with joy: Whether it is your tennis partner, your boss or your childhood friend — they will absolutely adore this gesture!',
      },
    ],
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
    heroImage: '/images/NewsDetailPage/from-bitter/hero.png',
    heroMobileImage: '/images/NewsDetailPage/from-bitter/hero-mob.png',
    content: [
      {
        type: 'paragraph',
        text: 'The basis of what vermouth is goes back to ancient times. However, the qualities for which it has been valued has changed significantly. Qualities such as its bitterness and medicinal properties have become less emphasised over the years, while its opposites, sweetness and recreation have become more so. This article will give the reader a broad appreciation of the cyclical fortunes and twisted paths even long-established products go through. Here is an overview of how this versatile drink’s fortunes have changed over the years.',
      },
      {
        type: 'heading',
        text: 'Proto Vermouths',
      },
      {
        type: 'richParagraph',
        parts: [
          {
            text: 'While today we emphasise its sweetness back in the past it was touted for its bitterness. It has long been thought, at least since the days of Hippocrates, that bitterness is a stimulant of the digestive system. Thus, bitter drinks were thought to aid one’s digestion. Wormwood, from which the word vermouth is derived (from German ',
          },
          {
            text: 'wurmut',
            italic: true,
          },
          {
            text: ' — man wur + mut courage due it also being used as an aphrodisiac), was touted as a cure for practically every digestive disorder under the Sun.',
          },
        ],
      },
      {
        type: 'richParagraph',
        parts: [
          {
            text: 'A 1560 German medical text described ',
          },
          {
            text: '‘vermouth wine’',
            italic: true,
          },
          {
            text: ' as ',
          },
          {
            text: '“very good for old age, both for the cold and the hot tempers… It gets rid of bad breath due to stomach upset and stimulates the liver and the pancreas. It improves the skin and the complexion and it is to be drunk before and after eating”.',
            italic: true,
          },
        ],
      },
      {
        type: 'paragraph',
        text: '(Disclaimer: This article is for entertainment purposes and makes absolutely no medical claims or recommendations.)',
      },
      {
        type: 'paragraph',
        text: 'However, while its purported (and very often evidence light) medicinal properties may have helped sustain its consumption at a local level, these properties are not what made it globally popular. For this the drink had to do a 180 degree turn.',
      },
      {
        type: 'heading',
        text: 'The Modern Incarnation',
      },
      {
        type: 'paragraph',
        text: 'Conveniently, at the beginning of modernity, the modern vermouth was born. In the late 18th Century, when the Portuguese discovery of the Cape of Good Hope sent spice prices plummeting, an ambitious young Benedetto Carpano went off to Turin with the family wormwood wine recipe in mind. Benedetto experimented with the formula with a blend of about 30 botanical macerated into sweet Moscato wine (after all, spices were not a luxury any more which allowed for cheaper trial and error) and had a bottle sent to the court of King Victor Amadeus III who then abandoned the court aperitif Rosalio, for Carpano’s Vermouth. With this, the popularity of the drink was ensured, as then, like today, people follow the fashions of the rich and famous. Also, a richly spiced acerbic drink with natural sweetness is much more flavoursome and pleasant than a simple mix of alcohol, sugar and water, which is what the Rosalio was, it didn’t even contain any roses, as its name would otherwise suggest.',
      },
      {
        type: 'paragraph',
        text: 'With a seal of approval from the House of Savoy and thus, its status on a firm footing, Benedetto bought out his partner and created a booming business which had to run 24 hours a day to keep up with demand. From then on, its fortunes ebbed and flowed but it always retained a firm baseline maintained by the success of brands based in Italy and France. Another step was required for further success, a turn away from being an aperitif and versatile folk remedy.',
      },
      {
        type: 'paragraph',
        text: 'The pivot away from being a medicinal drink to a recreational one soaking the livers of high society sparked off a craze that did not go unnoticed by other companies. The long-established Cinzano company, had been in the business at least thirty years before Carpano, saw the trends and moved away from emphasising the medicinal properties of the drink and drew attention to its sweeter and recreational properties. They also hooked on to another trend early, they exported their drink to the burgeoning USA in the 1900s. Many Italians had emigrated to the USA in the 19th Century and Americans were becoming aware of foreign brands. Starting with the Cora Brothers in 1835 companies such as Cinzano and Martini followed in a bid to secure a promising foreign market. Symbolic of this transition and a desire to move ahead with the times is that Cinzano was the first product to be advertised using a neon sign.',
      },
      {
        type: 'heading',
        text: 'America To Italy And Back Again',
      },
      {
        type: 'paragraph',
        text: 'As the idea of spicing wines with wormwood and other substances goes back all the way to at least Shang Dynasty China, it should not surprise us that American revolutionary soldiers consumed their own version of vermouth (although they did not call it that). According to the vermouth historian Adam Ford, rebel soldiers diluted the British drink Royal Purl (wormwood ale), brand name (and I do not jest) ‘Dr. Stoughton’s Elixir Magnum Stomachicum’ (the reader can guess its purpose) made with 22 different herbs or spices diluted with red wine for the sake of economy. It was not only (once again) used for medicinal purposes but at that time alcohol was thought to be necessary for soldiers to keep in shape (again, this article is not medical advice).',
      },
      {
        type: 'richParagraph',
        parts: [
          {
            text: 'The initial target market for established European vermouth brands were Italian immigrants. Upon its arrival in America, Italian vermouth, which had become synonymous with red (',
          },
          {
            text: 'rosso',
            italic: true,
          },
          {
            text: ')/sweet vermouth was gradually mentioned in numerous cocktail recipe books and then featured at the 1853 The Exhibition of the Industry of all Nations held in New York, hosting over 4390 exhibitors, including M.Bovone, G & L Cora, Carpano and the Dettone Brothers. While this helped vermouth maintain a steady profile in the USA, it wasn’t until the now household name Martini was exported in 1868 that vermouth became a hit. Between 1867 and 1889, the company exported around 612 000 litres of vermouth to America.',
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'The aforementioned influx made a whole host of new, now household, cocktails popular. The recipe for the Marguerite cocktail, half gin and half vermouth appeared in 1904, known today as the Martini. The subsequent rise in demand led to the creation of the Martini & Rossi Extra Dry vermouth in 1910, little did they anticipate the ominous nature of that name.',
      },
      {
        type: 'heading',
        text: 'Fame & Fall',
      },
      {
        type: 'richParagraph',
        parts: [
          {
            text: 'The Vermouth’s association with legendary literary figures both fictional and non-fictional bolstered its popularity. When the young Ernest Hemingway was hit by shrapnel while working as an ambulance driver, delivering cigarettes and chocolates to Italian soldiers on the front during WW1, he would ask his friends to smuggle bottles of red (',
          },
          {
            text: 'rosso',
            italic: true,
          },
          {
            text: ') vermouth to his room, ',
          },
          {
            text: '“I sent for the porter and when he came I told him in Italian to get me a bottle of Cinzano at the wine shop, a fiasco of chianti and the evening papers.”',
            italic: true,
          },
          {
            text: ' It was during this period in a Milanese hospital that served as an inspiration for his most famous novel, A Farewell to Arms. Should our readers seek to imitate him, be aware that Hemingway liked his Martinis icy cold, ',
          },
          {
            text: '“the coldest martini in the world…so cold you can’t hold it in your hand. It sticks to the fingers.”',
            italic: true,
          },
          {
            text: ' Freeze those glasses well.',
          },
        ],
      },
      {
        type: 'richParagraph',
        parts: [
          {
            text: 'The influence of America and Americans sometimes went both ways. For example, the famous Americano cocktail was created by Gaspare Campari in Milan when an American patron suggested that a Campari cocktail would be better served iced and with carbonated water, like an American long drink. This then became a Negroni when, apocryphally, its namesake Camilio Negroni asked for gin rather than carbonated water be added to it. The drink was later popularised in the USA by Hollywood actors such as Orson Welles who concluded ',
          },
          {
            text: '“The bitters are excellent for your liver, the gin is bad for you. They balance each other.”',
            italic: true,
          },
        ],
      },
      {
        type: 'richParagraph',
        parts: [
          {
            text: 'Meanwhile the (usually white/',
          },
          {
            text: 'bianco',
            italic: true,
          },
          {
            text: ') vermouth content of the Martini decreased to comedic levels. Initially half part vermouth and half part gin, the vermouth part gradually decreased to almost nil over the course of the 20th century. While James Bond is famous for the Vesper Martini, there are three things you should know before seeking it out. Firstly, you cannot make it any more, Kina Lillet (with high quinine content) was discontinued in 1987. Secondly, unlike a traditional Martini, the Kina Lillet is a liqueur and not a vermouth as it does not contain any wormwood. Thirdly, Ian Fleming disliked it saying ',
          },
          {
            text: '“I proceeded to invent a cocktail for Bond (which I sampled several months later and found unpalatable)”',
            italic: true,
          },
          {
            text: '. Winston Churchill excluded the vermouth entirely from his Martinis, reportedly saying that the best way to use it was ',
          },
          {
            text: '“…merely to bow in the direction of France (where vermouth is made) as the gin is poured”',
            italic: true,
          },
          {
            text: '. Following this tradition, the film maker Luis Buñuel recommended ',
          },
          {
            text: '“…allowing a ray of sunlight to shine through the bottle of Noilly Prat before it hits the bottle of gin”',
            italic: true,
          },
          {
            text: ' as the preferred amount.',
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'A further issue which contributed to its decline was that many bartenders were ignorant of how to preserve an opened bottle of vermouth, leading to its taste being degraded by oxidation (it should be kept sealed, in a refrigerator and will be in good form for a months and passable after two months). Over the course of the late 20th century, the vermouth developed a staid and old fashioned image. To add insult to injury, the definition of vermouth became elastic and manufacturers turned the drink into little more than a generic low quality mixer.',
      },
      {
        type: 'heading',
        text: 'Resurgence',
      },
      {
        type: 'paragraph',
        text: 'Such a sorry state of affairs has not lasted. In recent years, the vermouth’s sweet taste, and relatively low ABV content has led it to become among the most popular drinks in a burgeoning market. Other popularising factors include the resurgence of independent vintners who desire to produce something more than just mixers after decades of neglect. High quality vermouths such as Monte Carlo Vermouth have emerged to enable drinkers to create high grade incarnations of classic cocktails, leading to a period of exciting and innovative revitalisation that is ongoing. You are invited to partake and experience these new tastes and sensations via a painstakingly nurtured tradition.',
      },
    ],
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
    heroImage: '/images/NewsDetailPage/available-online/hero.png',
    heroMobileImage: '/images/NewsDetailPage/available-online/hero-mob.png',
    content: [
      {
        type: 'paragraph',
        text: 'The moment has finally arrived! We’ve opened online sales of Monte Carlo Vermouth in selected countries – a product created to embody the spirit of Monaco, as well as its lifestyle and refined taste.',
      },
      {
        type: 'paragraph',
        text: 'Produced from the highest quality monosort wines from Piedmont infused with precious French herbs and Monegasque roses, this premium vermouth can be enjoyed both straight and in cocktails and will undoubtedly become an ideal present for all lovers of lux drinks.',
      },
      {
        type: 'paragraph',
        text: 'Both Bianco and Rosso varieties are ready to reveal their expressive character and versatile flavor nuances to you. Order now and experience something really new in the world of vermouths!',
      },
      {
        type: 'paragraph',
        text: 'If you’re in Monaco, France, Spain, Belgium, the Netherlands, or the UK, you can order directly from our website. Delivery to other countries will be launched soon!',
      },
    ],
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
    heroImage: '/images/NewsDetailPage/chalet/hero.png',
    heroMobileImage: '/images/NewsDetailPage/chalet/hero-mob.png',
    content: [
      {
        type: 'paragraph',
        text: 'The magic of Christmas comes to Monaco. On this occasion, we are delighted to announce the opening of Monte Carlo Vermouth Chalet. Located in the heart of the Principality, on the Place du Casino avenue de Monte-Carlo, the Chalet warmly invites you to enjoy a moment of elegance and refinement with a unique and local product made from rose petals harvested from Monaco’s rose gardens.',
      },
      {
        type: 'paragraph',
        text: 'A tasting guided by our experts will allow you to discover the subtlety and richness in flavor of Monte Carlo Vermouth Bianco and Monte Carlo Vermouth Rosso.',
      },
      {
        type: 'paragraph',
        text: 'Our natural products are steeped in the traditions that Monaco, France, and Italy take pride in.',
      },
      {
        type: 'paragraph',
        text: 'They are crafted using state-of-the-art technologies, while still embracing the artisanal methods of vermouth production. Wines from the famous Piedmont region, some of which are classified as UNESCO World Heritage, such as Moscato d’Asti DOCG wines and Langhe Nebbiolo DOC, give our vermouths an unparalleled aromatic palette.',
      },
      {
        type: 'paragraph',
        text: 'Rose petals from Monaco’s rose gardens are the central elements of these creations. Distilled plants by the French experts from Grasse add mystery and divine taste.',
      },
      {
        type: 'paragraph',
        text: 'For those who wish to immerse themselves in the world of our products, in addition to individual bottles, a gift box is offered. It includes a bottle of either Monte Carlo Vermouth Bianco or Monte Carlo Vermouth Rosso, as well as two crystal glasses engraved with the brand name.',
      },
      {
        type: 'paragraph',
        text: 'Awaken your creativity by adding a touch of Monaco to your holiday celebrations.',
      },
    ],
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
    heroImage: '/images/NewsDetailPage/living-wall/hero.png',
    heroMobileImage: '/images/NewsDetailPage/living-wall/hero-mob.png',
    content: [
      {
        type: 'paragraph',
        text: 'On September 3rd, we spent a delightful day at the party hosted by Club La Vigie Monte-Carlo, where we proudly presented our living wall.',
      },
      {
        type: 'paragraph',
        text: 'The next time you encounter our wall at an event in Monaco, rest assured that the process is straightforward: select one of the two options, the Monte Carlo Spritz or the Monte Carlo Tonic, ring the bell, and savor your cocktail crafted with our exquisite Monte Carlo Vermouth!',
      },
    ],
  },
];
