import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

const slides = [
  {
    id: 'premium-grapes',
    title: 'Premium Grapes',
    image: '/images/HomePage/botanicals/grapes.png',
    text: `Monte-Carlo Vermouth is created using artisanal methods of vermouth making from
      the renowned Piedmont region, whose vineyards are listed among the UNESCO World
      Heritage. Expert Italian winemakers create Moscato d’Asti DOCG to form an
      unparalleled aromatic base using the whole grape, grown expressly for this
      purpose.`,
  },
  {
    id: 'botanicals',
    title: 'The Botanicals',
    image: '/images/HomePage/botanicals/botanicals-slide.png',
    text: `The liquid is then blended with Côte d’Azur botanicals exclusively from expert
      distillers in the perfume capital of the world, Grasse. Known around the globe
      for the quality of its fragrances since the 18th century, it is where the finest
      luxury perfumes are made.`,
  },
  {
    id: 'monegasque-roses',
    title: 'Monégasque Roses',
    image: '/images/HomePage/botanicals/roses.png',
    text: `Finally, the liquid is made more exceptional with a touch of the Monégasque
      terroir: hand-picked rose petals from the principality’s rose garden to impart
      intrigue, elegance, and a divine taste.`,
  },
];

const BotanicalsSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = slides.length;

  return (
    <div className="botanicals-slider">
      <Swiper
        slidesPerView={1}
        loop
        speed={1200}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        className="botanicals-swiper">
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="botanicals-right-image">
              <img src={slide.image} alt={slide.title} />

              <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="botanicals-right-content">
                <h3 className="botanicals-right-title">{slide.title}</h3>

                <p className="botanicals-right-text">{slide.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="botanicals-slider-navigation">
        <div className="botanicals-slider-counter font-serif">
          {/* <span>{String(activeIndex + 1).padStart(2, '0')}</span>

          <span>/</span>

          <span>{String(totalSlides).padStart(2, '0')}</span> */}
          <span>{activeIndex + 1}</span>

          <span>/</span>

          <span>{totalSlides}</span>
        </div>

        <button
          type="button"
          className="botanicals-slider-next"
          aria-label="Next slide"
          onClick={() => swiperRef.current?.slideNext()}>
          <svg
            width="77"
            height="8"
            viewBox="0 0 77 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="botanicals-slider-arrow">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M70.542 7.647 73.283 4.5H.5v-1h72.698L70.455.353l.38-.353L77 4.017 70.92 8l-.378-.353z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BotanicalsSlider;
