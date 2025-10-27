// آپ کا ایکشن فائل (مثال کے طور پر actions.js)
"use server";

import main from "../../../lib/connectDB"; // درست ایکسپورٹ درآمد کریں

export const AddProductAction = async (formData) => {
    try {
        const { title, price } = Object.fromEntries(formData.entries());
        const db = await main(); // ڈیٹابیس حاصل کریں
        const ProductsCol = db.collection('Product'); // کلیکشن حاصل کریں
        await ProductsCol.insertOne({ title, price: Number(price) }); // price کو نمبر میں تبدیل کریں
        console.log("Product Shamil Ho Gya", title, price);
        return { success: true, message: "پروڈکٹ کامیابی سے شامل ہو گیا" };
    } catch (error) {
        console.error("Product Kharab ho gya", error);
        return { success: false, message: "Not add product" };
    }
};