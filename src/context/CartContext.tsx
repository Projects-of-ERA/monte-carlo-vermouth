import {
  createContext,
  useContext,
  useReducer,
  useState,
  useCallback,
  type ReactNode,
} from 'react';

import type { Product } from '../data/products';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; item: CartItem }
  | { type: 'UPDATE_QUANTITY'; id: string; quantity: number }
  | { type: 'REMOVE_ITEM'; id: string };

interface CartContextType {
  items: CartItem[];
  isCartOpen: boolean;
  totalQuantity: number;
  subtotal: number;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, quantity: number) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.find((item) => item.id === action.item.id);

      if (existingItem) {
        return state.map((item) =>
          item.id === action.item.id
            ? {
                ...item,
                quantity: item.quantity + action.item.quantity,
              }
            : item,
        );
      }

      return [...state, action.item];
    }

    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item.id === action.id ? { ...item, quantity: Math.max(1, action.quantity) } : item,
      );

    case 'REMOVE_ITEM':
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, dispatch] = useReducer(cartReducer, []);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

  const openCart = useCallback(() => setIsCartOpen(true), []);
  const closeCart = useCallback(() => setIsCartOpen(false), []);

  const addToCart = (product: Product, quantity: number) => {
    if (!Number.isInteger(quantity) || quantity < 1) return;

    dispatch({
      type: 'ADD_ITEM',
      item: {
        id: product.id,
        name: product.shortName,
        price: product.price,
        image: product.cartImage,
        quantity,
      },
    });

    openCart();
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', id, quantity });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isCartOpen,
        totalQuantity,
        subtotal,
        openCart,
        closeCart,
        addToCart,
        updateQuantity,
        removeItem,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }

  return context;
};
