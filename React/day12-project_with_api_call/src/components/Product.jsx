import { Heart, ShoppingCart, Star } from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../context/Mycontext";



export default function Product({ product, isIncart }) {
    let { setCartItem } = useContext(MyStore);

    const addTOCart = () => {
        alert("Product added to cart");
        setCartItem((prev) => [...prev, {...product, quantity: 1}]);
    }

    return (
        <div className="w-80 rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            {/* Image */}
            <div className="relative flex h-72 items-center justify-center bg-gray-50 p-6">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain"
                />

                <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow hover:bg-red-500 hover:text-white">
                    <Heart size={18} />
                </button>
            </div>

            {/* Content */}
            <div className="space-y-4 p-5">

                {/* Category */}
                <p className="text-sm capitalize text-indigo-600">
                    {product.category}
                </p>

                {/* Title */}
                <h2 className="line-clamp-2 h-14 text-lg font-semibold text-gray-800">
                    {product.title}
                </h2>

                {/* Rating */}
                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-1">
                        <Star
                            size={18}
                            fill="currentColor"
                            className="text-yellow-400"
                        />

                        <span className="font-medium">
                            {product.rating.rate}
                        </span>

                        <span className="text-gray-500">
                            ({product.rating.count})
                        </span>
                    </div>

                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                        In Stock
                    </span>

                </div>

                {/* Price */}
                <div className="flex items-end gap-3">

                    <span className="text-3xl font-bold text-indigo-600">
                        ${product.price}
                    </span>

                    <span className="text-sm text-green-600">
                        Free Shipping
                    </span>

                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                    {
                        isIncart ? <button className="flex flex-1 items-center justify-center gap-6 rounded-xl bg-gray-200 py-3 font-medium text-gray-600 transition hover:bg-gray-300 text-2xl">
                            <span>
                                -
                            </span>
                            <span className="flex items-center gap-2" >1</span>
                            <span>+</span>
                        </button>
                            : <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 font-medium text-white transition hover:bg-indigo-700" onClick={addTOCart}>
                                <ShoppingCart size={18} />
                                Add to Cart
                            </button>}

                </div>

            </div>

        </div>
    );
}