import React from 'react';
import PropTypes from 'prop-types';

TextInput.propTypes = {
    label: PropTypes.string,
    errorMessage: PropTypes.string,
    name: PropTypes.string.isRequired
};

function TextInput({label, errorMessage, ...rest}) {
    return (
        <label className="flex flex-col gap-2" htmlFor={name}>
            {label && <span className="font-bold">{label}</span>}
            <input name={name}
                   className={`${errorMessage && "border-red-600 focus:outline-red-500"} border py-1.5 px-2 rounded`}
                   {...rest}
            />
            {
                errorMessage && <span className="text-red-600 text-xs">{errorMessage}</span>
            }
        </label>
    );
}

export default TextInput;