import React from 'react';
import Navbar from '../components/Navbar';
import AddProductform from '../components/AddProductform';
import ProductsCard from '../components/ProductsCard';
import { showProduct } from '../(users)/ShowProduct';
import UpdateCardUi from '../components/UpdateCardUi';

const page = async () => {
  let data;
  try {
    data = await showProduct();
  } catch (error) {
    console.error('Error fetching products:', error);
    data = { data: [] }; // Fallback to empty array on error
  }

  // Early return if no data
  if (!data?.data) {
    return (
      <div className='max-w-screen max-h-screen'>
        <Navbar className="w-full" />
        <p className='bg-red-500 text-white p-2 rounded-sm w-fit text-center'>
          No products data available. Please try again.
        </p>
        <div className='flex flex-wrap'>
          <AddProductform />
          <UpdateCardUi />
        </div>
      </div>
    );
  }

  const products = data.data || []; // Ensure it's always an array

  return (
    <div className='max-w-screen max-h-screen'>
      <Navbar className="w-full" />

      {/* Fixed: Use optional chaining and fallback to 0 */}
      {products.length > 0 && (
        <p className='bg-green-500 text-2xl text-blue-200 font-mono p-2 rounded-sm w-fit text-center'>
          {products.length}
        </p>
      )}

      <div className='flex flex-wrap'>
        <AddProductform />
        <UpdateCardUi />
      </div>
      <hr className='text-gray-900 my-2' />

      <div className='mt-4 flex flex-wrap justify-center w-full gap-4'>
        {products.length === 0 ? (
          <p className='text-gray-500 text-center w-full'>No products to display.</p>
        ) : (
          products.map((product) => (
            <ProductsCard
              key={product._id?.toString() || Math.random().toString()} // Fallback key if _id missing
              _id={product._id?.toString()}
              title={product.title || 'Untitled'}
              price={product.price || 0}
              du={true}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default page;