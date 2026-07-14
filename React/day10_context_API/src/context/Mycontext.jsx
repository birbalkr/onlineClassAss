import { createContext, useState } from "react";

// setup blank store for context API
export const MyStore = createContext();




export const ContextProvider = ({ children }) => {
    const [myData, setMyData] = useState("this is a context api");
    return <MyStore.Provider value={myData}>{children}</MyStore.Provider>
};
