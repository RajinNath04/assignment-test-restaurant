import React, { useState } from 'react';
import Select from 'react-select';
import { ErrorMessage } from "formik";
import cl from "classnames";

const MultiSelect = (props) => {

    const [error, setError] = useState(0);
    const { options, name, label, value, onBlur, placeholder, err, disabled } = props;

    const handleChange = (value) => {
        props.onChange(name, value);
    };

    return (
        <div className="MultiSelect">
            {(label) ? <label htmlFor={name}>{label}</label> : ""}
            <Select
                styles={{
                    indicatorSeparator: () => { },
                }}
                closeMenuOnSelect={false}
                isMulti
                name={name}
                value={value}
                options={options}
                isClearable={true}
                isSearchable={true}
                onChange={handleChange}
                onBlur={onBlur}
                classNamePrefix="_mutli-select"
                className={cl('_mutli-select', (err && error) ? 'error_input' : '')}
                placeholder={placeholder || ""}
                isDisabled={disabled || undefined}
            />
            <ErrorMessage name={name}>
                {errorMessage => {
                    return <div className="error_message">{errorMessage}</div>
                }}
            </ErrorMessage>
        </div>
    );
}
export default MultiSelect;