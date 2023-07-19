const reducer = (state , action) => {
    switch (action.type) {
        case "GET_LOADING":
            return {
                ...state,
                isLoading : true,
            };
        case "GET_STORY":
            return {
                ...state,
                hits : action.payload.hits,
                nbPages : action.payload.nbPages,
                isLoading: false
            }
    }
    return state;
}

export default reducer;