import './Hero.css';

const Hero = () => {
  return (
    <section className="hero relative h-[min(100vh,1080px)] overflow-hidden bg-black text-white">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source
          media="(max-width: 768px)"
          src="/images/HomePage/hero/monte-carlo-vermouth.webm"
          type="video/webm"
        />

        <source src="/images/HomePage/hero/monte-carlo-vermouth.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="relative z-[2] mx-auto flex h-full max-w-[1450px] items-center px-8">
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
