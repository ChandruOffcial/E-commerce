import Card from "../Card/Card"
import { useEffect, useState } from "react"


const NewArrival = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("/product.json")
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
            })
    }, [])

    const newArrival = product.slice(0, 4);

    return (



        <div className="container mx-auto mb-5 md:mt-6">
            <p className="text-center font-bold text-lg mt-5 mb-3 md:text-5xl text-[#777]" >New Arrivals</p>
            <p className="text-center text-[#777] mb-3 xl:mb-8 md:mb-4">Browse The Collection of Top Products</p>
            <div className="flex justify-center items-center gap-2">
                {/* <Card /> */}
                <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1  items-center justify-items-center gap-5">
                    {
                        newArrival.map((data, i) => (
                            <Card key={i} data={data} />
                        ))
                    }
                </div>
            </div>
            <p className="text-center underline underline-offset-8 font-semibold my-2  md:my-10 mt-5 cursor-pointer">Shop all Collection</p>
        </div>
    )
}

export default NewArrival