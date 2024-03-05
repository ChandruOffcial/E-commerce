import { HiBars3 } from "react-icons/hi2";
import { FaRegUser, FaRegHeart, FaInstagram, FaLinkedinIn, FaTwitter, FaSortAmountDown } from "react-icons/fa";
import { GrAppsRounded } from "react-icons/gr";
import { BiShoppingBag } from "react-icons/bi";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import "../../components.css"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle drawer state
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="container-fluid px-3  h-16 md:h-14 md:pr-8 flex items-center justify-between lg:hidden">
                {/* Drawer */}
                <div className="drawer md:hidden">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={isOpen} onChange={toggleDrawer} />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer" className="drawer-button inline-block"><HiBars3 className="h-7 w-7" /></label>
                    </div>
                    <div className="drawer-side z-10">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content ">
                            {/* Sidebar head content here */}
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="font-bold text-lg text-[#3474d4]">My Menu</h2>
                                <p className="uppercase font-bold text-3xl" onClick={toggleDrawer}>×</p>
                            </div>
                            <hr className="" />
                            <p className="mt-3 font-semibold uppercase cursor-pointer hover:underline underline-offset-2 duration-200">Home</p>
                            <p className="mt-3 font-semibold uppercase cursor-pointer hover:underline underline-offset-2 duration-200">About</p>
                            <p className="mt-3 font-semibold uppercase cursor-pointer hover:underline underline-offset-2 duration-200">Products</p>
                            <p className="mt-3 font-semibold uppercase cursor-pointer hover:underline underline-offset-2 duration-200">Contact</p>
                            <p className="mt-3 font-semibold uppercase cursor-pointer hover:underline underline-offset-2 duration-200">Offers</p>
                            <p className="mt-3 font-semibold uppercase cursor-pointer hover:underline underline-offset-2 duration-200">Blog</p>

                        </ul>
                    </div>
                </div>
                <div className="hidden md:flex">
                    <p className="text-[13px] pl-4 uppercase text-[#777]"><span>Free Shipping</span>This Week Order Over - $75</p>
                </div>
                <div className=" flex justify-center items-center space-x-5">
                    <FaRegUser className="h-5 w-5 md:h-7 md:w-7" />
                    <div className="relative">
                        <FaRegHeart className="h-5 w-5 md:h-7 md:w-7" />
                        <div className="absolute -bottom-2 -right-1 flex justify-center items-center bg-[#777777] rounded-full  h-4 w-4">
                            <span className=" text-white font-bold text-[12px]">0</span>
                        </div>
                    </div>
                    <div className="relative">
                        <BiShoppingBag className="h-6 w-6 md:h-8 md:w-8" />
                        <div className="absolute -bottom-1 -right-2 flex justify-center items-center bg-[#777777] rounded-full  h-4 w-4">
                            <span className=" text-white font-bold text-[12px]">0</span>
                        </div>
                    </div>
                    <div>
                        <GrAppsRounded className="h-6 w-6 md:h-7 md:w-7" />
                    </div>
                    <div className="hidden md:flex">
                        <div className="drawer ">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={isOpen} onChange={toggleDrawer} />
                            <div className="drawer-content">
                                <label htmlFor="my-drawer" className="drawer-button inline-block"><HiBars3 className="h-7 w-7 md:h-10 md:w-10" /></label>
                            </div>
                            <div className="drawer-side z-10">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content ">
                                    {/* Sidebar head content here */}
                                    <div className="flex justify-between items-center mb-2">
                                        <h2 className="font-bold text-lg text-[#3474d4]">My Menu</h2>
                                        <p className="uppercase font-bold text-3xl" onClick={toggleDrawer}>×</p>
                                    </div>
                                    <hr className="" />

                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <hr className="lg:hidden" />
            <div className="container-fluid flex flex-col md:flex-row md:justify-between md:px-4 md:mt-3 justify-center items-center lg:hidden">

                {/* Image */}
                <div className="flex justify-center items-center mb-4 mt-2">
                    <img src="logo/logo.png" alt="logo" className="h-6 md:h-9" />
                </div>
                {/* Search Box */}
                <div className="flex justify-center items-center pb-5">
                    <form className="mx-auto relative">
                        <input
                            className="block w-[300px] md:w-[380px] min-h-11 h-11 px-4 py-3 text-base font-normal leading-normal text-gray-700 border border-solid border-blue-500 rounded-md focus:border-blue-500 focus:outline-none mx-3"
                            type="text"
                            placeholder="Search your products.."
                        />
                        <button type="submit" className=" absolute top-3 right-6"><IoSearchOutline className="h-6 w-6" /></button>
                    </form>
                </div>
            </div>

            {/* Laptop View */}
            <div className="hidden lg:flex">
                <div className="container  mx-auto">
                    {/* Social Icon Section */}
                    <div className="container-fluid flex justify-between items-center mt-2">
                        {/* icon */}
                        <div className="flex space-x-4">
                            <div className="h-8 w-8 hover:cursor-pointer rounded-full bg-[#f7f7f7] group hover:bg-blue-700 flex justify-center items-center">
                                <FaFacebookF className="h-4 w-4 group-hover:cursor-pointer group-hover:text-white" />
                            </div>
                            <div className="h-8 w-8 hover:cursor-pointer rounded-full bg-[#f7f7f7] group hover:bg-orange-600 flex justify-center items-center">
                                <FaInstagram className="h-4 w-4 group-hover:cursor-pointer group-hover:text-white" />
                            </div>
                            <div className="h-8 w-8 hover:cursor-pointer rounded-full bg-[#f7f7f7] group hover:bg-blue-800 flex justify-center items-center">
                                <FaLinkedinIn className="h-4 w-4 group-hover:cursor-pointer group-hover:text-white" />
                            </div>
                            <div className="h-8 w-8 hover:cursor-pointer rounded-full bg-[#f7f7f7] group hover:bg-[#1da1f2] flex justify-center items-center">
                                <FaTwitter className="h-4 w-4 group-hover:cursor-pointer group-hover:text-white" />
                            </div>
                        </div>

                        {/* text */}
                        <p className="text-[13px] pl-4 uppercase text-[#777]"><span>Free Shipping</span>This Week Order Over - $75</p>
                        {/* Currency */}

                        <div className="flex space-x-6 items-center">
                            <details className="dropdown">
                                <summary className="m-1 list-none cursor-pointer relative z-10 pr-5 uppercase text-sm text-[#777]">Currency</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </details>
                            <details className="dropdown">
                                <summary className="m-1 list-none cursor-pointer relative z-10 pr-5 uppercase text-sm text-[#777]">Language</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li><a>Item 1</a></li>
                                    <li><a>Item 2</a></li>
                                </ul>
                            </details>
                        </div>

                    </div>
                    <hr className="my-4" />
                    {/* Search Bar Section */}

                    <div className="container-fluid flex flex-col md:flex-row md:justify-between md:px-4 md:mt-3 justify-center items-center">

                        {/* Image */}
                        <div className="flex justify-center items-center mb-4 mt-2">
                            <img src="logo/logo.png" alt="logo" className="h-6 md:h-9" />
                        </div>
                        {/* Search Box */}
                        <div className="flex justify-center items-center">
                            <form className="mx-auto relative">
                                <input
                                    className="block w-[580px] min-h-11 h-11 px-4 py-3 text-base font-normal leading-normal text-gray-700 border border-solid border-blue-500 rounded-md focus:border-blue-500 focus:outline-none mx-3"
                                    type="text"
                                    placeholder="Search your products.."
                                />
                                <button type="submit" className=" absolute top-3 right-6"><IoSearchOutline className="h-6 w-6" /></button>
                            </form>
                        </div>

                        {/* user  */}
                        <div className=" flex justify-center items-center space-x-7">
                            <FaRegUser className="h-5 w-5 md:h-7 md:w-7" />
                            <div className="relative">
                                <FaRegHeart className="h-5 w-5 md:h-7 md:w-7" />
                                <div className="absolute -bottom-2 -right-1 flex justify-center items-center bg-[#777777] rounded-full  h-4 w-4">
                                    <span className=" text-white font-bold text-[12px]">0</span>
                                </div>
                            </div>
                            <div className="relative">
                                <BiShoppingBag className="h-6 w-6 md:h-8 md:w-8" />
                                <div className="absolute -bottom-1 -right-2 flex justify-center items-center bg-[#777777] rounded-full  h-4 w-4">
                                    <span className=" text-white font-bold text-[12px]">0</span>
                                </div>
                            </div>
                        </div>


                    </div>
                    <hr className="my-4" />

                    {/* Mega Menu */}
                    <div className="container-fluid flex items-center justify-between pb-6">
                        <div>
                            <GrAppsRounded className="h-6 w-6 md:h-7 md:w-7" />
                        </div>

                        <div>
                            <ul className="flex space-x-14">
                                <li className="font-semibold uppercase cursor-pointer hover:underline underline-offset-2 duration-200">Home</li>
                                <li className="font-semibold uppercase cursor-pointer hover:underline underline-offset-2 duration-200">About</li>
                                <li className="font-semibold uppercase cursor-pointer hover:underline underline-offset-2 duration-200">Products</li>
                                <li className="font-semibold uppercase cursor-pointer hover:underline underline-offset-2 duration-200">Contact</li>
                                <li className="font-semibold uppercase cursor-pointer hover:underline underline-offset-2 duration-200">Offers</li>
                                <li className="font-semibold uppercase cursor-pointer hover:underline underline-offset-2 duration-200">Blog</li>
                            </ul>
                        </div>
                        <div>
                            <FaSortAmountDown />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar