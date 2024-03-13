import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";



const Card = ({ data, custom }) => {



    const [size, setSize] = useState(data.productdetails[0])
    const [image, setImage] = useState(data.productdetails[0].imgURL[0]);
    const [rating, setRating] = useState(data.rating);
    const [oldPrices, setOldprice] = useState(data.productdetails[0].sizes[0].oldPrice)
    const [newPrices, setNewPrice] = useState(data.productdetails[0].sizes[0].newPrice)

    useEffect(() => {
        setSize(data.productdetails[0]);
        setImage(data.productdetails[0].imgURL[0]);
        setRating(data.rating);
        setOldprice(data.productdetails[0].sizes[0].oldPrice);
        setNewPrice(data.productdetails[0].sizes[0].newPrice);
    }, [data]);

    // For Color 
    const handleDeatils = (index, event) => {
        setImage(data.productdetails[index].imgURL[0])
        setSize(data.productdetails[index])
        setOldprice(data.productdetails[index].sizes[0].oldPrice)
        setNewPrice(data.productdetails[index].sizes[0].newPrice)
        const bgChange = event.target;
        const parentElement = bgChange.parentNode;
        const childElements = parentElement.children;
        for (let i = 0; i < childElements.length; i++) {
            childElements[i].style.boxShadow = 'none';
        }
        bgChange.style.boxShadow = '0px 0px 0px 2px rgba(0,0,0,0.3)';
    }

    // For Sixe
    const handlePrice = (index, event) => {

        setOldprice(size.sizes[index].oldPrice)
        setNewPrice(size.sizes[index].newPrice)
        const bgChange = event.target;
        const parentElement = bgChange.parentNode;
        const childElements = parentElement.children;
        for (let i = 0; i < childElements.length; i++) {
            childElements[i].style.backgroundColor = '#f4f4f5';
        }

        bgChange.style.backgroundColor = '#94949b';
    }

    // For Rating
    const handleRatingChange = (event, newValue) => {
        setRating(newValue); // Update rating state when user changes the rating
    };

    return (
        <>
            <div className={`card min-w-[250px] max-w-[370px]  md:space-x-0 bg-base-100 shadow-xl border p-3 relative group mt-3 md:mt-4 ${custom}`}>
                {/* image */}
                <div className="flex  items-center overflow-hidden cursor-pointer  border-2 border-b-0">
                    <img src={image} alt="Shoes" className="h-48 lg:h-64 xl:h-80 w-full rounded-none group-hover:scale-110 duration-300 object-contain" />
                </div>

                {/* Offer */}
                <span className="absolute top-7 left-4 text-xs font-semibold leading-6 px-2 text-center uppercase text-white flex items-center justify-center bg-pink-600 rounded-r-lg">{`${data.productdetails[0].offer}%`}</span>

                {/* cart */}
                <div className="absolute bottom-44 right-7 flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100 duration-300 translate-y-9 group-hover:translate-y-0 ">
                    <div className="h-8 w-7 bg-white flex justify-center items-center z-10 rounded-t-lg cursor-pointer" title="cart">
                        <HiOutlineShoppingBag className="h-6 w-6 " />
                    </div>
                    <div className="h-8 w-8 bg-white flex justify-center items-center z-10 cursor-pointer" title="wishlist">
                        <IoMdHeartEmpty className="h-6 w-6 " />
                    </div>
                    <div className="h-8 w-8 bg-white flex justify-center items-center z-10 cursor-pointer rounded-b-xl" title="view">
                        <IoEyeOutline className="h-5 w-5" />
                    </div>
                </div>

                <div className="border-2 border-t-0">
                    <h2 className=" mt-2 text-base font-sans tracking-wider mb-1 cursor-pointer">{data.productName}</h2>

                    <Stack spacing={1}>
                        <Rating
                            name="half-rating-read"
                            className="mb-1"
                            precision={0.1}
                            readOnly
                            value={rating}
                            onChange={handleRatingChange} />
                    </Stack>

                    <p className="mb-2"><span className="mr-1"><del>${oldPrices}</del></span> <span className="font-semibold">${newPrices}</span></p>
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
                                size.sizes.map((sizeObj, index) => (
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
Card.propTypes = {
    data: PropTypes.object.isRequired, // Prop validation for 'data' prop
    custom: PropTypes.string, // Prop validation for 'custom' prop
}
export default Card