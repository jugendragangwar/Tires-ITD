import React from 'react'
import {FiSearch } from "react-icons/fi";

const SearchBar = () => {
    return (
        <div className="flex items-center bg-white rounded-full py-1 px-2 ">
            <FiSearch className="text-lg text-black" />
            <input
                className="bg-transparent outline-none px-2 text-lg text-black "
                placeholder="Search"
                type="search"
                name=""
                id=""
            />
        </div>
    )
}

export default SearchBar
