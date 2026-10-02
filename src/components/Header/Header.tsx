import CartIcon from './CartIcon';
import './Header.css';

const Header = () => {
  return (
    <header className="py-8 absolute top-0 left-0 z-50 w-full text-white">
      <div className="mx-auto flex max-w-8xl items-center px-8">
        {/* LEFT NAVIGATION */}
        <nav className="flex flex-1 items-center gap-14">
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
        <div className="flex shrink-0 justify-center">
          <img
            src="/images/header/main-logo.svg"
            alt="Monte Carlo Vermouth"
            className="w-[160px]"
          />
        </div>

        {/* RIGHT NAVIGATION */}
        <nav className="flex flex-1 items-center justify-end gap-14">
          <button
            type="button"
            aria-label="Open cart"
            className="flex cursor-pointer items-center justify-center px-2 py-2">
            <CartIcon />
          </button>

          <a href="#" className="header-link">
            Buy Now
          </a>

          <a href="#" className="header-link">
            News
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
