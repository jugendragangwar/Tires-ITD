import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Filter = () => {
    const dropdownOptions = {
        categories: false,
        price: false,
        brand: false,
        type: false,
        discount: false,
        size: false,
        selectModel: false,
    };

    const [dropdowns, setDropdowns] = useState(dropdownOptions);
    const [activeFilter, setActiveFilter] = useState(null);

    const toggleDropdown = (filter) => {
        if (activeFilter === filter) {
            setActiveFilter(null);
            setDropdowns((prev) => ({ ...prev, [filter]: false }));
        } else {
            setActiveFilter(filter);
            setDropdowns((prev) => {
                const newState = { ...dropdownOptions };
                newState[filter] = true;
                return newState;
            });
        }
    };

    const filters = [
        { label: 'Categories', key: 'categories', options: ['Clothing', 'Electronics', 'Books', 'Sports'] },
        { label: 'Price', key: 'price', options: ['Under $50', '$50-$100', '$100-$200', 'Over $200'] },
        { label: 'Brand', key: 'brand', options: ['Nike', 'Adidas', 'Puma', 'Reebok'] },
        { label: 'Type', key: 'type', options: ['New Arrival', 'Best Seller', 'Featured', 'Sale'] },
        { label: 'Discount', key: 'discount', options: ['10% Off', '20% Off', '30% Off', '50% Off'] },
        { label: 'Size', key: 'size', options: ['S', 'M', 'L', 'XL'] },
        { label: 'SelectModel', key: 'selectModel', options: ['Basic', 'Premium', 'Deluxe', 'Ultimate'] },
    ];

    return (
        <div className="bg-gray-100 h-full">
            <p className="lg:text-center w-full text-3xl font-medium border-b border-gray-300 py-2 px-4 uppercase">
                Filter
            </p>

            {/* Mobile Layout */}
            <div className="lg:hidden">
                <div className="flex flex-row overflow-x-auto py-4 px-2 gap-2">
                    {filters.map((filter) => (
                        <div key={filter.key} className="relative flex-shrink-0">
                            <button
                                onClick={() => toggleDropdown(filter.key)}
                                className={`flex items-center gap-2 px-4 py-2
                                    ${dropdowns[filter.key]
                                        ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'
                                    } transition-all duration-200`}
                            >
                                <span className="whitespace-nowrap">{filter.label}</span>
                                {dropdowns[filter.key] ? <FaChevronUp /> : <FaChevronDown />}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Mobile Dropdown Content */}
                {activeFilter && (
                    <div className="fixed inset-x-0 top-auto z-50 bg-gray-100 w-[98%]">
                        <div className="p-4">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold">{filters.find(f => f.key === activeFilter)?.label}</h3>
                                <button
                                    onClick={() => setActiveFilter(null)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {filters.find(f => f.key === activeFilter)?.options.map((option, index) => (
                                    <button
                                        key={index}
                                        className="px-4 py-3 text-left rounded-lg hover:bg-gray-100 transition-colors"
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex flex-col mt-2 p-4">
                {filters.map((filter) => (
                    <div key={filter.key} className="relative">
                        <button
                            onClick={() => toggleDropdown(filter.key)}
                            className="flex justify-between items-center w-[13vw] py-4 px-4 border-b border-gray-300 hover:bg-gray-200 text-gray-900"
                        >
                            <span>{filter.label}</span>
                            {dropdowns[filter.key] ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                        {dropdowns[filter.key] && (
                            <ul className="absolute mt-2 w-full bg-white rounded-md divide-y divide-gray-200 shadow-lg z-50">
                                {filter.options.map((option, index) => (
                                    <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Filter;