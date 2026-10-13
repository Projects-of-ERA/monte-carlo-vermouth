import { varietals } from '../../../data/varietals';

import './Varietals.css';

const Varietals = () => {
  return (
    <section className="varietals">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <h2 className="varietals-heading font-serif">Our Varietals</h2>

        <div className="varietals-grid">
          {varietals.map((varietal) => (
            <article key={varietal.id} className="varietals-card">
              <div className="varietals-image-wrapper">
                <img src={varietal.image} alt={varietal.alt} className="varietals-image" />
              </div>

              <div className="varietals-title">
                <h3 className="font-serif">{varietal.name}</h3>

                <span className="font-serif">{varietal.type}</span>
              </div>

              <a href="#" className="varietals-button" onClick={(event) => event.preventDefault()}>
                Order Now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Varietals;
