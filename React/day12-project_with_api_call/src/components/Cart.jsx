import { ShoppingCart } from "lucide-react";

const Cart = ({ product }) => {
    return (
        <div className="space-y-5">
                <div
                    key={product.id}
                    className="flex products-center gap-5 rounded-2xl border bg-white p-5 shadow-sm"
                >
                    <div className="h-28 w-28 rounded-xl bg-gray-100 p-3">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <div className="flex-1">
                        <h2 className="text-lg font-semibold">{product.title}</h2>

                        <p className="text-gray-500">{product.category}</p>

                        <p className="mt-2 text-2xl font-bold text-indigo-600">
                            ${product.price}
                        </p>

                        <p className="font-semibold text-green-600">
                            Amount: $
                            {(product.price * (product.quantity || 3)).toFixed(2)}
                        </p>
                    </div>

                    <div className="flex products-center gap-3">
                        <button

                            className="h-8 w-8 rounded bg-red-500 text-white"
                        >
                            -
                        </button>

                        <span className="text-lg font-bold">
                            {product.quantity || 1}
                        </span>

                        <button

                            className="h-8 w-8 rounded bg-green-500 text-white"
                        >
                            +
                        </button>
                    </div>
                </div>
        </div>
    )
}

export default Cart;