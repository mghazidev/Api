import React, {useEffect, useState } from 'react';

const ApiList = () => {
    const [state, setState] = useState([]);
    const [Title, setTitle] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

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
    
    }, []);
    const addNewProduct = async() => {
        try {
            const response = await fetch('https://dummyjson.com/products/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title: Title,
                }),
            });
            const data = await response.json();
            console.log('New Product:', data);
            setState((prevstate) => [...prevstate, data]);
            setTitle('');
        } catch (error) {
            console.error(error);
        }
    }


    const deleteProduct = async(id) => {
        try {
            await fetch('https://dummyjson.com/products', {
            method: 'DELETE',
      });

      // we update the state by filtering thorught the products and pass the parameter that if the id of out product not equals to custom id then delete it 
      setState((prevstate) => prevstate.filter((product) => product.id !== id));
        } catch (error) {
            console.error(error);
        }
    }

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };
    
      const filteredProducts = state.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return (
        <div class="container">
            <h1>Searching</h1>
            <div>
                <input  type='text' value={searchTerm} onChange={handleSearch} placeholder='Search products'/>
            </div>
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        {product.title}
                        <button onClick={() => deleteProduct(product.id)}>Delete</button></li>
                ))}
            </ul>
            <ul>
                <h1>Api List</h1>
                {state.map((product) => (
                    <li key={product.id}>{product.title} 
                    <button onClick={() => deleteProduct(product.id)}>Delete</button>
                    
                    </li>
                ))} 
            </ul>
            <div>
                <h1>Add New Product</h1>
                    <input type='text' value={Title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <button onClick={addNewProduct}>Add New Product</button>
        </div>
    )
}

export default ApiList