
import { FiFilter } from "react-icons/fi";
import { useEffect, useState } from "react";
import Card from "../Card/Card"
import Category from "./Category";
import Price from "./Price";
import Color from "./Color";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Filter = () => {


    const [products, setProduct] = useState([])
    const [filter, setIsOpen] = useState(false);
    const [filteredItem, setFilteredItem] = useState([])



    useEffect(() => {
        fetch("/product.json")
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
                setFilteredItem(data)
            })
    }, [])

    // filter by category
    const handleCategory = event => {
        const value = event.target.value;
        if (value == "All") {
            setFilteredItem(products);

        } else {
            const filterItems = products.filter(product => {
                return product.Category === value;
            });
            setFilteredItem(filterItems);
            console.log(filterItems)

        }
    }



    const PriceChange = event => {
        const value = event.target.value;
        const number = value.split("$");
        const result = Number(number[number.length - 1]);
        console.log(result)
        let array = [];

        filteredItem.map((item) => {
            const compare = item.productdetails[0].sizes[0].newPrice
            if (compare >= result) {
                array.push(item)
                console.log("Greater Than")
            }
            else {
                console.log("Less than")
            }

        })

        console.log(array)

    }



    const handleChange = event => {
        const value = event.target.value;
        console.log(value);
    }


    // Function to toggle drawer state
    const toggleFilter = () => {
        setIsOpen(!filter);
    };
    return (

        <>
            <div className="bg-slate-100 pt-7">
                <div className="container mx-auto p-1 flex flex-col lg:flex-row gap-y-4">
                    <div className="lg:w-1/5  rounded-sm  top-0 w-full flex justify-start items-center bg-white border-x-2 h-full">
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
                                        <h3 className=" text-lg font-sans font-semibold text-[#777]">Filter Products By</h3>
                                        <p className="uppercase font-bold text-3xl cursor-pointer" onClick={toggleFilter}>×</p>
                                    </div>
                                    <hr className="" />

                                    {/* Category */}
                                    <Category handleChange={handleChange} />
                                    {/* price */}
                                    <Price handleChange={handleChange} />
                                    {/* color */}
                                    <Color handleChange={handleChange} />

                                </ul>
                            </div>
                        </div>
                        <div className="p-3 hidden lg:flex flex-col">
                            <h3 className=" mb-3 text-xl font-sans font-semibold text-[#777]">Filter Products By</h3>
                            {/* Category */}
                            <Category handleChange={handleCategory} />
                            {/* price */}
                            <Price handleChange={PriceChange} />
                            {/* color */}
                            <Color handleChange={handleChange} />


                        </div>
                    </div>
                    <div className=" lg:w-4/5 w-full border rounded-sm  top-12">
                        <div className="grid items-center justify-items-center grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-2 xl:gap-y-4">
                            {
                                filteredItem.map((data, i) => (
                                    <Card key={i} data={data} custom={"lg:min-w-[250px] xl:max-w-[370px] xl:w-full"} />

                                ))
                            }

                        </div>
                        <div className="flex justify-center items-center mt-3 mb-8 ">
                            <Stack spacing={2}>
                                <Pagination count={10} defaultPage={1} siblingCount={1} boundaryCount={0} variant="outlined" color="primary" />
                            </Stack>
                        </div>
                    </div>


                </div >
            </div>
        </>
    )
}

export default Filter