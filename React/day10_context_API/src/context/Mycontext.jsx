import { createContext, useState } from "react";

// setup blank store for context API
export const MyStore = createContext();




export const ContextProvider = ({ children }) => {
    const [isCardOpen, setIsCardOpen] = useState(false)
    const [cartItem, setCartItem] = useState([])
    return <MyStore.Provider value={{ isCardOpen, setIsCardOpen, cartItem, setCartItem }}>{children}</MyStore.Provider>
};
