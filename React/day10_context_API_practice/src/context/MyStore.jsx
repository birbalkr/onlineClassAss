import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
    const [isCartOn, setIsCartOn] = useState(false)
    const [CartData, setCartData] = useState([])

    return <MyStore.Provider value={{ isCartOn, setIsCartOn, CartData, setCartData }}>
        {children}
    </MyStore.Provider>
}