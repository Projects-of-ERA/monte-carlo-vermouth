import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

const slides = [
  {
    id: 'premium-grapes',
    titleKey: 'botanicals.slider.premiumGrapes.title',
    textKey: 'botanicals.slider.premiumGrapes.text',
    image: '/images/HomePage/botanicals/grapes.png',
  },
  {
    id: 'botanicals',
    titleKey: 'botanicals.slider.botanicals.title',
    textKey: 'botanicals.slider.botanicals.text',
    image: '/images/HomePage/botanicals/botanicals-slide.png',
  },
  {
    id: 'monegasque-roses',
    titleKey: 'botanicals.slider.monegasqueRoses.title',
    textKey: 'botanicals.slider.monegasqueRoses.text',
    image: '/images/HomePage/botanicals/roses.png',
  },
];

const BotanicalsSlider = () => {
  const { t } = useTranslation();

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
              <img src={slide.image} alt={t(slide.titleKey)} />

              <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="botanicals-right-content">
                <h3 className="botanicals-right-title">{t(slide.titleKey)}</h3>

                <p className="botanicals-right-text">{t(slide.textKey)}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="botanicals-slider-navigation">
        <div className="botanicals-slider-counter font-serif">
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
