import React, { useState } from 'react';
import Img1 from '../../assets/Images/SearchBg.webp';
import Img2 from '../../assets/Images/SearchLeftImage.webp';

const Find = () => {
    const [location, setLocation] = useState(null);
    const [permissionDenied, setPermissionDenied] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState('car');

    const handleGetLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                    setPermissionDenied(false);
                },
                (error) => {
                    if (error.code === error.PERMISSION_DENIED) {
                        setPermissionDenied(true);
                    } else {
                        console.error('Error getting location:', error);
                        alert('Unable to retrieve your location.');
                    }
                }
            );
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    };

    return (
        <div className="relative Section-Margin">
            <img src={Img1} alt="Background" className="absolute inset-0 w-full h-full object-cover" />

            <div className="relative flex flex-col md:flex-row items-center justify-between sm:container sm:mx-auto py-4 px-2">
                {/* Left image */}
                <div className="w-full lg:w-1/2 ">
                    <h1 className="main-Heading text-black">BEST CHOICE</h1>
                    <img src={Img2} alt="Tires" className="mx-auto" />
                </div>
                {/* Form */}
                <div className="w-full lg:w-1/2 bg-gray-200 py-6 px-2 md:px-10  mx-auto rounded-xl">
                    <h2 className="font-semibold text-xl md:text-2xl text-center mb-4 text-gray-800">Find the Perfect Tyre Supplier Nearby</h2>
                    <div className="flex space-x-4 mb-4  mx-auto">
                        <button
                            onClick={() => setSelectedVehicle('car')}
                            className={`flex-1 text-sm font-medium py-2 border rounded-md transition-all ${selectedVehicle === 'car' ? 'bg-blue-800 text-white' : 'bg-white text-blue-800'
                                }`}
                        >
                            Car Tyres
                        </button>
                        <button
                            onClick={() => setSelectedVehicle('heavyVehicle')}
                            className={`flex-1 text-sm font-medium py-2 border rounded-md transition-all ${selectedVehicle === 'heavyVehicle' ? 'bg-blue-800 text-white' : 'bg-white text-blue-800'
                                }`}
                        >
                            Heavy Vehicle
                        </button>
                    </div>

                    {selectedVehicle === 'car' && (
                        <div>
                            <div className="flex items-center justify-center space-x-4 mb-4">
                                <label className="flex items-center space-x-2 text-gray-800">
                                    <input type="radio" name="vehicleType" value="car" defaultChecked />
                                    <span className='text-sm md:text-base'>By Vehicle</span>
                                </label>
                                <label className="flex items-center space-x-2 text-gray-800">
                                    <input type="radio" name="vehicleType" value="bike" />
                                    <span className='text-sm md:text-base'>By Size</span>
                                </label>
                                <label className="flex items-center space-x-2 text-gray-800">
                                    <input type="radio" name="vehicleType" value="bike" />
                                    <span className='text-sm md:text-base'>By Brand</span>
                                </label>
                            </div>

                            <div className="space-y-4 ">
                                <select className="w-full px-4 py-2 border rounded-md bg-white text-gray-700 focus:border-blue-800 focus:outline-none" defaultValue="">
                                    <option value="" disabled>
                                        Choose Brand
                                    </option>
                                    <option value="brand1">Brand 1</option>
                                    <option value="brand2">Brand 2</option>
                                    <option value="brand3">Brand 3</option>
                                </select>

                                <select className="w-full px-4 py-2 border rounded-md bg-white text-gray-700 focus:border-blue-800 focus:outline-none" defaultValue="">
                                    <option value="" disabled>
                                        Choose Model
                                    </option>
                                    <option value="model1">Model 1</option>
                                    <option value="model2">Model 2</option>
                                    <option value="model3">Model 3</option>
                                </select>

                                <select className="w-full px-4 py-2 border rounded-md bg-white text-gray-700 focus:border-blue-800 focus:outline-none" defaultValue="">
                                    <option value="" disabled>
                                        Choose Variant
                                    </option>
                                    <option value="variant1">Variant 1</option>
                                    <option value="variant2">Variant 2</option>
                                    <option value="variant3">Variant 3</option>
                                </select>
                            </div>

                            <div className="mt-4">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                handleGetLocation();
                                            } else {
                                                setLocation(null);
                                                setPermissionDenied(false);
                                            }
                                        }}
                                        className="form-checkbox"
                                    />
                                    <span className='text-gray-700'>Allow location access</span>
                                </label>

                                {location && (
                                    <div className="mt-2 text-sm text-gray-700">
                                        <p>Latitude: {location.latitude}</p>
                                        <p>Longitude: {location.longitude}</p>
                                    </div>
                                )}

                                {permissionDenied && (
                                    <div className=" text-red-500">
                                    </div>
                                )}
                            </div>

                            <button className="w-full mt-6 py-2 bg-[#213c87] text-white font-bold rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Search
                            </button>

                        </div>
                    )}

                    {selectedVehicle === 'heavyVehicle' && (
                        <div>
                            <div className="flex items-center justify-center space-x-4 mb-4">
                                <label className="flex items-center space-x-2">
                                    <input type="radio" name="vehicleType" value="car" defaultChecked />
                                    <span>By Vehicle</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="radio" name="vehicleType" value="bike" />
                                    <span>By Size</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="radio" name="vehicleType" value="bike" />
                                    <span>By Brand</span>
                                </label>
                            </div>

                            <div className="space-y-4">
                                <select className="w-full px-4 py-2 border rounded-md" defaultValue="">
                                    <option value="" disabled>
                                        Choose Brand
                                    </option>
                                    <option value="brand1">Brand 1</option>
                                    <option value="brand2">Brand 2</option>
                                    <option value="brand3">Brand 3</option>
                                </select>

                                <select className="w-full px-4 py-2 border rounded-md" defaultValue="">
                                    <option value="" disabled>
                                        Choose Model
                                    </option>
                                    <option value="model1">Model 1</option>
                                    <option value="model2">Model 2</option>
                                    <option value="model3">Model 3</option>
                                </select>

                                {/* <select className="w-full px-4 py-2 border rounded-md" defaultValue="">
                                    <option value="" disabled>
                                        Choose Variant
                                    </option>
                                    <option value="variant1">Variant 1</option>
                                    <option value="variant2">Variant 2</option>
                                    <option value="variant3">Variant 3</option>
                                </select> */}
                            </div>

                            <div className="mt-4">
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                handleGetLocation();
                                            } else {
                                                setLocation(null);
                                                setPermissionDenied(false);
                                            }
                                        }}
                                        className="form-checkbox"
                                    />
                                    <span>Allow location access</span>
                                </label>

                                {location && (
                                    <div className="mt-2 text-sm text-gray-700">
                                        <p>Latitude: {location.latitude}</p>
                                        <p>Longitude: {location.longitude}</p>
                                    </div>
                                )}

                                {permissionDenied && (
                                    <div className="mt-2 text-sm text-red-500">
                                        <p>Location access was denied. Please allow location access in your browser settings.</p>
                                    </div>
                                )}
                            </div>


                            <button className="w-full mt-6 py-2 bg-[#213c87] text-white font-bold rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Search
                            </button>

                        </div>
                    )}





                </div>
            </div>
        </div>
    );
};

export default Find;
