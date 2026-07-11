import React, { useRef, useState } from 'react'

function Form() {
    console.log("app rerander");

    const [products, setProducts] = useState({}); 
    console.log("product --> ", products);
    

    let inpRef = useRef({});
    

    const handlesubmit = (e) => {
        e.preventDefault()
        let objProcuct = {
            pName: inpRef.current.productName.value,
            pPrice: inpRef.current.procuctPrice.value,
            pImage: inpRef.current.procuctImage.value,
            pCatg: inpRef.current.procuctCatg.value
        };
        inpRef.current.productName.value = "";
        inpRef.current.procuctPrice.value = "";
        inpRef.current.procuctImage.value = "";
        inpRef.current.procuctCatg.value = "";

        setProducts(objProcuct);
        
    }

    return (
        <div className='flex flex-col w-80 gap-4 bg-white p-4 rounded-md'>
            <form onSubmit={handlesubmit} className='flex flex-col gap-4'>
                <input ref={(e)=> inpRef.current.productName=e} className='p-2 border border-gray-400 rounded' type="text" placeholder='Product name' />
                <input ref={(e)=>inpRef.current.procuctPrice=e} className='p-2 border border-gray-400 rounded' type="text" placeholder='Product price' />
                <span>Select Category</span>
                <select ref={(e)=>inpRef.current.procuctCatg=e} className='p-2 border border-gray-400 rounded'>
                    <option value="MENS">Mens</option>
                    <option value="WOMENS">Women</option>
                    <option value="KIDS">Kids</option>
                </select>
                <input ref={(e)=>inpRef.current.procuctImage=e} className='p-2 border border-gray-400 rounded' text="text" placeholder='Image url' />
                <button className='bg-blue-600 text-white p-2 rounded'>Create</button>
            </form>

            <h1 className='text2xl text-center'>Data Print</h1>
            <div>Name: {products.pName}</div>
            <div>Price: {products.pPrice}</div>
            <div>img: {products.pImage}</div>
            <div>catg: {products.pCatg}</div>
        </div>
    )
}
export default Form