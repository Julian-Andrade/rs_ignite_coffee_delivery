import { createContext, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/OurCoffees/CoffeCard";
import { produce } from "immer";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addCoffeeToCart: (coffee: CartItem) => void;
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
  cleanCart: () => void;
  removeCartItem: (cartItemId: number) => void;
}

interface CartContextProviderProps {
  children: React.ReactNode;
}

const COFFEE_ITEMS_SORAGE_KEY = "coffeeDelivery:cartItems";

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCoffeItems = localStorage.getItem(COFFEE_ITEMS_SORAGE_KEY);

    if (storedCoffeItems) {
      return JSON.parse(storedCoffeItems);
    } else {
      return [];
    }
  });

  const cartQuantity = cartItems.length;

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  // Adicionar o item no carrinho
  function addCoffeeToCart(coffee: CartItem) {
    // Verifica se existe item no carrinho
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    );
    // Adicionar item ao carrinho
    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });
    // Novo valor de estado do carrinho
    setCartItems(newCart);
  }

  // Modificar a quantidade de items no carrinho
  function changeCartItemQuantity(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      // Verifica se existe item no carrinho
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );
      // Modificando a quantidade de items no carrinho
      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart];
        draft[coffeeExistsInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
      }
    });
    // Novo valor de estado do carrinho
    setCartItems(newCart);
  }

  // Removendo o item do carrinho
  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      // Verifica se existe item no carrinho
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      );
      // Removendo item do carrinho
      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1);
      }
    });
    setCartItems(newCart);
  }

  // Limpar os itens do carrinho
  function cleanCart() {
    setCartItems([]);
  }

  // Armazenando informações no localStorage
  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_SORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addCoffeeToCart,
        cartQuantity,
        changeCartItemQuantity,
        removeCartItem,
        cartItemsTotal,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
