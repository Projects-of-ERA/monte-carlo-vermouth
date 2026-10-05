import './Hero.css';

const Hero = () => {
  return (
    <section className="relative h-[min(100vh,1080px)] bg-black text-white">
      <div className="mx-auto flex h-full max-w-[1450px] max-h-[1080px] items-center px-8">
        <div className="hero-content">
          <h1 className="hero-title font-serif">
            <span>
              <em>a</em> VERMOUTH
            </span>

            <span className="hero-title-offset">
              <em>a</em> WORLD
            </span>

            <span className="hero-title-last">APART</span>
          </h1>

          <a href="#" className="hero-shop-button">
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
