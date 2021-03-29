import React, { useState } from 'react';
import { ErrorMessage } from "formik";
import { Checkbox } from "antd";
import cl from "classnames";
import './InputStyle.scss'


const AntdCheckBox = (props) => {

    const [error, setError] = useState(0);
    const { checked, name, onChange, onBlur, label, fieldLabel, err, defaultChecked, disabled } = props;

    return (
        <div className="radio-wrapper">
            {!(err && error) ? <label htmlFor={name}>{fieldLabel}</label> : ""}
            <Checkbox
                name={name}
                checked={checked}
                onChange={onChange}
                blur={onBlur}
                disabled={disabled || false}
                defaultChecked={defaultChecked}
                className={cl((err && error) ? 'error_input' : "")}>
                {label}
            </Checkbox >
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

export default AntdCheckBox;