import PropTypes from "prop-types";

const Price = ({ handleChange }) => {
    const data = ["$0-$50", "$50-$100", "$100-$150", "Over $200"];
    return (
        <div className="p-2">
            <h3 className="text-lg font-semibold mb-3">Price</h3>
            <div className="flex flex-col gap-2 pl-3">
                {data.map((value, index) => (
                    <label key={index} className="font-normal cursor-pointer">
                        <input onChange={handleChange} type="radio" value={value} name="price" />
                        <span className="pl-2">{value}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}

Price.propTypes = {
    handleChange: PropTypes.func.isRequired
}

export default Price;
