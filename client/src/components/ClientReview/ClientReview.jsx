
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Rating from '@mui/material/Rating';
import Slider from "react-slick";
import "../components.css"

function ClientReview() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };
    return (
        <div className="bg-[#f9f9f9] p-5">
            <div className="container mx-auto mb-4">
                <p className="text-center font-bold text-lg mt-5 mb-3 md:text-5xl text-[#777]" >Client Review</p>
                <p className="text-center text-[#777] mb-3 xl:mb-8 md:mb-4">What say Clients Say about us</p>
                <div className="xl:flex xl:justify-center xl:items-center">
                    <div className="container__tesimonial border rounded ">
                        <Slider {...settings}>
                            <div className="p-3  relative rounded-md shadow">
                                <div className="p-5 flex flex-col justify-center items-center space-y-3">
                                    <div className="absolute top-0 left-5 z-10 lg:left-10 xl:left-20 h-16 w-16">
                                        <FaQuoteLeft className="w-full" />
                                    </div>
                                    <div className="absolute bottom-0 right-7 lg:right-12 xl:right-28">
                                        <FaQuoteRight />
                                    </div>
                                    <p className="text-center  lg:w-3/4 mb-2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro eveniet maiores veniam aspernatur asperiores blanditiis ullam eligendi, beatae, magnam aliquid dolore. Veritatis accusamus necessitatibus alias sunt nemo, adipisci unde.
                                    </p>
                                    <img src="/tesimonial/1.jpg" alt="" className="h-16 w-16 rounded-full mb-3" />
                                    <h3 className="text-center text-blue-600 font-mono text-xl font-semibold">John Viliyam </h3>
                                    <p className="text-center text-base mt-0">Manager</p>
                                    <p className="flex justify-center items-center"> <Rating name="read-only" value={4} readOnly /></p>
                                </div>
                            </div>
                            <div className="p-3  relative rounded-md shadow">
                                <div className="p-5 flex flex-col justify-center items-center space-y-3">
                                    <div className="absolute top-0 left-5 z-10 lg:left-10 xl:left-20 h-16 w-16">
                                        <FaQuoteLeft className="w-full" />
                                    </div>
                                    <div className="absolute bottom-0 right-7 lg:right-12 xl:right-28">
                                        <FaQuoteRight />
                                    </div>
                                    <p className="text-center  lg:w-3/4 mb-2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro eveniet maiores veniam aspernatur asperiores blanditiis ullam eligendi, beatae, magnam aliquid dolore. Veritatis accusamus necessitatibus alias sunt nemo, adipisci unde.
                                    </p>
                                    <img src="/tesimonial/2.jpg" alt="" className="h-16 w-16 rounded-full mb-3" />
                                    <h3 className="text-center text-blue-600 font-mono text-xl font-semibold">John Viliyam </h3>
                                    <p className="text-center text-base mt-0">Manager</p>
                                    <p className="flex justify-center items-center"> <Rating name="read-only" value={4} readOnly /></p>
                                </div>
                            </div><div className="p-3  relative rounded-md shadow">
                                <div className="p-5 flex flex-col justify-center items-center space-y-3">
                                    <div className="absolute top-0 left-5 z-10 lg:left-10 xl:left-20 h-16 w-16">
                                        <FaQuoteLeft className="w-full" />
                                    </div>
                                    <div className="absolute bottom-0 right-7 lg:right-12 xl:right-28">
                                        <FaQuoteRight />
                                    </div>
                                    <p className="text-center  lg:w-3/4 mb-2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit porro eveniet maiores veniam aspernatur asperiores blanditiis ullam eligendi, beatae, magnam aliquid dolore. Veritatis accusamus necessitatibus alias sunt nemo, adipisci unde.
                                    </p>
                                    <img src="/tesimonial/3.jpg" alt="" className="h-16 w-16 rounded-full mb-3" />
                                    <h3 className="text-center text-blue-600 font-mono text-xl font-semibold">John Viliyam </h3>
                                    <p className="text-center text-base mt-0">Manager</p>
                                    <p className="flex justify-center items-center"> <Rating name="read-only" value={4} readOnly /></p>
                                </div>
                            </div>
                        </Slider>
                    </div >
                </div>

            </div >
        </div>
    );
}

export default ClientReview;
