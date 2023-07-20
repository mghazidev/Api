import React from 'react'
import { useGLobalContext } from './context';

const Story = () => {
    const {hits, isLoading} = useGLobalContext()  
    if(isLoading) {
        return (
            <>
            <h1>Loading....</h1>
            </>
        )
    } 
  return (
    <>
    <h2>My tech</h2>
    {hits.map((action) => {
        const { title , author, objectID, url, num_comments } = action;
        return <>
        <div className="card">
            <h2>{title}</h2>
            <p> 
                by <span>{author}</span> | <span>{num_comments}</span> comments
            </p>

            <div className="card-btn">
                <a href='{url}' >
                    Read more
                </a>
                <a href='#'>REmove</a>
            </div>
        </div>
        </>
     } )}
    </>
 )
}

export default Story