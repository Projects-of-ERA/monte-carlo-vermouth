import { useEffect, useState } from 'react';

import CartIcon from './CartIcon';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container mx-auto max-w-8xl px-4 lg:px-8">
        {/* DESKTOP LEFT NAVIGATION */}
        <nav className="header-desktop-nav header-desktop-nav-left">
          <a href="#" className="header-link">
            Our Varietals
          </a>

          <a href="#" className="header-link">
            The Vermouth
          </a>

          <a href="#" className="header-link">
            Our Story
          </a>

          <a href="#" className="header-link">
            Mixology
          </a>
        </nav>

        {/* LOGO */}
        <a href="#" className="header-logo">
          <img src="/images/header/main-logo.svg" alt="Monte Carlo Vermouth" />
        </a>

        {/* DESKTOP RIGHT NAVIGATION */}
        <nav className="header-desktop-nav header-desktop-nav-right">
          <button type="button" aria-label="Open cart" className="header-cart-button">
            <CartIcon />
          </button>

          <a href="#" className="header-link">
            Buy Now
          </a>

          <a href="#" className="header-link">
            News
          </a>
        </nav>

        {/* BURGER */}
        <button
          type="button"
          className={`header-burger ${isMenuOpen ? 'is-open' : ''}`}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}>
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`header-mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <nav className="header-mobile-nav">
          <a href="#" onClick={closeMenu}>
            Our Varietals
          </a>

          <a href="#" onClick={closeMenu}>
            The Vermouth
          </a>

          <a href="#" onClick={closeMenu}>
            Our Story
          </a>

          <a href="#" onClick={closeMenu}>
            Mixology
          </a>

          <a href="#" onClick={closeMenu}>
            Buy Now
          </a>

          <a href="#" onClick={closeMenu}>
            News
          </a>
        </nav>

        <button type="button" className="header-mobile-cart" onClick={closeMenu}>
          <CartIcon />
          <span>Cart</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
