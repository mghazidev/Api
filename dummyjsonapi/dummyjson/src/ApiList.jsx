import React, {useEffect, useState } from 'react';

const ApiList = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        //Fetching
        const fetchApi = async() => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                setState(data.products);
                console.log(data);
            } catch (error) {
                console.error( error);
            }
        };

        fetchApi();
    
    }, [])
    return (
        <div >
            <h1>Api List</h1>
            <ul>
                {state.map((product,index) => (
                    <li key={index}>{product.title}<br /></li>
                ))}
            </ul>
        </div>
    )
}

export default ApiList