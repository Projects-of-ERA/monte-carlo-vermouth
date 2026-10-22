import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import CartIcon from './CartIcon';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="header-container mx-auto max-w-8xl px-4 lg:px-8">
        {/* DESKTOP LEFT NAVIGATION */}
        <nav className="header-desktop-nav header-desktop-nav-left">
          <NavLink
            to="/vermouth"
            className={({ isActive }) => `header-link ${isActive ? 'is-active' : ''}`}>
            The Vermouth
          </NavLink>

          <NavLink
            to="/story"
            className={({ isActive }) => `header-link ${isActive ? 'is-active' : ''}`}>
            Our Story
          </NavLink>

          <NavLink
            to="/mixology"
            className={({ isActive }) => `header-link ${isActive ? 'is-active' : ''}`}>
            Mixology
          </NavLink>
        </nav>

        {/* LOGO */}
        <Link to="/" className="header-logo" onClick={closeMenu}>
          <img
            src={
              isMenuOpen
                ? '/images/header/main-logo.svg'
                : isScrolled
                  ? '/images/header/main-logo-blue.svg'
                  : '/images/header/main-logo.svg'
            }
            alt="Monte Carlo Vermouth"
          />
        </Link>

        {/* DESKTOP RIGHT NAVIGATION */}
        <nav className="header-desktop-nav header-desktop-nav-right">
          <button type="button" aria-label="Open cart" className="header-cart-button">
            <CartIcon />
          </button>

          <Link to="#" className="header-link">
            Buy Now
          </Link>

          <Link to="#" className="header-link">
            News
          </Link>
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
          <NavLink
            to="/vermouth"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'is-active' : '')}>
            The Vermouth
          </NavLink>

          <NavLink
            to="/story"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'is-active' : '')}>
            Our Story
          </NavLink>

          <NavLink
            to="/mixology"
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'is-active' : '')}>
            Mixology
          </NavLink>

          <Link to="#" onClick={closeMenu}>
            Buy Now
          </Link>

          <Link to="#" onClick={closeMenu}>
            News
          </Link>
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
