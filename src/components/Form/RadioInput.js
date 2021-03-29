import React, { useState } from 'react';
import { ErrorMessage } from "formik";
import { Radio } from "antd";
import cl from "classnames";
import './InputStyle.scss'


const RadioInput = (props) => {

    const [error, setError] = useState(0);
    const { value, name, onChange, onBlur, label, err, options, defaultValue, disabled } = props;

    return (
        <div className="radio-wrapper">
            {!(err && error) ? <label htmlFor={name}>{label}</label> : ""}
            <Radio.Group name={name} value={value} onChange={onChange} onBlur={onBlur}
                disabled={disabled || false}
                defaultValue={defaultValue} className={cl((err && error) ? 'error_input' : "")}>
                {options.map((item, index) => (
                    <Radio value={item.value} key={index}>{item.label}</Radio>
                ))}
            </Radio.Group>
            <ErrorMessage name={name}>
                {errorMessage => {
                    // setError(1);
                    return (
                        <div className="error_message">{errorMessage}</div>
                    )
                }}
            </ErrorMessage>
        </div>
    );
}

export default RadioInput;