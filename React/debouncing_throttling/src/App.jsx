import React, { useEffect, useState } from 'react'
import axois from 'axios';

function App() {

  const [productsData, setProductsData] = useState([]);
  const [productSearch, setProductSearch] = useState(null);

  let getProducts = async () => {
    let response = await axois.get('https://fakestoreapi.com/products');
    setProductsData(response.data);

  }

  useEffect(() => {
    getProducts();
  }, [])

  let filterdData = () => {
    console.log("filter running.........");

    let result = productsData.filter((product) => {
      return product.title.toLowerCase().includes(productSearch.toLowerCase());
    })
    setProductsData(result);
  }

  useEffect(() => {
    if (!productSearch) return;

    let timeout = setTimeout(() => {
      filterdData();
    }, 500)

    return () => clearTimeout(timeout);

  }, [productSearch])

  return (
    <div>
      <h1>Debouncing........</h1>

      <input type="text" placeholder='Search Products' onChange={(e) => { setProductSearch(e.target.value) }}
        style={{ padding: '20px' }} />

      {productsData.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.title}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default App
