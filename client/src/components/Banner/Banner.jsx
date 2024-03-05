import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fadeIn } from 'react-animations'
import PropTypes from 'prop-types';
import Slider from "react-slick";
import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function SimpleSlider() {

    const slider = React.useRef(null)
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style }}
                onClick={onClick}
            />
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style }}
                onClick={onClick}
            />
        );
    }
    SampleNextArrow.propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        onClick: PropTypes.func
    };

    SamplePrevArrow.propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        onClick: PropTypes.func
    };

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />

    };
    return (
        <div className="slider-container relative">
            <div className="absolute top-1/2 z-10 flex justify-between w-full">
                <button className="md:h-8 md:w-8 bg-zinc-300 flex justify-center items-center" onClick={() => slider?.current?.slickPrev()}><FaChevronLeft /></button>
                <button className="md:h-8 md:w-8 bg-zinc-300 flex justify-center items-center" onClick={() => slider?.current?.slickNext()}><FaChevronRight /></button>
            </div>

            <Slider ref={slider} {...settings}>
                <div className="relative">
                    <img src="/logo/banner.jpg" className="w-full" />
                    <div className={`container mx-auto absolute inset-0 flex justify-start items-center`}>
                        <div className="md:h-96 md:w-1/2 w-full p-2">
                            <h1 className="mb-1 md:mb-6 md:text-[30px] pt-2 md:pt-6 text-gray-700 lg:text-7xl text-lg font-semibold tracking-wide font-fjalla">Boat Headphone Sets</h1>
                            <h2 className="text-base  lg:text-4xl font-normal mb-1 uppercase md:mb-5">Sale Offer</h2>
                            <p className="ec-slide_para w-4/5 md:w-1/2 md:mb-6 mb-1 md:text-xl text-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            <p className="md:px-4 px-1 text-[8px] md:text-lg  py-1 md:py-2 uppercase inline-block font-sans bg-zinc-500 text-white">Order Now</p>

                        </div>
                    </div>
                </div>


            </Slider>
        </div>
    );
}

export default SimpleSlider;
