import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './MixologyQuotes.css';

const quotes = [
  {
    id: 'gregory-buda',
    quote:
      'Monte Carlo Vermouth offers something fresh and unique to the entire category, and opens new doors for both cocktails and enjoying vermouth on its own.',
    author: 'Gregory J. Buda',
    position: 'Partner and Educator at "Bar Bisou Bisou", "Dead Rabbit" and "BlackTail"',
  },
  {
    id: 'luca-rubinacci',
    quote:
      'Monte Carlo Vermouth, with its super-evocative top note of Monegasque roses, has become our favourite aperitif – light, distinctive and exquisitely balanced. It’s like a Mediterranean sunset in a glass.',
    author: 'Luca Rubinacci',
    position: 'Creative Director of the Neapolitan Tailor House Rubinacci',
  },
  {
    id: 'slava-arakelov',
    quote:
      'Monte Carlo Vermouth reflects the heritage and savoir-faire of Monaco, France and Italy. The two wine profiles of Moscato d’Asti DOCG and Langhe Nebbiolo DOC distinguish themselves by their perfect balance and finesse, with a surprising light and delicate end note of rose.',
    author: 'Slava Arakelov',
    position: 'Chef Sommelier Wine Palace Monte Carlo',
  },
  {
    id: 'matthias-giroud',
    quote:
      'What differentiates MCV from other vermouths is its use of high-quality ingredients and its unique signature that combines the worlds of perfume and wine. This blend brings a simple yet complex elegance, making it perfect for consumption neat or in cocktails.',
    author: 'Matthias Giroud',
    position: 'Co-founder of Alchimiste Group and Head Mixologist',
  },
];

const MixologyQuotes = () => {
  return (
    <div className="mixology-quotes">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <Swiper
          modules={[Navigation]}
          navigation
          loop
          speed={1200}
          slidesPerView={1}
          className="mixology-quotes-swiper">
          {quotes.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="mixology-quote">
                <div className="mixology-quote-content">
                  <span className="mixology-quote-mark mixology-quote-mark-top font-serif">“</span>

                  <blockquote className="mixology-quote-text font-serif">{item.quote}</blockquote>

                  <span className="mixology-quote-mark mixology-quote-mark-bottom font-serif">
                    ”
                  </span>
                </div>

                <div className="mixology-quote-author">
                  <p>{item.author}</p>
                  <span>{item.position}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MixologyQuotes;
