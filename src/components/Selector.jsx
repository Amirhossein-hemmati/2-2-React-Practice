
const colorOptions = [
    { value: "",label: "Please Pick A Color" },
    { value: "red", label: "Red" },
    { value: "blue", label: "Blue" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
];
const colors = ({change,color}) => {
    return (
        <select value={color} onChange={change}>
            {colorOptions.map((colorOptions, index) =>
                <option key={index} value={colorOptions.value}>
                    {colorOptions.label}
                </option>
            )}
        </select>
    )
}

export default colors;