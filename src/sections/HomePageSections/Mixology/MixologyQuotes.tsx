import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/navigation';
import './MixologyQuotes.css';

const quotes = [
  {
    id: 'gregory-buda',
    quoteKey: 'mixologyQuotes.gregoryBuda.quote',
    author: 'Gregory J. Buda',
    positionKey: 'mixologyQuotes.gregoryBuda.position',
  },
  {
    id: 'luca-rubinacci',
    quoteKey: 'mixologyQuotes.lucaRubinacci.quote',
    author: 'Luca Rubinacci',
    positionKey: 'mixologyQuotes.lucaRubinacci.position',
  },
  {
    id: 'slava-arakelov',
    quoteKey: 'mixologyQuotes.slavaArakelov.quote',
    author: 'Slava Arakelov',
    positionKey: 'mixologyQuotes.slavaArakelov.position',
  },
  {
    id: 'matthias-giroud',
    quoteKey: 'mixologyQuotes.matthiasGiroud.quote',
    author: 'Matthias Giroud',
    positionKey: 'mixologyQuotes.matthiasGiroud.position',
  },
];

const MixologyQuotes = () => {
  const { t } = useTranslation();

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

                  <blockquote className="mixology-quote-text font-serif">
                    {t(item.quoteKey)}
                  </blockquote>

                  <span className="mixology-quote-mark mixology-quote-mark-bottom font-serif">
                    ”
                  </span>
                </div>

                <div className="mixology-quote-author">
                  <p>{item.author}</p>
                  <span>{t(item.positionKey)}</span>
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
