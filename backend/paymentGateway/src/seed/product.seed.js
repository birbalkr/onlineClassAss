import mongoose from "mongoose";
import Product from "../model/product.model.js";

const products = [
    {
        title: "Laptop",
        description: "HP laptop 8GB RAM",
        price: { amount: 45000, currency: "INR" }
    },
    {
        title: "Mobile Phone",
        description: "Samsung smartphone 128GB",
        price: { amount: 18000, currency: "INR" }
    },
    {
        title: "Headphones",
        description: "Wireless Bluetooth headphones",
        price: { amount: 1500, currency: "INR" }
    },
    {
        title: "Keyboard",
        description: "Mechanical gaming keyboard",
        price: { amount: 2500, currency: "INR" }
    },
    {
        title: "Mouse",
        description: "Wireless optical mouse",
        price: { amount: 800, currency: "INR" }
    },
    {
        title: "Monitor",
        description: "24-inch Full HD monitor",
        price: { amount: 12000, currency: "INR" }
    },
    {
        title: "Smart Watch",
        description: "Fitness tracking smartwatch",
        price: { amount: 3000, currency: "INR" }
    },
    {
        title: "Power Bank",
        description: "10000mAh fast charging power bank",
        price: { amount: 1200, currency: "INR" }
    },
    {
        title: "USB Drive",
        description: "64GB USB 3.0 flash drive",
        price: { amount: 600, currency: "INR" }
    },
    {
        title: "Speaker",
        description: "Portable Bluetooth speaker",
        price: { amount: 2000, currency: "INR" }
    }
];

const seedProducts = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);

        console.log("10 products seeded successfully!");
    } catch (error) {
        console.log("Seed error:", error.message);
    }
};

export default seedProducts;