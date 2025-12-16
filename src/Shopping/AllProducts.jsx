import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Header";
import NewFooter from "../components/Footer/NewFooter";
import ProductBanner from "../assets/Images/ProductBanner.webp";
import Product1 from "../assets/Images/Product1.webp";
import Product2 from "../assets/Images/Product2.webp";
import Product3 from "../assets/Images/Product3.webp";
import Product4 from "../assets/Images/Product4.webp";
import Filter from "./Filter";
import axios from "axios";
import { BaseUrl } from "../components/BaseUrl/BaseUrl";

const AllProducts = () => {
  const allProducts = [
    {
      id: 1,
      title:
        "GOODYEAR 235/65 R17 EFFICIENT GRIP PERFORMANCE SUV 108V TUBELESS TYRE",
      price: "₹5,279",
      imgSrc: Product1,
    },
    {
      id: 2,
      title:
        "GOODYEAR 235/65 R17 EFFICIENT GRIP PERFORMANCE SUV 108V TUBELESS TYRE",
      price: "₹12,000",
      imgSrc: Product2,
    },
    {
      id: 5,
      title:
        "GOODYEAR 235/65 R17 EFFICIENT GRIP PERFORMANCE SUV 108V TUBELESS TYRE",
      price: "₹9,000",
      imgSrc: Product4,
    },
    {
      id: 3,
      title:
        "GOODYEAR 235/65 R17 EFFICIENT GRIP PERFORMANCE SUV 108V TUBELESS TYRE",
      price: "₹11,000",
      imgSrc: Product3,
    },
    {
      id: 4,
      title:
        "GOODYEAR 235/65 R17 EFFICIENT GRIP PERFORMANCE SUV 108V TUBELESS TYRE",
      price: "₹9,000",
      imgSrc:
        "https://img.freepik.com/premium-photo/tire-white-background-isolated-3d-illustration_356060-3301.jpg?w=740",
    },
    {
      id: 1,
      title:
        "GOODYEAR 235/65 R17 EFFICIENT GRIP PERFORMANCE SUV 108V TUBELESS TYRE",
      price: "₹5,279",
      imgSrc: Product1,
    },
    {
      id: 2,
      title:
        "GOODYEAR 235/65 R17 EFFICIENT GRIP PERFORMANCE SUV 108V TUBELESS TYRE",
      price: "₹12,000",
      imgSrc: Product2,
    },
    {
      id: 5,
      title:
        "GOODYEAR 235/65 R17 EFFICIENT GRIP PERFORMANCE SUV 108V TUBELESS TYRE",
      price: "₹9,000",
      imgSrc: Product4,
    },
    {
      id: 3,
      title:
        "GOODYEAR 235/65 R17 EFFICIENT GRIP PERFORMANCE SUV 108V TUBELESS TYRE",
      price: "₹11,000",
      imgSrc: Product3,
    },
    {
      id: 4,
      title:
        "GOODYEAR 235/65 R17 EFFICIENT GRIP PERFORMANCE SUV 108V TUBELESS TYRE",
      price: "₹9,000",
      imgSrc:
        "https://img.freepik.com/premium-photo/tire-white-background-isolated-3d-illustration_356060-3301.jpg?w=740",
    },
  ];
  const [Products, setProducts] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/getAllProducts`);
      console.log(response);
      if (response.data && response.data.data) {
        setProducts(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-white mb-10">
        {/* Banner */}
        <div className="w-screen">
          <img className="w-full" src={ProductBanner} alt="Product Banner" />
        </div>

        {/* {Products.map((product) => (
                    <tr key={product.product_id} className="text-gray-800 text-sm">
                        <td className="py-2 px-4 border-b">{product.title}</td>
                        <td className="py-2 px-4 border-b">
                            {product.images.length > 0 ? (
                                <img src={product.images} alt={product.title} />
                            ) : (
                                <span>No image available</span>
                            )}
                        </td>
                        <td className="py-2 px-4 border-b">{product.description}</td>
                        <td className="py-2 px-4 border-b">{product.tyre_brand}</td>
                        <td className="py-2 px-4 border-b">{product.vehicle_varient}</td>
                        <td className="py-2 px-4 border-b">
                            <button
                                onClick={() => {
                                    setIsModalOpen(true);
                                    setCurrentProductId(product.product_id);
                                    setFormData({
                                        ...formData,
                                        ...product,
                                        vehicle_ids: product.vehicle_ids.join(', '),
                                        images: []
                                    });
                                }}
                                className="bg-blue-500 text-white py-1 px-3 rounded-md">Edit</button>
                            <button onClick={() => handleDelete(product.product_id)} className="bg-red-500 text-white py-1 px-3 rounded-md">Delete</button>
                        </td>
                    </tr>
                ))} */}

        <section className=" flex flex-col lg:flex-row mt-10">
          <div className="lg:w-[20%]">
            <Filter />
          </div>
          {/* {map.allProducts} */}
          <section className="w-full lg:w-4/5 lg:ml-6 bg-gray-100 py-12">
            <div className="grid  grid-cols-2  md:grid-cols-3 gap-2 md:gap-4 lg:w-[85%] mx-1 lg:mx-auto">
              {allProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white w-full  border border-black mx-auto"
                >
                  <div className="sm:w-4/5 mx-auto">
                    <img
                      src={product.imgSrc}
                      alt={product.title}
                      className="object-contain max-h-44 mx-auto sm:max-h-56"
                    />
                  </div>
                  <div className="p-2 lg:p-4">
                    <h3 className="text-gray-800 font-medium text-sm sm:text-base mb-2 line-clamp-2 sm:line-clamp-none">
                      {product.title}
                    </h3>
                    <span className="text-black text-lg font-medium">
                      {product.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
      <NewFooter />
    </>
  );
};

export default AllProducts;
