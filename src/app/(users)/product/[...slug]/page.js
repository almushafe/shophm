import Navbar from '@/app/components/Navbar';
import ProductPageOpen from '@/app/components/ProductPageOpen';
import { showProduct } from '../../ShowProduct';
import { ObjectId } from 'mongodb';
import React from 'react';

const Page = async ({ params }) => {
  let product = null;
  try {
    const slug = params.slug?.[0]; // Extract first segment from catch-all route
    if (!slug || !ObjectId.isValid(slug)) {
      console.log('Invalid slug:', slug);
      return (
        <div>
          <Navbar />
          <div className="px-40 py-4">
            <p className="text-red-500">Invalid product ID</p>
          </div>
        </div>
      );
    }

    const data = await showProduct(); // Fetch product data
    console.log('Fetched data:', data); // Log for debugging

    // Ensure data.data is an array and find the matching product
    if (data?.data && Array.isArray(data.data)) {
      product = data.data.find(item => item._id.toString() === slug);
      if (product) {
        console.log('Matching product:', product);
      } else {
        console.log('No product found for slug:', slug);
      }
    } else {
      console.log('Invalid data format from showProduct:', data);
    }
  } catch (err) {
    console.error('Error fetching product:', err);
  }

  return (
    <div>
      <Navbar />
      <div className="px-40 py-4">
        {product ? (
          <ProductPageOpen 
            title={product.title || 'Untitled Product'} 
            price={product.price || 200} 
          />
        ) : (
          <p className="text-red-500">Product not found</p>
        )}
      </div>
    </div>
  );
};

export default Page;