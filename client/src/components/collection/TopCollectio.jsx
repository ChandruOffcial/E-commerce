import Card from "../Card/Card"

const TopCollectio = () => {
    return (
        <div className="container mx-auto bg-white py-4 md:py-8 lg:py-8">
            <h2 className="text-center font-bold text-[#555] text-xl md:text-4xl mb-2 md:mb-4 ">Our Top Collection</h2>
            <p className="text-center font-normal text-[#777] text-base mb-2">Browse The Collection of Top Products</p>
            <p className="text-center font-medium underline decoration-2 underline-offset-8 text-blue-600 mb-3">All Product</p>
            {/* Products Sections */}
            <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-5 md:gap-5  xl:gap-x-36 lg:gap-y-14 items-center justify-items-center gap-y-8 mt-14 mb-4 ">

                <Card />



            </div>
            <p className="text-center underline underline-offset-8 font-semibold my-2  md:my-10">Shop all Collection</p>

            <div className="flex flex-col md:flex-row gap-3">



            </div>
        </div>
    )
}

export default TopCollectio