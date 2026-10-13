import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './CraftsmanshipSlider.css';

const cocktails = [
  {
    id: 'monte-carlo-spritz',
    title: 'Monte-Carlo Spritz',
    image: '/images/HomePage/craftsmanship/spritz.png',
  },
  {
    id: 'cherry-blossom',
    title: 'Cherry Blossom',
    image: '/images/HomePage/craftsmanship/cherry.png',
  },
  {
    id: 'cote-dazur-cobbler',
    title: 'Côte d’Azur Cobbler',
    image: '/images/HomePage/craftsmanship/cobbler.png',
  },
  {
    id: 'parlour-game',
    title: 'Parlour Game',
    image: '/images/HomePage/craftsmanship/parlour.png',
  },
  {
    id: 'pear-drop',
    title: 'Pear Drop',
    image: '/images/HomePage/craftsmanship/pear.png',
  },
];

const CraftsmanshipSlider = () => {
  return (
    <div className="craftsmanship-slider">
      <Swiper
        modules={[Navigation]}
        navigation
        loop
        spaceBetween={24}
        slidesPerView={1}
        speed={1200}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}>
        {cocktails.map((cocktail) => (
          <SwiperSlide key={cocktail.id}>
            <article className="cocktail-card">
              <div className="cocktail-image-wrapper">
                <img src={cocktail.image} alt={cocktail.title} className="cocktail-image" />
              </div>

              <h3 className="cocktail-title">{cocktail.title}</h3>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CraftsmanshipSlider;
