import React from "react";
import Search from "./Search";
import Pagination from "./Pagination";
import  Story  from "./Story";
import { useGLobalContext } from "./context";

const App = () => {
    const data = useGLobalContext();
    return(
        <>
        <div> Hello {data}</div>
        <Search />
        <Pagination />
        <Story />   
        </>
    )
}

export default App