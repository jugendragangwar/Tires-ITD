import React, { useState } from 'react';
import { FiUser } from "react-icons/fi";
import axios from 'axios';

const Profile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
    });
    // const token = localStorage.get("token")
    // console.log(token)
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleProfileUpdate = async () => {
        try {
            const response = await axios.put(
                `${BaseUrl}/user/updateUser/${user_Id}`,
                formData
            );
            if (response.status === 200) {
                alert('Profile updated successfully!');
                toggleModal();
            }
        } catch (error) {
            // console.error('Error updating profile:', error);
            alert('Failed to update profile. Please try again later.');
        }
    };

    return (
        <>
            <div>
                {/* User Icon */}
                <button onClick={toggleModal} className="text-2xl">
                    <FiUser />
                </button>
            </div>
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center z-50">
                    <div className="bg-white w-full max-w-md h-auto p-6 mx-4 sm:mx-auto rounded-lg shadow-lg">
                        <h2 className="text-lg font-semibold">Update Your Information</h2>
                        <p className="text-sm text-gray-800 mb-4">
                            Easily edit your name, email address, and other personal details to keep your profile up-to-date.
                        </p>

                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-sm text-left text-gray-600">
                                    Person Name
                                </label>
                                <input
                                    id="name"
                                    className="Input_Box"
                                    type="text"
                                    placeholder="Enter Person Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-sm text-left text-gray-600">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    className="Input_Box"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="address" className="text-sm text-left text-gray-600">
                                    Address
                                </label>
                                <input
                                    id="address"
                                    className="Input_Box"
                                    type="text"
                                    placeholder="Enter your Address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </form>
                        <div className="flex justify-end mt-6 gap-3">
                            <button
                                className="px-4 py-2 bg-gray-500 text-white hover:bg-gray-600 transition-all duration-200"
                                onClick={toggleModal}
                            >
                                Close
                            </button>
                            <button
                                className="px-4 py-2 bg-green-500 text-white hover:bg-green-600 transition-all duration-200"
                                onClick={handleProfileUpdate}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Profile;
