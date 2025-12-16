import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../assets/Images/Logo.webp";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { navLinks } from "../../Constants/Constant";
import axios from "axios";
import { BaseUrl } from '../BaseUrl/BaseUrl'
import Profile from "../../Pages/login/Profile";


const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    useEffect(() => {
        const token = localStorage.getItem('Logintoken');
        if (token) {
            setIsLoggedIn(true);
        }
    }, [])

    const handleLogout = () => {
        localStorage.clear("Logintoken")
        toast.success("Logout successfully");
        setIsLoggedIn(false);
    };

    const handleProfileUpdate = async () => {
        try {
            const response = await axios.put(`${BaseUrl}/user/updateUser/${user_Id}`)
        }
        catch {

        }
    }




    return (
        <header className="bg-[#FFF2D7] text-black py-1">
            <div className=" px-1 md:px-1 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link>
                    <img className=" w-[60px]" src={Logo} alt="Logo" />
                </Link>
                {/* Search Bar */}

                {/* Desktop Menu */}
                <nav className="hidden  lg:flex justify-between w-[35%] text-slate-800">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className=" hover:text-blue-800"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
                <div className="hidden md:block w-[24%]">
                    <SearchBar />
                </div>
                {/* Signin , Register And cart Button*/}
                <div className="space-x-4 md:flex">

                    <div>
                        {isLoggedIn ? (
                            <button
                                onClick={handleLogout}
                                className="bg-white hidden md:flex text-black py-[2px] px-6 rounded-full hover:bg-blue-100 transition-all"
                            >
                                Logout
                            </button>
                        ) : (
                            <a href="login">
                                <button
                                    className="bg-white hidden md:flex text-black py-[2px] px-6 rounded-full hover:bg-blue-100 transition-all"
                                >
                                    Sign In
                                </button>
                            </a>
                        )}
                    </div>
                    <a href="RegistrationForm">
                        <button className="bg-[#D9D9D9] hidden md:flex  text-black py-[2px] px-5 rounded-full hover:bg-yellow-300 transition-all">
                            Register
                        </button>
                    </a>

                    <button>
                    </button>
                    <button className="text-2xl">
                        <Link to='cart'>
                            <FiShoppingCart />
                        </Link>
                    </button>

                    <button
                        className="lg:hidden text-black"
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>
            {/* Search bar for  Mobile*/}
            <div className="w-[80%] mx-auto md:hidden">
                <SearchBar />
            </div>

            {/* Mobile Navigation */}
            <div
                className={`absolute  top-0 left-0 w-full h-screen bg-[#FFF2D7] z-50 transform transition-transform duration-500 ease-in-out mt-16 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                id="mobile-menu"
            >
                <ul className="flex flex-col items-start gap-4 text-base font-medium  mt-2 z-10 mb-2">
                    {navLinks.map((item) => (
                        <li key={item.name} className="w-full px-2 text-slate-900 hover:bg-gray-300">
                            <a
                                href={item.href}
                                className="w-full"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="space-x-4 flex  border-t-4 border-[#b6a075] justify-start py-4">
                    <div className="mx-1">
                        {isLoggedIn ? (
                            <button
                                onClick={handleLogout}
                                className="bg-white   text-black py-[12px] px-6 rounded hover:bg-red-500 transition-all"
                            >
                                Logout
                            </button>
                        ) : (
                            <a href="login">
                                <button
                                    className="bg-blue-100  text-black py-[12px] px-6 rounded  hover:bg-blue-300 transition-all"
                                >
                                    Sign In
                                </button>
                            </a>
                        )}
                    </div>
                    <a href="RegistrationForm">
                        <button className="bg-[#D9D9D9]   text-black py-[12px] px-6 rounded hover:bg-yellow-300 transition-all">
                            Register
                        </button>
                    </a>
                </div>
            </div>

            <ToastContainer />
        </header>
    );
};

export default Header;