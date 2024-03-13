import PropTypes from "prop-types"

const Color = ({ handleChange }) => {

    const colors = ["Green", "Red", "Blue", "Yelloo"]
    return (
        <div className="p-2">
            <h3 className="text-lg font-semibold mb-3">Colors</h3>
            <div className="flex flex-col gap-2 pl-3">
                {
                    colors.map((color, index) => (
                        <label key={index} className="font-normal cursor-pointer">
                            <input type="radio" onChange={handleChange} value={color} name="color" />
                            <span className="pl-2"> {color}</span>
                        </label>
                    ))
                }

            </div>

        </div>
    )
}
Color.propTypes = {
    handleChange: PropTypes.func.isRequired
}

export default Color