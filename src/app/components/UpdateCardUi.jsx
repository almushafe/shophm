'use client';
import {UbdateFunction} from "../admin/Ubdate"

const AddProductForm = () => {

  return (
    <div>
      <form action={UbdateFunction}>
        <div className="bg-gray-500 m-2 rounded-sm">
            <h1 className="bg-gray-950 text-gray-600 mb-2 p-2 text-2xl font-bold ">Create New Product </h1>
          <label htmlFor="price" className="text-xl p-2 bg-gray-800 rounded-sm text-gray-200 m-2">
            id
          </label>
          <input
            type="text"
            name='id'
            // value={price}
            className="bg-gray-800 focus:outline-none w-full p-2"
          />
        </div>
        <div className="bg-gray-500 m-2 rounded-sm">
          <label htmlFor="title" className="text-xl bg-gray-800 p-2 rounded-sm text-gray-200 m-2">
            Title
          </label>
          <input
            type="text"
            name='title'
            // value={title}
            className="bg-gray-800 focus:outline-none w-full p-2"
          />
        </div>
        <div className="bg-gray-500 m-2 rounded-sm">
          <label htmlFor="price" className="text-xl p-2 bg-gray-800 rounded-sm text-gray-200 m-2">
            Price
          </label>
          <input
            type="number"
            name='price'
            // value={price}
            className="bg-gray-800 focus:outline-none w-full p-2"
          />
        </div>
        <div className="m-2">
          <button className="w-full bg-purple-950 rounded-2xl p-2 text-xl">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;