import { createContext, useState } from "react";

export const MyStore = createContext();

export const MyStoreProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(true);
    const [cartItem, setCartItem] = useState([]);

    const incrementQuantity = (id) => {
        setCartItem((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
        console.log(id);
    };

    const decrementQuantity = (id) => {
        setCartItem((prev) =>
            prev
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    return <MyStore.Provider value={{ isCartOpen, setIsCartOpen, cartItem, setCartItem, incrementQuantity, decrementQuantity }}>{children}</MyStore.Provider>
}
