import React from 'react';
import Navbar from '../components/Navbar';
import ProductsCard from '../components/ProductsCard';
import { showProduct } from './ShowProduct';

const Page = async () => {
  const data = await showProduct();
  console.log("show :", data);

  // اگر ڈیٹا نہ آئے یا ایرر ہو
  if (!data || data.error || !data.data) {
    return (
      <div className="max-w-screen min-h-screen ">
        <Navbar />
        <div className="mt-20 text-center">
          <p className="text-red-500 text-xl">پروڈکٹس لوڈ نہیں ہو سکے۔ بعد میں کوشش کریں۔</p>
        </div>
      </div>
    );
  }

  const products = data.data;

  return (
    <div className="max-w-screen min-h-screen">
      <Navbar />

      <div className="mt-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductsCard
              key={product._id.toString()}
              _id={product._id.toString()}
              title={product.title}
              price={product.price}
              du={false}
            />
          ))
        ) : (
          <div className="col-span-full text-center mt-20">
            <p className="text-gray-500 text-xl font-medium">کوئی پروڈکٹ نہیں ملا</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;