/* eslint-disable react/prop-types */
import { useState } from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";


// eslint-disable-next-line react/prop-types
const Card = ({ data }) => {


    // const data = {
    //     id: "65756467",
    //     productName: "Summer Dresses Collection",
    //     rating: 4,
    //     productdetails: [
    //         {
    //             color: "Red",
    //             colorCode: "#7F3ABD",
    //             imgURL: ["/image/red-dress-front.png", "/image/red-dress-back.png", "/image/red-dress-side.png"],
    //             description: "A beautiful summer dress with a floral pattern.",
    //             quantity: 56,
    //             detail: "Made with lightweight and breathable fabric, perfect for hot summer days.",
    //             moreInformation: "Machine washable. Available in multiple sizes.",
    //             offer: 6,
    //             sizes: [
    //                 {
    //                     size: "XS",
    //                     oldPrice: 78.98,
    //                     newPrice: 34.78,
    //                 },
    //                 {
    //                     size: "S",
    //                     oldPrice: 79.98,
    //                     newPrice: 34.78,
    //                 },
    //                 {
    //                     size: "M",
    //                     oldPrice: 80.98,
    //                     newPrice: 34.78,
    //                 }
    //             ],
    //         },
    //         {
    //             color: "Blue",
    //             colorCode: "#bd693a",
    //             imgURL: ["/image/blue-dress-front.png", "/image/blue-dress-back.png", "/image/blue-dress-side.png"],
    //             description: "A chic blue dress for any occasion.",
    //             quantity: 32,
    //             detail: "Elegant design with a comfortable fit.",
    //             moreInformation: "Dry clean only. Limited stock.",
    //             offer: 0,
    //             sizes: [
    //                 {
    //                     size: "S",
    //                     oldPrice: 34.99,
    //                     newPrice: 49.99,
    //                 },
    //                 {
    //                     size: "M",
    //                     oldPrice: 76.99,
    //                     newPrice: 49.99,
    //                 },
    //                 {
    //                     size: "L",
    //                     oldPrice: 12.99,
    //                     newPrice: 49.99,
    //                 },
    //             ],
    //         },
    //         {
    //             colorName: "Yellow",
    //             colorCode: "#06f92c",
    //             imgURL: ["/image/yellow-dress-front.png", "/image/yellow-dress-back.png", "/image/yellow-dress-side.png"],
    //             description: "A vibrant yellow dress to brighten up your day.",
    //             quantity: 18,
    //             detail: "Flowy design with a flattering silhouette.",
    //             moreInformation: "Hand wash recommended. Limited edition.",
    //             offer: 20,
    //             sizes: [
    //                 {
    //                     size: "XS",
    //                     oldPrice: 99.95,
    //                     newPrice: 59.95,
    //                 },
    //                 {
    //                     size: "S",
    //                     oldPrice: 45.95,
    //                     newPrice: 59.95,
    //                 },
    //                 {
    //                     size: "M",
    //                     oldPrice: 78.95,
    //                     newPrice: 59.95,
    //                 },
    //             ],
    //         },
    //     ],
    // };

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
            <div className="card md:w-80 w-72 bg-base-100 shadow-xl border p-3 relative group">
                <div className="flex  items-center overflow-hidden cursor-pointer"><img src={defaultDetails.imgURL[0]} alt="Shoes" className="h-80 w-full rounded-none group-hover:scale-110 duration-300 object-cover" /></div>
                <span className="absolute top-7 left-4 text-xs font-semibold leading-6 px-2 text-center uppercase text-white flex items-center justify-center bg-pink-600 rounded-r-lg">20%</span>

                <div className="absolute bottom-44 right-7 flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100 duration-300 translate-y-9 group-hover:translate-y-0">
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
                <div className="">
                    <h2 className=" mt-2 text-base font-sans tracking-wider mb-1 cursor-pointer">{data.productName}</h2>

                    <Stack spacing={1}>
                        <Rating name="half-rating-read" className="mb-1" defaultValue={data.rating} precision={0.1} readOnly />
                    </Stack>

                    <p className="mb-2"><span className="mr-1"><del>${oldPrices.oldPrice}</del></span> <span className="font-semibold">${newPrices.newPrice}</span></p>
                    <div className="flex justify-between items-center mb-1 px-1">
                        <ul className="flex justify-center items-center space-x-1 shadow_effect_parentElement">
                            {
                                data.productdetails.map((m_product, index) => (
                                    <li key={index} className="h-6 w-6 rounded-full p-2 border  cursor-pointer shadow_effect" style={{ backgroundColor: m_product.colorCode }} onMouseOver={(event) => handleDeatils(index, event)}></li>
                                ))
                            }

                        </ul>
                        <ul className="flex justify-center items-center space-x-1 bg_parentElement">
                            {
                                defaultDetails.sizes.map((sizeObj, index) => (
                                    <li key={index} className="uppercase font-semibold h-5 w-6 bg-zinc-100 text-black text-[12px] flex justify-center items-center p-1.5 cursor-pointer size_class" onMouseOver={(event) => handlePrice(index, event)}>{sizeObj.size}</li>
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