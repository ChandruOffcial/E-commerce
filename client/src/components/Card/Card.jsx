

const Card = () => {

    const data = {
        id: "65756467",
        productName: "abcd",
        rating: 4,
        productdetails: [
            {
                color: "red",
                imgURL: ["/image/2.png", "/image/3.png", "/image/4.png"],
                description: "lorem",
                quantity: 56,
                detail: "lorewm",
                moreInformation: "lorem",
                sizes: [{
                    size: "x",
                    oldPrice: 78.98,
                    newPrice: 34.78,
                }, {
                    size: "xl",
                    oldPrice: 78.98,
                    newPrice: 34.78,
                }, {
                    size: "xxl",
                    oldPrice: 78.98,
                    newPrice: 34.78,
                }],
            }, {
                color: "red",
                imgURL: ["/image/2.png", "/image/3.png", "/image/4.png"],
                description: "lorem",
                quantity: 56,
                detail: "lorewm",
                moreInformation: "lorem",
                sizes: [{
                    size: "x",
                    oldPrice: 78.98,
                    newPrice: 34.78,
                }, {
                    size: "xl",
                    oldPrice: 78.98,
                    newPrice: 34.78,
                }, {
                    size: "xxl",
                    oldPrice: 78.98,
                    newPrice: 34.78,
                }],
            },
        ]
    }
    const datas = {
        id: "65756467",
        productName: "Summer Dresses Collection",
        rating: 4,
        productdetails: [
            {
                color: "Red",
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
                    },
                    {
                        size: "L",
                        oldPrice: 78.98,
                        newPrice: 34.78,
                    },
                    {
                        size: "XL",
                        oldPrice: 78.98,
                        newPrice: 34.78,
                    },
                ],
            },
            {
                color: "Blue",
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
                color: "Yellow",
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

    return (
        <>
            <div className="card w-80 bg-base-100 shadow-xl border p-3">
                <div className="flex justify-center items-center"><img src="/logo/card.jpg" alt="Shoes" className="h-80 w-72 rounded-none" /></div>
                <div className="">
                    <h2 className=" mt-2 text-base font-sans tracking-wider mb-2">Round Neck T-Shirt</h2>
                    <div className="rating rating-sm mb-2">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400 cursor-default" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400 cursor-default" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400 cursor-default" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400 cursor-default" checked />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400 cursor-default" />
                    </div>
                    <p className="mb-2"><span className="mr-1"><del>$56.09</del></span> <span className="font-semibold">$97.97</span></p>
                    <div className="flex justify-between items-center mb-1 px-1">
                        <ul className="flex justify-center items-center space-x-1">
                            <li className="h-6 w-6 rounded-full bg-purple-400 p-2 border border-white  hover:shadow-md duration-200 cursor-pointer"></li>
                            <li className="h-6 w-6 rounded-full bg-red-400 p-2 border border-white  hover:shadow-md duration-200 cursor-pointer"></li><li className="h-6 w-6 rounded-full bg-zinc-600 p-2 border border-white  hover:shadow-md duration-200 cursor-pointer"></li>
                        </ul>
                        <ul className="flex justify-center items-center space-x-1">
                            <li className="uppercase font-semiboldbold h-5 w-6 bg-zinc-300  text-black text-[12px] flex justify-center items-center p-1.5 cursor-pointer">x</li>
                            <li className="uppercase font-semiboldbold h-5 w-6 bg-zinc-100  text-black text-[12px] flex justify-center items-center p-1.5 cursor-pointer">xl</li>
                            <li className="uppercase font-semiboldbold h-5 w-6 bg-zinc-100  text-black text-[12px] flex justify-center items-center p-1.5 cursor-pointer">xxl</li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Card