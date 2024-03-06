import { useState } from "react";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
useState

const Card = () => {




    const data = {
        id: "65756467",
        productName: "Summer Dresses Collection",
        rating: 4,
        productdetails: [
            {
                color: "Red",
                colorCode: "#7F3ABD",
                imgURL: ["/image/red-dress-front.png", "/image/red-dress-back.png", "/image/red-dress-side.png"],
                description: "A beautiful summer dress with a floral pattern.",
                quantity: 56,
                detail: "Made with lightweight and breathable fabric, perfect for hot summer days.",
                moreInformation: "Machine washable. Available in multiple sizes.",
                offer: 6,
                sizes: [
                    {
                        size: "XS",
                        oldPrice: 78.98,
                        newPrice: 34.78,
                    },
                    {
                        size: "S",
                        oldPrice: 78.98,
                        newPrice: 34.78,
                    },
                    {
                        size: "M",
                        oldPrice: 78.98,
                        newPrice: 34.78,
                    }
                ],
            },
            {
                color: "Blue",
                colorCode: "#bd693a",
                imgURL: ["/image/blue-dress-front.png", "/image/blue-dress-back.png", "/image/blue-dress-side.png"],
                description: "A chic blue dress for any occasion.",
                quantity: 32,
                detail: "Elegant design with a comfortable fit.",
                moreInformation: "Dry clean only. Limited stock.",
                offer: 0,
                sizes: [
                    {
                        size: "S",
                        oldPrice: 89.99,
                        newPrice: 49.99,
                    },
                    {
                        size: "M",
                        oldPrice: 89.99,
                        newPrice: 49.99,
                    },
                    {
                        size: "L",
                        oldPrice: 89.99,
                        newPrice: 49.99,
                    },
                ],
            },
            {
                colorName: "Yellow",
                colorCode: "#06f92c",
                imgURL: ["/image/yellow-dress-front.png", "/image/yellow-dress-back.png", "/image/yellow-dress-side.png"],
                description: "A vibrant yellow dress to brighten up your day.",
                quantity: 18,
                detail: "Flowy design with a flattering silhouette.",
                moreInformation: "Hand wash recommended. Limited edition.",
                offer: 20,
                sizes: [
                    {
                        size: "XS",
                        oldPrice: 99.95,
                        newPrice: 59.95,
                    },
                    {
                        size: "S",
                        oldPrice: 99.95,
                        newPrice: 59.95,
                    },
                    {
                        size: "M",
                        oldPrice: 99.95,
                        newPrice: 59.95,
                    },
                ],
            },
        ],
    };
    const handleDeatils = () => {
        console.log("clicked")
    }
    const defaultDetails = data.productdetails[0];
    return (
        <>
            <div className="card w-80 bg-base-100 shadow-xl border p-3">
                <div className="flex justify-center items-center"><img src="/logo/card.jpg" alt="Shoes" className="h-80 w-72 rounded-none" /></div>
                <div className="">
                    <h2 className=" mt-2 text-base font-sans tracking-wider mb-2">{data.productName}</h2>

                    <Stack spacing={1}>
                        <Rating name="half-rating-read" defaultValue={data.rating} precision={0.1} readOnly />
                    </Stack>

                    <p className="mb-2"><span className="mr-1"><del>${data.productdetails[0].sizes[0].oldPrice}</del></span> <span className="font-semibold">${data.productdetails[0].sizes[0].newPrice}</span></p>
                    <div className="flex justify-between items-center mb-1 px-1">
                        <ul className="flex justify-center items-center space-x-1">
                            {
                                data.productdetails.map((m_product, index) => (
                                    <li key={index} className="h-6 w-6 rounded-full p-2 border border-white  hover:shadow-md duration-200 cursor-pointer" style={{ backgroundColor: m_product.colorCode }} onClick={handleDeatils}></li>
                                ))
                            }

                        </ul>
                        <ul className="flex justify-center items-center space-x-1">
                            {
                                defaultDetails.sizes.map((sizeObj, index) => (
                                    <li key={index} className="uppercase font-semibold h-5 w-6 bg-zinc-300 text-black text-[12px] flex justify-center items-center p-1.5 cursor-pointer">{sizeObj.size}</li>
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