import { Link } from 'react-router-dom';

import './StoryFinal.css';

const StoryFinal = () => {
  return (
    <section className="story-final">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <div className="story-final-content">
          {/* SUBTITLE */}
          <p className="story-final-subtitle">THE ESSENCE OF MONACO</p>

          {/* TITLE */}
          <h2 className="story-final-title font-serif">A TASTE OF THE RIVIERA</h2>

          {/* DESCRIPTION */}
          <p className="story-final-description">
            A celebration of exceptional botanicals, refined craftsmanship, and the timeless charm
            of Monte Carlo.
          </p>

          {/* BUTTON */}
          <Link to="/vermouth" className="story-final-button">
            Discover Our Vermouth
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StoryFinal;
