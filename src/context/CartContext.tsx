import { Image } from "@/lib/data";
import { createContext, useState } from "react";

interface cartItems extends Image {
  quantity: number;
}

export interface CartContextType {
  cart: cartItems[];
  addToCart: (image: Image) => void;
  incProduct: (id: number) => void;
  decProduct: (id: number) => void;
  removeProduct: (id: number) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<cartItems[]>([]);

  function addToCart(image: Image) {
    const exists = cart.some((item) => item.id === image.id);
    if (!exists) {
      setCart((prev) => [...prev, { ...image, quantity: 1 }]);
      return;
    } // Do nothing if item not in cart

    const updatedCart = cart.map((item) => {
      if (item.id === image.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCart(updatedCart);
  }

  function incProduct(id: number) {
    const items = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(items);
  }
  function decProduct(id: number) {
    const items = cart.map((item) => {
      if (item.id === id) return { ...item, quantity: item.quantity - 1 };
      return item;
    });
    setCart(items);
  }
  function removeProduct(id: number) {
    const items = cart.filter((item) => item.id === id);
    setCart(items);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, incProduct, decProduct, removeProduct }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
