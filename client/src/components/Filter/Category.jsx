
import PropTypes from "prop-types";


const Category = ({ handleChange }) => {
    // Array of category names
    const categories = ["All", "Athletic Shoes", "Boots", "Sneakers", "Dress Shoes", "Sandals", "Loafers"];

    return (
        <>
            <div className="p-2">
                <h3 className="text-lg font-semibold mb-3">Category</h3>
                <div className="flex flex-col gap-2 pl-3">
                    {categories.map((category, index) => (
                        <label key={index} className="font-normal cursor-pointer">
                            <input
                                type="radio"
                                onChange={handleChange}
                                value={category}
                                name="Category"
                                defaultChecked={index === 0}
                            />
                            <span className="pl-2">{category}</span>
                        </label>
                    ))}
                </div>

            </div>


        </>
    );
}

Category.propTypes = {
    handleChange: PropTypes.func.isRequired
};

export default Category;
