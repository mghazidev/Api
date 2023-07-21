import React, {useEffect, useState } from 'react';

const Category = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        //Fetching
        const fetchApi = async() => {
            try {
                const response = await fetch("https://dummyjson.com/products/categories");
                const data = await response.json();
                setState(data.products);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchApi();
    
    }, [])
    return (
        <div >
            <h1>Api Category</h1>
            <ul>
                 {state.filter((product) => (
                    <li>{product.title}<br /></li>
                ))} 
            </ul>
        </div>
    )
}

export default Category;