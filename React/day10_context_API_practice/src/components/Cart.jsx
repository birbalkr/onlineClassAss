import { ShoppingCart } from "lucide-react";
import { MyStore } from "../context/MyStore";
import { useContext } from "react";

const Cart = () => {
    const { CartData, setCartData, setIsCartOn } = useContext(MyStore);
    

    // Increase Quantity
    const increaseQty = (id) => {
        setCartData(
            CartData.map((item) =>
                item.id === id
                    ? { ...item, quantity: (item.quantity || 1) + 1 }
                    : item
            )
        );
    };

    // Decrease Quantity
    const decreaseQty = (id) => {
        setCartData(
            CartData
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: (item.quantity || 1) - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    // Total Amount
    const totalAmount = CartData.reduce(
        (total, item) => total + item.price * (item.quantity || 1),
        0
    );

    return (
        <div className="mx-auto max-w-6xl p-6">
            <h1 className="mb-4 text-3xl font-bold">
                Shopping Cart ({CartData.length})
            </h1>

            <h2 className="mb-8 text-xl font-semibold text-indigo-600">
                Total: ${totalAmount.toFixed(2)}
            </h2>

            {CartData.length === 0 ? (
                <div className="flex min-h-[80vh] items-center justify-center">
                    <div className="rounded-3xl bg-white p-10 text-center shadow-xl">
                        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100">
                            <ShoppingCart className="h-12 w-12 text-indigo-600" />
                        </div>

                        <h2 className="text-3xl font-bold">Your Cart is Empty</h2>

                        <button
                            className="mt-8 rounded-xl bg-indigo-600 px-8 py-3 text-white"
                            onClick={() => setIsCartOn(false)}
                        >
                            Continue Shopping
                        </button>
                    </div>
                </div>
            ) : (
                <div className="space-y-5">
                    {CartData.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center gap-5 rounded-2xl border bg-white p-5 shadow-sm"
                        >
                            <div className="h-28 w-28 rounded-xl bg-gray-100 p-3">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-contain"
                                />
                            </div>

                            <div className="flex-1">
                                <h2 className="text-lg font-semibold">{item.title}</h2>

                                <p className="text-gray-500">{item.category}</p>

                                <p className="mt-2 text-2xl font-bold text-indigo-600">
                                    ${item.price}
                                </p>

                                <p className="font-semibold text-green-600">
                                    Amount: $
                                    {(item.price * (item.quantity || 1)).toFixed(2)}
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={() => decreaseQty(item.id)}
                                    className="h-8 w-8 rounded bg-red-500 text-white"
                                >
                                    -
                                </button>

                                <span className="text-lg font-bold">
                                    {item.quantity || 1}
                                </span>

                                <button
                                    onClick={() => increaseQty(item.id)}
                                    className="h-8 w-8 rounded bg-green-500 text-white"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;