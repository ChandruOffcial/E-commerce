import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter, FaPaperPlane } from "react-icons/fa";
import "../components.css"
import { useState } from "react"


const Footer = () => {
    const [accordion, setActiveAccordion] = useState(null);

    const handleAccordion = (index) => {
        setActiveAccordion(index === accordion ? null : index)

    }

    return (
        <>
            <div className="container-fluid">



                <div className="h-20 flex justify-center items-center text-center bg-[#777] text-white text-lg">
                    Win a contest! Get this limited-editon View Detail
                </div>

                <img src="/logo/logo.png" alt="" className="mt-4 h-11 m-4 lg:hidden" />

                <div className="hidden lg:flex container mx-auto mt-4 px-7 border-b-2 py-11">
                    <div className="w-1/4">
                        <img src="/logo/logo.png" alt="" className="mt-4 h-11 mb-5" />
                        <ul className="align-items-center">
                            <li className="mb-2 text-[#777]">71 Pilgrim Avenue Chevy Chase, east california.</li>
                            <li className="mb-2 text-[#777]"><span className="font-semibold">Call Us:</span><a href="tel:+440123456789">+44
                                0123 456 789</a></li>
                            <li className="mb-2 text-[#777]"><span className="font-semibold ">Email:</span><a href="mailto:example@ec-email.com">+example@ec-email.com</a></li>
                        </ul>

                    </div>
                    <div className="w-1/6 px-4">
                        <h2 className="mb-3 border-b border-[#77777796] font-semibold text-[17px] text-[#777] mt-3 tracking-wide pb-2">information</h2>
                        <p className="text-[#777] m-1 font-normal">About</p>
                        <p className="text-[#777] m-1 font-normal">FAQ</p>
                        <p className="text-[#777] m-1 font-normal">Delivary Infommation</p>
                        <p className="text-[#777] m-1 font-normal">Contact</p>
                    </div>
                    <div className="w-1/6 px-4">
                        <h2 className="mb-3 border-b border-[#77777796] font-semibold text-[17px] text-[#777] mt-3 tracking-wide pb-2">Account</h2>
                        <p className="text-[#777] m-1 font-normal">About</p>
                        <p className="text-[#777] m-1 font-normal">FAQ</p>
                        <p className="text-[#777] m-1 font-normal">Delivary Infommation</p>
                        <p className="text-[#777] m-1 font-normal">Contact</p>
                    </div>
                    <div className="w-1/6 px-4">
                        <h2 className="mb-3 border-b border-[#77777796] font-semibold text-[17px] text-[#777] mt-3 tracking-wide pb-2">Services</h2>
                        <p className="text-[#777] m-1 font-normal">About</p>
                        <p className="text-[#777] m-1 font-normal">FAQ</p>
                        <p className="text-[#777] m-1 font-normal">Delivary Infommation</p>
                        <p className="text-[#777] m-1 font-normal">Contact</p>
                    </div>
                    <div className="w-1/4">
                        <h2 className="mb-3 border-b border-[#77777796] font-semibold text-[17px] text-[#777] mt-3 tracking-wide pb-2">Newsletter</h2>
                        <p className="text-[#777] m-1 font-normal mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et at nostrum </p>
                        <div className="p-2 mt-2 flex rounded-sm border justify-between items-center ">
                            <input type="text" className="py-2 w-full focus:outline-none" placeholder="Enter your email.." />
                            <button className=" bg-blue-400 p-3 rounded-sm"><FaPaperPlane /></button>
                        </div>
                    </div>
                </div>

                {/* Accordion */}
                <div className="join join-vertical w-full p-3 lg:hidden">
                    <div className="collapse collapse-arrow join-item border-b-2 ">
                        <input className="footer__Accordion" type="checkbox" name="my-accordion-4" checked={accordion === 1} onChange={() => handleAccordion(1)} />
                        <div className="collapse-title font-medium text-[#777] text-base h-5 mb-3">
                            Contact Us
                        </div>
                        <div className="collapse-content">
                            <ul className="align-items-center">
                                <li className="mb-2 text-[#777]">71 Pilgrim Avenue Chevy Chase, east california.</li>
                                <li className="mb-2 text-[#777]"><span className="font-semibold">Call Us:</span><a href="tel:+440123456789">+44
                                    0123 456 789</a></li>
                                <li className="mb-2 text-[#777]"><span className="font-semibold ">Email:</span><a href="mailto:example@ec-email.com">+example@ec-email.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-b-2">
                        <input className="footer__Accordion" type="checkbox" name="my-accordion-4" checked={accordion === 2} onChange={() => handleAccordion(2)} />
                        <div className="collapse-title font-medium text-[#777] text-base h-5  mb-3">
                            information
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-b-2">
                        <input className="footer__Accordion" type="checkbox" name="my-accordion-4" checked={accordion === 3} onChange={() => handleAccordion(3)} />
                        <div className="collapse-title font-medium text-[#777] text-base h-5 mb-3">
                            Account
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-b-2">
                        <input className="footer__Accordion" type="checkbox" name="my-accordion-4" checked={accordion === 4} onChange={() => handleAccordion(4)} />
                        <div className="collapse-title font-medium text-[#777] text-base h-5 mb-3">
                            Services
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-b-2">
                        <input className="footer__Accordion" type="checkbox" name="my-accordion-4" checked={accordion === 5} onChange={() => handleAccordion(5)} />
                        <div className="collapse-title font-medium text-[#777] text-base h-5 mb-3">
                            Newsletter
                        </div>
                        <div className="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                </div>
                {/* social Icon */}
                <div className="lg:container lg:mx-auto lg:flex justify-between items-center pb-5">


                    <div className="flex justify-center items-center p-3">
                        <div className="flex space-x-4">
                            <div className="h-8 w-8 hover:cursor-pointer rounded-full bg-[#f7f7f7] group hover:bg-blue-700 flex justify-center items-center">
                                <FaFacebookF className="h-4 w-4 group-hover:cursor-pointer group-hover:text-white" />
                            </div>
                            <div className="h-8 w-8 hover:cursor-pointer rounded-full bg-[#f7f7f7] group hover:bg-orange-600 flex justify-center items-center">
                                <FaInstagram className="h-4 w-4 group-hover:cursor-pointer group-hover:text-white" />
                            </div>
                            <div className="h-8 w-8 hover:cursor-pointer rounded-full bg-[#f7f7f7] group hover:bg-blue-800 flex justify-center items-center">
                                <FaLinkedinIn className="h-4 w-4 group-hover:cursor-pointer group-hover:text-white" />
                            </div>
                            <div className="h-8 w-8 hover:cursor-pointer rounded-full bg-[#f7f7f7] group hover:bg-[#1da1f2] flex justify-center items-center">
                                <FaTwitter className="h-4 w-4 group-hover:cursor-pointer group-hover:text-white" />
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-[#777] text-sm font-semibold p-3">Copyright © 2023 ekka. All Rights Reserved</p>
                    <div className="hidden lg:flex">
                        <img src="/logo/payment.png" alt="" />
                    </div>

                </div>
                {/* For Large Devices */}


            </div>
        </>
    )
}

export default Footer