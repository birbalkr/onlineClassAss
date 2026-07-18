import { createContext } from "react";

export const MyStore = createContext()

export const ConstextProvider = ({ children }) => {


    return <MyStore.Provider value={{}}>
        {children}
    </MyStore.Provider>
}