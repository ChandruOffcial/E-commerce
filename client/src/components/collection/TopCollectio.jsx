import { useEffect, useState } from "react"
import Card from "../Card/Card"

const TopCollectio = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("/product.json")
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
            })
    }, [])
    return (
        <div className="container container_custom mx-auto bg-white py-4 md:py-8 lg:py-8">
            <h2 className="text-center font-bold text-[#555] text-xl md:text-4xl mb-2 md:mb-4 ">Our Top Collection</h2>
            <p className="text-center font-normal text-[#777] text-base mb-2">Browse The Collection of Top Products</p>
            <p className="text-center font-medium underline decoration-2 underline-offset-8 text-blue-600 mb-3">All Product</p>
            {/* Products Sections */}
            <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1  items-center justify-items-center lg:gap-y-6 gap-y-3">
                {
                    product.map((data, i) => (
                        <Card key={i} data={data} />
                    ))
                }
            </div>
            <p className="text-center underline underline-offset-8 font-semibold my-2  md:my-10 cursor-pointer">Shop all Collection</p>

            <div className="flex flex-col md:flex-row gap-2 md:gap-3 m-2 mt-4">
                <div className="w-full  relative hover:cursor-pointer">
                    <img src="/logo/800x400-1.jpg" alt="" className="w-full" />
                    <div className="absolute px-7 py-6 md:p-12 inset-0 flex justify-start items-center">
                        <div className="flex flex-col gap-1 md:gap-3 px-3">
                            <h2 className="text-[#555] font-semibold text-xl md:text-3xl lg:text-4xl">New Arrival</h2>
                            <h3 className="uppercase font-bold lg:text-2xl">Mens <br /> sport Shoes</h3>
                            <p className="text-base font-normal">30% Discount</p>
                        </div>
                    </div>
                    <div className="absolute inset-0  z-0 transform scale-90 hover:scale-100 opacity-0 hover:opacity-100 duration-500 ">
                        <div className=" bg-[#52525b8f] flex justify-center items-center w-full h-full rounded">
                            <button className="btn uppercase px-6 py-3 bg-[#3474d4] outline-none border-none text-white font-bold">order now</button>
                        </div>
                    </div>
                </div>
                <div className="w-full  relative hover:cursor-pointer">
                    <img src="/logo/800x400-2.jpg" alt="" className="w-full" />
                    <div className="absolute px-7 py-6 md:p-12 inset-0 flex justify-start items-center">
                        <div className="flex flex-col gap-1 md:gap-3 px-3">
                            <h2 className="text-[#555] font-semibold text-xl md:text-3xl lg:text-4xl">New Arrival</h2>
                            <h3 className="uppercase font-bold lg:text-2xl">Mens <br /> sport Shoes</h3>
                            <p className="text-base font-normal">30% Discount</p>
                        </div>
                    </div>
                    <div className="absolute inset-0  z-0 transform scale-90 hover:scale-100 opacity-0 hover:opacity-100 duration-500 ">
                        <div className=" bg-[#52525b8f] flex justify-center items-center w-full h-full rounded">
                            <button className="btn uppercase px-6 py-3 bg-[#3474d4] outline-none border-none text-white font-bold">order now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopCollectio