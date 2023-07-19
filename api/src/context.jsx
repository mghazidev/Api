// context Creation
// provider
// useContext hook}
import React, {useContext} from "react";

const AppContext = React.createContext();

// to create a provider

const AppProvider = ( {children} ) => {
    return(
        <AppContext.Provider value = {"World"}>
            {children}
        </AppContext.Provider>
    )
}

//custom hook

const useGLobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGLobalContext};