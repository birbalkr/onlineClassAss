import React, { useContext, useEffect, useState, } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar';
import Product from './components/Product';
import CartScreen from './Pages/CartScreen';
import { MyStore } from './context/Mycontext';

function App() {
  const [productData, setProductData] = useState([]);
  let { cartItem, isCartOpen } = useContext(MyStore)

  const getProductData = async () => {
    try {
      let res = await axios.get('https://fakestoreapi.com/products')
      setProductData(res.data);
    } catch (error) {
      console.log("API Error", error);
    }
  }

  useEffect(() => {
    getProductData();
  }, [])

  return (
    <div className='h-screen p-2 flex flex-col gap-4'>
      <Navbar />
      {isCartOpen ?
        <div className='grid grid-cols-4'>
          {
            productData.map((elem) => {
              let isIncart = cartItem.find((val) => val.id === elem.id )
              return <Product key={elem.id} product={elem} isIncart={isIncart} />
            })
          }
        </div> :

        <div>
          <CartScreen />
        </div>
      }
    </div>
  )
}
export default App
