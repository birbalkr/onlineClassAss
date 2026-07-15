import { createContext, useState } from "react";

export const MyStore = createContext();

export const MyStoreProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(true);
    const [cartItem, setCartItem] = useState([]);

    return <MyStore.Provider value={{ isCartOpen, setIsCartOpen, cartItem, setCartItem }}>{children}</MyStore.Provider>
}
