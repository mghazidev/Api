// context Creation
// provider
// useContext hook}
import React, {useContext, useReducer, useEffect} from "react";
import reducer from "./reducer";

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
    isLoading : true,
    query : 'CSS',
    nbPages : 0,
    page : 0,
    hits : [],
}

const AppContext = React.createContext();

// to create a provider

const AppProvider = ( {children} ) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    
    
    const fetchApiData = async(url) => {
        dispatch({type: "SET_LOADING" });

        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            dispatch({
                type:"GET_STORY",
                payload : {
                    hits:data.hits,
                    nbPages: data.Pages,
                }
            });
        } catch(error) {
            console.log(error);
        }
    }
    
    
    useEffect(() => {
      fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    
    }, []);
    
    return(
        <AppContext.Provider value = {{...state}}>
            {children}
        </AppContext.Provider>
    )
}

//custom hook

const useGLobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGLobalContext};