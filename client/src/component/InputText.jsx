import PropTypes from "prop-types";
import { useState } from "react";

const InputText = (props) => {
  const { type, name } = props;
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };
  return (
    <>
      <input
        required
        value={inputValue}
        name={name}
        id={name}
        type={type}
        onChange={handleChange}
        className="input-text"
      />
    </>
  );
};

InputText.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default InputText;
