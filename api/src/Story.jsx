import React, { useEffect } from 'react'

const Story = () => {
    let isLoading = true;
    let API = "http://hn.algolia.com/api/v1/search?query=html";

    const fetchApiData = async(url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        } catch(error) {
            console.log(error);
        }
    }
    
    
    useEffect(() => {
      fetchApiData(API)
    
    }, []);
    
    if (isLoading) {
        return (
            <>
                <h1>...Load</h1>
            </>
        )
    }
  return (
    <h2>My tech</h2>
  )
}

export default Story