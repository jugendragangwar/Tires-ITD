import React, { useState } from 'react';
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Footer from '../../components/footer/NewFooter';
import Navbar from '../../components/navbar/Header';
import axios from 'axios';
import { BaseUrl } from '../../components/BaseUrl/BaseUrl';

const ContactSection = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNo: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const contact = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${BaseUrl}/user/createContact`, formData);
            console.log('Response:', response.data);
            if (response.status === 200 || response.status === 201) {
                window.alert('Your message has been sent successfully!');
            }
        } catch (error) {
            console.error('Error:', error);
            window.alert('There was an error sending your message. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="mt-6 mb-6">
                <div className="grid sm:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-4xl bg-gray-200 rounded-md">
                    <div>
                        <h1 className="font-bold text-3xl text-[#2C3E50]">Let's Talk</h1>
                        <p className="text-base mt-2 text-[#204c6a] mb-2">
                            Have some big idea or brand to develop and need help? Then reach out we'd love to hear
                            about your project and provide help.
                        </p>

                        {/* Socials Section */}
                        <div className="mt-12">
                            <ul className="flex mt-4 space-x-4">
                                <li className="bg-[#ffffffcf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                        <FaFacebookF className="text-[#007bff]" size={20} />
                                    </a>
                                </li>
                                <li className="bg-[#ffffffcf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedinIn className="text-[#007bff]" size={20} />
                                    </a>
                                </li>
                                <li className="bg-[#ffffffcf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram className="text-[#007bff]" size={20} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="ml-auto space-y-4" onSubmit={contact}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="Input_Box"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="Input_Box"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            name="phoneNo"
                            placeholder="Phone No"
                            className="Input_Box"
                            value={formData.phoneNo}
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="6"
                            className="Input_Box"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <button
                            className={`bg-[#1f5070] w-full text-white py-2 rounded-lg hover:scale-105 duration-300 hover:bg-[#1f5070] font-medium ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send'}
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContactSection;