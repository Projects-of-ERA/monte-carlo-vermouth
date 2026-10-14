import './Botanicals.css';
import { Link } from 'react-router-dom';
import BotanicalsSlider from './BotanicalsSlider';

const Botanicals = () => {
  return (
    <section className="botanicals">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <div className="botanicals-grid">
          {/* LEFT */}
          <div className="botanicals-left">
            <img
              src="/images/HomePage/botanicals/botanicals.png"
              alt="botanicals-image"
              className="botanicals-image"
            />

            <div className="botanicals-left-content">
              <h2 className="botanicals-title font-serif">
                <span>
                  <em>made</em>
                </span>

                <span>
                  <em>with the</em> FINEST
                </span>

                <span>BOTANICALS</span>

                <span>
                  <em>from the</em> CÔTE
                </span>

                <span>D’AZUR</span>
              </h2>

              <Link to="/story" className="botanicals-button">
                Our story
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="botanicals-right">
            <BotanicalsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Botanicals;
