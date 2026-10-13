import { instagramPosts } from '../../../data/instagramPosts';
import './Instagram.css';

const Instagram = () => {
  return (
    <section className="instagram-section">
      <div className="mx-auto max-w-8xl px-4 lg:px-8">
        <a
          href="https://www.instagram.com/montecarlo_vermouth/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-profile">
          <div className="instagram-logo-wrapper">
            <img
              src="/images/HomePage/instagram/insta-logo.webp"
              alt="Monte Carlo Vermouth"
              className="instagram-logo"
            />

            <div className="instagram-logo-overlay">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="instagram-icon">
                <path
                  fill="currentColor"
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5ZM17.25 6.5a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"
                />
              </svg>
            </div>
          </div>

          <div className="instagram-profile-copy">
            <h2 className="instagram-username">montecarlo_vermouth</h2>

            <p className="instagram-description">
              Official brand licensing by Monaco Brands.
              <br className="instagram-description-break" /> Must be of legal drinking age.
            </p>
          </div>
        </a>

        <div className="instagram-grid">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-post">
              <img src={post.image} alt={post.alt} className="instagram-post-image" />
            </a>
          ))}
        </div>

        <a
          href="https://www.instagram.com/montecarlo_vermouth/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-follow-button">
          Follow on Instagram
        </a>
      </div>
    </section>
  );
};

export default Instagram;
