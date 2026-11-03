import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';

import { useCart } from '../../context/CartContext';

import './CartDrawer.css';

const CartDrawer = () => {
  const { t } = useTranslation();
  const { items, isCartOpen, subtotal, closeCart, updateQuantity, removeItem } = useCart();

  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isCartOpen) return;

    const previousOverflow = document.body.style.overflow;
    const previousActiveElement = document.activeElement as HTMLElement | null;

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeCart();
      }

      if (event.key === 'Tab') {
        const drawer = closeButtonRef.current?.closest('.cart-drawer');

        if (!drawer) return;

        const focusable = Array.from(
          drawer.querySelectorAll<HTMLElement>(
            'a[href], button:not(:disabled), [tabindex]:not([tabindex="-1"])',
          ),
        ).filter((element) => element.getClientRects().length > 0);

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!first || !last) return;

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [isCartOpen, closeCart]);

  return createPortal(
    <>
      <div
        className={`cart-overlay ${isCartOpen ? 'is-open' : ''}`}
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside
        className={`cart-drawer ${isCartOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal={isCartOpen ? true : undefined}
        aria-hidden={!isCartOpen}
        aria-labelledby="cart-drawer-title"
        inert={!isCartOpen}>
        {/* HEADER */}
        <div className="cart-drawer-header">
          <h2 id="cart-drawer-title" className="font-serif">
            {t('cart.title')}
          </h2>

          <button
            ref={closeButtonRef}
            type="button"
            className="cart-drawer-close"
            onClick={closeCart}
            aria-label={t('cart.close')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              width="20"
              height="20"
              fill="currentColor"
              aria-hidden="true">
              <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
            </svg>
          </button>
        </div>

        {/* ITEMS */}
        <div className="cart-drawer-body">
          {items.length === 0 ? (
            <p className="cart-drawer-empty">{t('cart.empty')}</p>
          ) : (
            <div className="cart-drawer-items">
              {items.map((item) => (
                <div key={item.id} className="cart-drawer-item">
                  <div className="cart-drawer-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="cart-drawer-item-content">
                    <div className="cart-drawer-item-top">
                      <h3>
                        {t('cart.product')} {item.name}
                      </h3>

                      <button
                        type="button"
                        className="cart-drawer-remove"
                        onClick={() => removeItem(item.id)}>
                        {t('cart.remove')}
                      </button>
                    </div>

                    <div className="cart-drawer-item-bottom">
                      <div className="cart-drawer-quantity">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity === 1}
                          aria-label={t('cart.decreaseQuantity', { name: item.name })}>
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label={t('cart.increaseQuantity', { name: item.name })}>
                          +
                        </button>
                      </div>

                      <p className="cart-drawer-item-price">
                        €{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="cart-drawer-footer">
          <div className="cart-drawer-subtotal">
            <span>{t('cart.subtotal')}</span>
            <strong>€{subtotal.toFixed(2)}</strong>
          </div>

          <button type="button" className="cart-drawer-checkout" disabled>
            {t('cart.checkout')}
          </button>
        </div>
      </aside>
    </>,
    document.body,
  );
};

export default CartDrawer;
