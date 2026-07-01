import React, { useState } from 'react'
import ProductCart from './ProductCart'

function Count() {
    const [productdata, setProductdata] = useState([
        {
            "id": 1,
            "title": "Wireless Bluetooth Headphones",
            "description": "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
            "category": "Electronics",
            "image": "https://picsum.photos/300?random=1",
            "rating": 4.8
        },
        {
            "id": 2,
            "title": "Men's Casual T-Shirt",
            "description": "Soft cotton round-neck t-shirt suitable for everyday wear.",
            "category": "Fashion",
            "image": "https://picsum.photos/300?random=2",
            "rating": 4.3
        },
        {
            "id": 3,
            "title": "Gaming Mechanical Keyboard",
            "description": "RGB backlit mechanical keyboard with blue switches for gaming and typing.",
            "category": "Electronics",
            "image": "https://picsum.photos/300?random=3",
            "rating": 4.7
        },
        {
            "id": 4,
            "title": "Smart Fitness Watch",
            "description": "Track your heart rate, sleep, and daily activities with this smart fitness watch.",
            "category": "Wearables",
            "image": "https://picsum.photos/300?random=4",
            "rating": 4.5
        },
        {
            "id": 5,
            "title": "Wooden Study Desk",
            "description": "Modern wooden study desk with storage shelves and spacious tabletop.",
            "category": "Furniture",
            "image": "https://picsum.photos/300?random=5",
            "rating": 4.2
        },
        {
            "id": 6,
            "title": "Non-Stick Cookware Set",
            "description": "10-piece non-stick cookware set for everyday cooking.",
            "category": "Kitchen",
            "image": "https://picsum.photos/300?random=6",
            "rating": 4.6
        },
        {
            "id": 7,
            "title": "Classic Novel Collection",
            "description": "A collection of timeless classic novels for literature lovers.",
            "category": "Books",
            "image": "https://picsum.photos/300?random=7",
            "rating": 4.9
        },
        {
            "id": 8,
            "title": "Running Shoes",
            "description": "Lightweight running shoes with breathable mesh and cushioned sole.",
            "category": "Sports",
            "image": "https://picsum.photos/300?random=8",
            "rating": 4.4
        },
        {
            "id": 9,
            "title": "Office Laptop Backpack",
            "description": "Water-resistant backpack with a dedicated 15.6-inch laptop compartment.",
            "category": "Accessories",
            "image": "https://picsum.photos/300?random=9",
            "rating": 4.5
        },
        {
            "id": 10,
            "title": "Digital Camera",
            "description": "24MP digital camera with 4K video recording and optical zoom.",
            "category": "Photography",
            "image": "https://picsum.photos/300?random=10",
            "rating": 4.7
        }
    ]);

    const deleteProduct = (id) => {
        const updatedProducts = productdata.filter((product) => product.id !== id);
        setProductdata(updatedProducts);
    }
    
    return (
        <>
            <div className='text-center text-2xl font-bold'>Product data</div>

            <div className='grid grid-cols-5 gap-4'>
                {productdata.map((product) => (
                <ProductCart products={product} del={deleteProduct}/>
            ))}
            </div>
    </>
    )
}

export default Count