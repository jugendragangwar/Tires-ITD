import Photo1 from "../assets/Images/Product1.webp";
import image2 from "../assets/Images/Product1.webp";
import image3 from "../assets/Images/Product1.webp";
import image4 from "../assets/Images/Product1.webp";
import image5 from "../assets/Images/Product1.webp";
import img6 from "../assets/Images/Product1.webp";

// Array to hold all image paths
const images = [image2, image3, image4, image5, img6];

const Card = () => {
    return (
        <>
            <div className="container mx-auto px-4 mt-20">
                {/* Product Display Section */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    {/* Product Images */}
                    <div className="flex justify-center">
                        <div className="flex max-w-[300px] border-2 border-indigo-600">
                            {/* Thumbnail Images */}
                            <div className="w-16 m-4 space-y-1.5">
                                {images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Product view ${index + 1}`}
                                        className="border-2 border-indigo-600 bg-slate-200"
                                    />
                                ))}
                            </div>
                            {/* Main Product Image */}
                            <div className="flex-1">
                                <img src={Photo1} alt="Main product" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-4">
                        <h1 className="font-bold text-2xl">High-Performance Tyre</h1>
                        <p className="font-semibold">
                            CEAT 140/80 ZR17 GRIPP RAD STEEL (Steel Radial) 69H TUBELESS TYRE | Rear
                        </p>
                        <p className="font-semibold text-lg">
                            ₹5,599 <span className="line-through text-gray-500">₹6,294</span>{" "}
                            <span className="text-green-600">(10% Off)</span>
                        </p>
                        <p className="font-semibold text-sm text-gray-600">
                            6 Year Manufacturer Warranty
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="flex-1 bg-[#F75D34] h-14 text-white text-lg rounded-lg shadow-md hover:bg-[#e0522f] active:bg-[#c74428] transition-all duration-300">
                                ADD TO CART
                            </button>
                            <button className="flex-1 bg-[#F75D34] h-14 text-white text-lg rounded-lg shadow-md hover:bg-[#e0522f] active:bg-[#c74428] transition-all duration-300">
                                BUY NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Specifications Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <section className="space-y-4">
                    <h3 className="font-bold text-2xl">Specifications</h3>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className="font-bold">Width</span>
                            <span>140</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">Rim Size</span>
                            <span>17</span>
                        </div>
                        <div className="space-y-1">
                            <span className="font-bold">Warranty</span>
                            <p className="text-sm text-gray-600">
                                Manufacturing Warranty starts from the date of Manufacturing, and Special Warranty starts from the date of Sale (as applicable).
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">Manufacturer's Warranty</span>
                            <span>6</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">Country of Manufacture</span>
                            <span>India</span>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h3 className="font-bold text-2xl">Features</h3>
                    <p className="text-gray-600">Feature details go here.</p>
                </section>

                <section className="space-y-4">
                    <h3 className="font-bold text-2xl">Warranty</h3>
                    <p className="text-gray-600">Warranty information goes here.</p>
                </section>
            </div>
        </>
    );
};

export default Card;