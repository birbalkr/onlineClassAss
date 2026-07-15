import React, { useContext } from 'react'
import Cart from '../components/Cart'
import { MyStore } from '../context/Mycontext'

const CartScreen = () => {
    let {cartItem} = useContext(MyStore)
    return (
        <div className='h-screen flex flex-col gap-4'>
            {cartItem.map((elem) => {
                return <Cart key={elem.id} product={elem} />
            })}
        </div>
    )
}

export default CartScreen
