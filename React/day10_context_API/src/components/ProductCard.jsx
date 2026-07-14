import React, { useContext } from 'react'
import { MyStore } from '../context/Mycontext'

function ProductCard() {
    const contextdata = useContext(MyStore);
    console.log(contextdata);
    
    return (
        <div>ProductCard</div>
    )
}

export default ProductCard