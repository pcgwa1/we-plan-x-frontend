import React, { useEffect, useState, createContext, useReducer } from "react";
import routes from "./RootRoutes";

export const AppContext = createContext({});

// export default AppContext;

export const AppProvider = ({ children }) => {
    // const [user, setUser] = useState(null);
    // const [openmenu, setMenu] = useState(false);

    // const [state, dispatch] = useReducer(reducer, initalState);

    useEffect(() => {

    }, []);

    return (
        <AppContext.Provider
            value={{
                routes
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
