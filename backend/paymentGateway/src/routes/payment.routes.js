import { Router } from "express";
import productModel from '../model/product.model.js'
import razorpayInstance from "../config/razorpay.js";
import paymentModel from "../model/payment.model.js";

const router = Router()


router.post("/:productId/order", async (req, res) => {
    const { productId } = req.params;

    const product = await productModel.findById(productId)

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    const order = await razorpayInstance.orders.create({
        amount: product.price.amount * 100,
        currency: product.price.currency,
        receipt: `order_rcptid_${productId}`,
        notes: {
            productId: productId,
            productTitle: product.title
        }
    })

    const payment = (await paymentModel.create({
        orderId: order.id,
        productId: productId,
        amount: product.price.amount,
        currency: product.price.currency,
        status: "pending",
        product: product
    })).toObject()

    return res.status(201).json({ ...payment, keyId: razorpayInstance.key_id })
})

export default router