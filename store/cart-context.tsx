import { createContext, useState } from "react";

const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: (isOpen: boolean) => {},
});

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  function setIsCartOpenHandler(isOpen: boolean) {
    setIsCartOpen(isOpen);
  }

  const context = {
    isCartOpen: isCartOpen,
    setIsCartOpen: setIsCartOpenHandler,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
}

export default CartContext;
