

const SupperOffer = () => {
    return (

        <div className="relative">

            <img src="/logo/banner.jpg" className="w-full" alt="Banner" />


            <div className={`container mx-auto absolute inset-0 flex justify-end items-center `}>
                <div className="md:h-72 lg:h-96 md:w-1/2  p-2">
                    <h1 className="mb-0 md:mb-3 lg:mb-6 md:text-[30px] pt-2 md:pt-6  text-blue-500  lg:text-5xl xl:text-8xl text-lg font-bold tracking-wide font-fjalla uppercase text-center">Shoes</h1>
                    <h2 className="text-base  lg:text-4xl font-semibold mb-0 uppercase md:mb-1 lg:mb-5 text-white text-center">Super Offer</h2>
                    <div className="flex justify-center items-center">
                        <img src="" alt="" className="md:h-28 md:w-52 lg:h-36 lg:w-96 h-6 w-16" />
                    </div>
                    <p className="ec-slide_para mt-1 md:mb-3 lg:mb-6 mb-1 md:text-lg lg:text-2xl font-bold text-[10px] text-white text-center">Step into Style, Stride with Confidence.</p>
                    <div className="flex justify-center items-center">
                        <p className="md:px-4 px-1 text-[8px] md:text-base lg:text-lg  py-1 md:py-2 uppercase inline-block font-sans bg-red-400 text-white rounded text-center cursor-pointer">Order Now</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SupperOffer