import React, { useContext } from "react";
import { MyStore } from "../context/Mycontext";
import { ShoppingCart } from "lucide-react";

const Cart = () => {
    const { cartItem, setIsCardOpen } = useContext(MyStore);

    return (
        <div className="mx-auto max-w-6xl p-6">
            <h1 className="mb-8 text-3xl font-bold">
                Shopping Cart ({cartItem.length})
            </h1>

            {cartItem.length === 0 ? (<div className="flex min-h-[80vh] items-center justify-center p-6">
                <div className="w-full max-w-md rounded-3xl bg-white p-10 text-center shadow-xl">

                    <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100">
                        <ShoppingCart className="h-12 w-12 text-indigo-600" />
                    </div>

                    <h2 className="text-3xl font-bold text-gray-800">
                        Your Cart is Empty
                    </h2>

                    <p className="mt-3 text-gray-500">
                        Looks like you haven't added anything to your cart yet.
                    </p>

                    <button className="mt-8 rounded-xl bg-indigo-600 px-8 py-3 font-semibold text-white transition hover:bg-indigo-700" onClick={() => setIsCardOpen(false)}>
                        Continue Shopping
                    </button>

                </div>
            </div>
            ) :
                (<div className="space-y-5">
                    {cartItem.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-5 rounded-2xl border bg-white p-5 shadow-sm"
                        >
                            {/* Image */}
                            <div className="h-28 w-28 rounded-xl bg-gray-100 p-3">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            {/* Details */}
                            <div className="flex-1">
                                <h2 className="line-clamp-2 text-lg font-semibold">
                                    {item.title}
                                </h2>

                                <p className="mt-1 text-sm capitalize text-gray-500">
                                    {item.category}
                                </p>

                                <p className="mt-3 text-2xl font-bold text-indigo-600">
                                    ${item.price}
                                </p>
                            </div>

                            {/* Quantity */}
                            <div className="rounded-lg bg-gray-100 px-4 py-2 font-semibold">
                                Qty: 1
                            </div>
                        </div>
                    ))}
                </div>)}

        </div>
    );
};

export default Cart;