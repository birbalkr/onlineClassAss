

function ProductCart({ products,del }) {
    // del(products.id);
    return (
        <div className='border-2 border-black p-4 m-4 flex flex-col gap-2 h-[400px]'>
            <img src={products.image} alt="" className="w-4xl h-48"/>
            <div className="text-lg font-medium">{products.title}</div>
            <div className="text-sm font-extralight line-clamp-2">{products.description}</div>
            <div className="flex justify-between">
                <div>{products.category}</div>
                <div>{products.rating}</div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={()=>{console.log(products.id); del(products.id)
            }}>Add to Cart</button>
        </div>
    )
}

export default ProductCart