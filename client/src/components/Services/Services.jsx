import { FaShippingFast } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";

const Services = () => {
    return (
        <div className="container mx-auto ">
            <div className="flex flex-wrap justify-center items-center gap-2 mb-4 md:mb-8">
                <div className="flex flex-col gap-4 md:mr-4 m-3 justify-center items-center p-3 md:p-8 border rounded max-w-80 hover:cursor-pointer hover:shadow-xl duration-150">
                    <FaShippingFast className="h-16 w-16" />
                    <div>
                        <h3 className="text-center font-semibold text-base md:text-lg">Free Shipping</h3>
                        <p className="text-center">Free shipping on all US order or order above $200</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 md:mr-4 m-3 justify-center items-center p-3 md:p-8 border rounded max-w-80 hover:cursor-pointer hover:shadow-xl duration-150">
                    <BiSupport className="h-16 w-16" />
                    <div>
                        <h3 className="text-center font-semibold text-base md:text-lg">24X7 Support</h3>
                        <p className="text-center">Contact us 24 hours a day, 7 days a week</p>
                    </div>
                </div><div className="flex flex-col gap-4 md:mr-4 m-3 justify-center items-center p-3 md:p-8 border rounded max-w-80 hover:cursor-pointer hover:shadow-xl duration-150">
                    <TbTruckReturn className="h-16 w-16" />
                    <div>
                        <h3 className="text-center font-semibold text-base md:text-lg">30 Days Return</h3>
                        <p className="text-center">Simply return it within 30 days for an exchange</p>
                    </div>
                </div><div className="flex flex-col gap-4 md:mr-4 m-3 justify-center items-center p-3 md:p-8 border rounded max-w-80 hover:cursor-pointer hover:shadow-xl duration-150">
                    <MdOutlineSecurity className="h-16 w-16" />
                    <div>
                        <h3 className="text-center font-semibold text-base md:text-lg">Payment Secure</h3>
                        <p className="text-center">Contact us 24 hours a day, 7 days a week</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services