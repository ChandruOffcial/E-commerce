import { FiFilter } from "react-icons/fi";
import { useEffect, useState } from "react";
import Card from "../Card/Card"

const Filter = () => {

    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("/product.json")
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
            })
    }, [])


    const [filter, setIsOpen] = useState(false);

    // Function to toggle drawer state
    const toggleFilter = () => {
        setIsOpen(!filter);
    };
    return (

        <>
            <div className="bg-slate-100 ">
                <div className="container mx-auto p-1 flex flex-col lg:flex-row gap-y-4">
                    <div className="lg:w-1/5  rounded-sm  top-0 h-11 w-full flex justify-start items-center bg-white border-x-2">
                        <div className="drawer lg:hidden">
                            <input id="my-filter" type="checkbox" className="drawer-toggle" checked={filter} onChange={toggleFilter} />
                            <div className="drawer-content">
                                <label htmlFor="my-filter" className="drawer-button  flex  gap-4">
                                    <FiFilter className="h-10 w-10 pl-2 border-r-2 pr-2 cursor-pointer" /><div className="flex items-center">
                                        <p className="text-base uppercase font-bold text-[#555]">Products</p>
                                    </div>
                                </label>

                            </div>
                            <div className="drawer-side z-10">
                                <label htmlFor="my-filter" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content ">
                                    {/* Sidebar head content here */}
                                    <div className="flex justify-between items-center mb-2">
                                        <h2 className="font-bold text-lg text-[#3474d4]">Filter</h2>
                                        <p className="uppercase font-bold text-3xl" onClick={toggleFilter}>×</p>
                                    </div>
                                    <hr className="" />
                                    <ul>
                                        <li>Brand</li>
                                        <li>Price</li>
                                        <li>Rating</li>

                                    </ul>

                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className=" lg:w-4/5 w-full border rounded-sm  top-12">
                        <div className="grid items-center justify-items-center grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-2 xl:gap-y-4">
                            {
                                product.map((data, i) => (
                                    <Card key={i} data={data} custom={"lg:min-w-[250px] xl:max-w-[370px] xl:w-full"} />

                                ))
                            }
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Filter