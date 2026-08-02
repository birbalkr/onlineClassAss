import React from "react";

function ProductCard({ product }) {
    return (
        <div className="w-72 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300">

            {/* Product Image */}
            <div className="bg-zinc-800 h-60 flex items-center justify-center p-4">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-full object-contain"
                />
            </div>

            {/* Product Details */}
            <div className="p-5">
                <span className="text-xs uppercase text-blue-400">
                    {product.category}
                </span>

                <h2 className="text-lg font-semibold text-white mt-2 line-clamp-2">
                    {product.title}
                </h2>

                <div className="flex items-center justify-between mt-4">
                    <p className="text-yellow-400 font-medium">
                        ⭐ {product.rating}
                    </p>

                    <p className="text-2xl font-bold text-green-400">
                        ${product.price}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;