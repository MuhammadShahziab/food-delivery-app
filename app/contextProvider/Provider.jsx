"use client";
import { SessionProvider } from "next-auth/react";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { WishListProvider } from "./WishListContext";

export const CartContext = createContext({});

export const cartProductPrice = (cartProduct) => {
  let price = cartProduct.sizes
    ? parseFloat(cartProduct?.sizes?.price)
    : parseFloat(cartProduct.basePrice);

  if (cartProduct.extraIngredientPrices.length > 0) {
    cartProduct.extraIngredientPrices.forEach((extras) => {
      price += parseFloat(extras.price);
    });
  }
  return price * cartProduct.quantity;
};

export const Provider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  // Define ls as a local variable
  const ls = typeof window !== "undefined" ? window.localStorage : null;

  useEffect(() => {
    if (ls) {
      const cart = ls.getItem("cart");
      if (cart) {
        try {
          setCartProducts(JSON.parse(cart));
        } catch (error) {
          console.log(error);
        }
      }
    }
  }, []); // No need to include `ls` in the dependency array

  const saveToLocalStorage = (cartProduct) => {
    if (ls) {
      ls.setItem("cart", JSON.stringify(cartProduct));
    }
  };

  const removeFromCart = (indexToCart) => {
    setCartProducts((prevProducts) => {
      const removedCartProduct = prevProducts.filter(
        (item, index) => index !== indexToCart
      );
      saveToLocalStorage(removedCartProduct);
      return removedCartProduct;
    });
    toast.success("removed");
  };

  const addToCart = (
    products,
    sizes = null,
    extraIngredientPrices = [],
    quantity = 1
  ) => {
    setCartProducts((prevProducts) => {
      const cartProduct = {
        ...products,
        sizes,
        extraIngredientPrices,
        quantity,
      };
      const newCartProducts = [...prevProducts, cartProduct];
      saveToLocalStorage(newCartProducts);
      return newCartProducts;
    });
  };

  return (
    <SessionProvider>
      <CartContext.Provider
        value={{ cartProducts, setCartProducts, addToCart, removeFromCart }}
      >
        <WishListProvider>{children}</WishListProvider>
      </CartContext.Provider>
    </SessionProvider>
  );
};
