import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const products = [
  {
    title: "Vanilla Delight",
    img: "https://i.pinimg.com/736x/3c/ba/5a/3cba5ad7b32315de150257cc5fe8531b.jpg",
    alt: "Vanilla Donut",
    price: 500,
  },
  {
    title: "Chocolate Dream",
    img: "https://i.pinimg.com/736x/c0/97/b4/c097b4a35085b57218a08f22d039715e.jpg",
    alt: "Chocolate Donut",
    price: 500,
  },
  {
    title: "Strawberry Swirl",
    img: "https://i.pinimg.com/736x/e6/ad/9e/e6ad9ed637a0fcbb0e36490a6dc3f1cf.jpg",
    alt: "Strawberry Donut",
    price: 500,
  },
  {
    title: "Caramel Bliss",
    img: "https://i.pinimg.com/736x/f3/08/cb/f308cbf7c2b8a9b6792d85bcabbb5f9f.jpg",
    alt: "Caramel Donut",
    price: 500,
  },
  {
    title: "Matcha Magic",
    img: "https://i.pinimg.com/736x/9f/d3/0d/9fd30d011d70c4bfda64de6fa2765fa1.jpg",
    alt: "Matcha Donut",
    price: 500,
  },
];

export default function ProductSection() {
  return (
    <div className="bg-pink-200 py-12 text-center">
      <h2 className="text-3xl font-bold text-pink-700 mb-8">🍩 Our Sweet Picks</h2>

      <div className="flex justify-center gap-10 flex-wrap px-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-3xl shadow-xl w-64 transform transition-transform duration-300 hover:scale-105 hover:shadow-pink-400"
          >
            {/* Heart Icon Top Right */}
            <div className="absolute top-4 right-4 text-pink-400 hover:text-pink-600 cursor-pointer">
              <FaHeart />
            </div>

            {/* Image */}
            <img
              src={product.img}
              alt={product.alt}
              className="w-28 h-28 object-cover mx-auto mb-4 rounded-full border-4 border-pink-100"
            />

            {/* Title & Price */}
            <h3 className="font-bold text-lg text-gray-800">{product.title}</h3>
            <p className="text-gray-500 text-sm mt-1 mb-3">Rs. {product.price}</p>

            {/* Order Button */}
            <button className="bg-pink-500 text-white px-4 py-2 mt-2 rounded-full flex items-center gap-2 justify-center hover:bg-pink-600 transition">
              <FaShoppingCart />
              Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
