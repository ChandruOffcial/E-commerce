/* eslint-disable react/prop-types */
import { useState } from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";


// eslint-disable-next-line react/prop-types
const Card = ({ data, custom }) => {


    // eslint-disable-next-line react/prop-types
    const [defaultDetails, setDefaultDetails] = useState(data.productdetails[0])
    const [oldPrices, setOldPrices] = useState(defaultDetails.sizes[0]);
    const [newPrices, setNewPrices] = useState(defaultDetails.sizes[0]);


    // For Color 
    const handleDeatils = (index, event) => {
        const bgChange = event.target;
        // eslint-disable-next-line react/prop-types
        setDefaultDetails(data.productdetails[index])
        setOldPrices(defaultDetails.sizes[0])
        setNewPrices(defaultDetails.sizes[0])
        const parentElement = bgChange.parentNode;
        const childElements = parentElement.children;
        for (let i = 0; i < childElements.length; i++) {
            childElements[i].style.boxShadow = 'none';
        }
        bgChange.style.boxShadow = '0px 0px 0px 2px rgba(0,0,0,0.3)';
    }

    // For Sixe
    const handlePrice = (index, event) => {
        setNewPrices(defaultDetails.sizes[index])
        setOldPrices(defaultDetails.sizes[index])
        const bgChange = event.target;
        const parentElement = bgChange.parentNode;
        const childElements = parentElement.children;
        for (let i = 0; i < childElements.length; i++) {
            childElements[i].style.backgroundColor = '#f4f4f5';
        }

        bgChange.style.backgroundColor = '#94949b';
    }

    return (
        <>
            <div className={`card min-w-[250px] max-w-[370px]  md:space-x-0 bg-base-100 shadow-xl border p-3 relative group mt-3 md:mt-4 ${custom}`}>
                <div className="flex  items-center overflow-hidden cursor-pointer  border-2 border-b-0"><img src={defaultDetails.imgURL[0]} alt="Shoes" className="h-48 lg:h-64 xl:h-80 w-full rounded-none group-hover:scale-110 duration-300 object-contain" /></div>
                <span className="absolute top-7 left-4 text-xs font-semibold leading-6 px-2 text-center uppercase text-white flex items-center justify-center bg-pink-600 rounded-r-lg">20%</span>

                <div className="absolute bottom-44 right-7 flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100 duration-300 translate-y-9 group-hover:translate-y-0 ">
                    <div className="h-8 w-7 bg-white flex justify-center items-center z-10 rounded-t-lg cursor-pointer">
                        <HiOutlineShoppingBag className="h-6 w-6 " />
                    </div>
                    <div className="h-8 w-8 bg-white flex justify-center items-center z-10 cursor-pointer">
                        <IoMdHeartEmpty className="h-6 w-6 " />
                    </div>
                    <div className="h-8 w-8 bg-white flex justify-center items-center z-10 cursor-pointer rounded-b-xl">
                        <IoEyeOutline className="h-5 w-5" />
                    </div>
                </div>
                <div className="border-2 border-t-0">
                    <h2 className=" mt-2 text-base font-sans tracking-wider mb-1 cursor-pointer">{data.productName}</h2>

                    <Stack spacing={1}>
                        <Rating name="half-rating-read" className="mb-1" defaultValue={data.rating} precision={0.1} readOnly />
                    </Stack>

                    <p className="mb-2"><span className="mr-1"><del>${oldPrices.oldPrice}</del></span> <span className="font-semibold">${newPrices.newPrice}</span></p>
                    <div className="flex justify-start items-center mb-4 px-1">
                        <ul className="flex justify-center items-center space-x-1 shadow_effect_parentElement flex-wrap">
                            {
                                data.productdetails.map((m_product, index) => (
                                    <li key={index} className="h-6 w-6 rounded-full p-2 border  cursor-pointer shadow_effect" style={{ backgroundColor: m_product.colorCode }} onMouseOver={(event) => handleDeatils(index, event)}></li>
                                ))
                            }

                        </ul>

                    </div>
                    <div className="flex justify-start items-center mb-1 px-1">
                        <ul className="flex justify-center items-center space-x-1 bg_parentElement flex-wrap">
                            {
                                defaultDetails.sizes.map((sizeObj, index) => (
                                    <li key={index} className="uppercase font-semibold  bg-zinc-100 text-black text-[12px] flex justify-center items-center p-1.5 cursor-pointer size_class" onMouseOver={(event) => handlePrice(index, event)}>{sizeObj.size}</li>
                                ))
                            }
                        </ul>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Card