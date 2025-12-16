import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Apollo Amazer 4G Life",
      price: 5196,
      image: "path/to/image1.jpg",
    },
    {
      id: 2,
      name: "CEAT SecuraDrive",
      price: 7401,
      image: "path/to/image2.jpg",
    },
    {
      id: 3,
      name: "Bridgestone Sturdo",
      price: 10814,
      image: "path/to/image3.jpg",
    },
  ]);

  const removeFromWishlist = (id) => {
    const removedItem = wishlist.find((item) => item.id === id);
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
    toast.error(`${removedItem.name} removed from wishlist!`);
  };

  const clearWishlist = () => {
    setWishlist([]);
    toast.warn("Wishlist cleared!");
  };

  return (
    <div className="container mx-auto p-4">
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500">Your wishlist is empty.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 flex flex-col items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-contain mb-4"
                />
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-gray-500">Price: ₹{item.price}</p>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="mt-2 bg-red-500 text-white py-2 px-4 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={clearWishlist}
              className="bg-red-500 text-white py-2 px-6 rounded"
            >
              Clear Wishlist
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default WishlistPage;
