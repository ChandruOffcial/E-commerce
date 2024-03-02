import { HiBars3 } from "react-icons/hi2";
import { FaRegUser, FaRegHeart } from "react-icons/fa";

import { BiShoppingBag } from "react-icons/bi";


const Navbar = () => {
    return (
        <>
            <div className="container px-3 py-2 h-16 flex items-center justify-between">
                {/* Drawer */}
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer" className="drawer-button inline-block"><HiBars3 className="h-7 w-7" /></label>
                    </div>
                    <div className="drawer-side z-10">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content ">
                            {/* Sidebar head content here */}
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="font-bold text-lg text-[#3474d4]">My Menu</h2>
                                <p className="uppercase font-bold text-3xl">×</p>
                            </div>
                            <hr className="" />

                        </ul>
                    </div>
                </div>
                <div className="flex justify-center items-center space-x-4">
                    <FaRegUser className="h-5 w-5" />
                    <div className="relative">
                        <FaRegHeart className="h-5 w-5" />
                        <div className="absolute -bottom-2 -right-1 flex justify-center items-center bg-[#777777] rounded-full  h-4 w-4">
                            <span className=" text-white font-bold text-[12px]">0</span>
                        </div>
                    </div>
                    <div className="relative">
                        <BiShoppingBag className="h-6 w-6" />
                        <div className="absolute -bottom-1 -right-2 flex justify-center items-center bg-[#777777] rounded-full  h-4 w-4">
                            <span className=" text-white font-bold text-[12px]">0</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar