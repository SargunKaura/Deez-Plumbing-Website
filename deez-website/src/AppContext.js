import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [contactUsButtonClicked, setcontactUsButtonClicked] = useState(false);

    return (
        <AppContext.Provider value={{ contactUsButtonClicked, setcontactUsButtonClicked }}>
            {children}
        </AppContext.Provider>
    );
};
