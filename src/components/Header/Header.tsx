import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import CartIcon from './CartIcon';
import './Header.css';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { t } = useTranslation();
  const { pathname } = useLocation();

  const language = pathname.split('/')[1];

  const langPrefix = language === 'fr' || language === 'es' ? `/${language}` : '';

  const localizedPath = (path: string) =>
    path === '/' ? langPrefix || '/' : `${langPrefix}${path}`;

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
            to={localizedPath('/vermouth')}
            className={({ isActive }) => `header-link ${isActive ? 'is-active' : ''}`}>
            {t('header.theVermouth')}
          </NavLink>

          <NavLink
            to={localizedPath('/story')}
            className={({ isActive }) => `header-link ${isActive ? 'is-active' : ''}`}>
            {t('header.ourStory')}
          </NavLink>

          <NavLink
            to={localizedPath('/mixology')}
            className={({ isActive }) => `header-link ${isActive ? 'is-active' : ''}`}>
            {t('header.mixology')}
          </NavLink>
        </nav>

        {/* LOGO */}
        <Link to={localizedPath('/')} className="header-logo" onClick={closeMenu}>
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
          <button type="button" aria-label={t('header.openCart')} className="header-cart-button">
            <CartIcon />
          </button>

          <NavLink
            to={localizedPath('/products')}
            className={({ isActive }) => `header-link ${isActive ? 'is-active' : ''}`}>
            {t('header.buyNow')}
          </NavLink>

          <NavLink
            to={localizedPath('/news')}
            className={({ isActive }) => `header-link ${isActive ? 'is-active' : ''}`}>
            {t('header.news')}
          </NavLink>

          <LanguageSwitcher />
        </nav>

        {/* BURGER */}
        <button
          type="button"
          className={`header-burger ${isMenuOpen ? 'is-open' : ''}`}
          aria-label={isMenuOpen ? t('header.closeMenu') : t('header.openMenu')}
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
            to={localizedPath('/vermouth')}
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'is-active' : '')}>
            {t('header.theVermouth')}
          </NavLink>

          <NavLink
            to={localizedPath('/story')}
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'is-active' : '')}>
            {t('header.ourStory')}
          </NavLink>

          <NavLink
            to={localizedPath('/mixology')}
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'is-active' : '')}>
            {t('header.mixology')}
          </NavLink>

          <NavLink
            to={localizedPath('/products')}
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'is-active' : '')}>
            {t('header.buyNow')}
          </NavLink>

          <NavLink
            to={localizedPath('/news')}
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? 'is-active' : '')}>
            {t('header.news')}
          </NavLink>
        </nav>

        <button type="button" className="header-mobile-cart" onClick={closeMenu}>
          <CartIcon />
          <span>{t('header.cart')}</span>
        </button>

        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
