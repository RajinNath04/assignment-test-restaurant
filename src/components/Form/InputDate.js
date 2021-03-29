import React, { useState } from 'react'
import { DatePicker } from 'antd'
import cl from 'classnames'
import { ErrorMessage } from 'formik'
import moment from 'moment';

import './InputStyle.scss'


const InputDate = (props) => {

    const [error, setError] = useState(0)
    const { options, name, label, onChange, onBlur, placeholder, value, err, disabled, disabledDate, suffixIcon, format, disabledType } = props
    const dateFormat = 'DD-MM-YYYY'
    return (
        <div className='inputDate inputDate-wrapper'>
            {
                label !== undefined
                    ? <label htmlFor={name}> {label} </label>
                    : ''
            }

            <DatePicker
                name={name}
                value={value === "" || !value ? null : moment(value, format ? format : dateFormat)}
                options={options}
                onChange={onChange}
                allowClear={true}
                disabledDate={disabledDate}
                suffixIcon={suffixIcon}
                disabled={disabled}
                format={format ? format : dateFormat}
                disabled={disabled ? true : false}
                placeholder={placeholder || ''}
                onBlur={onBlur}
                className={cl((err && error) ? 'error_input' : '')}
            />
            <ErrorMessage name={name}>
                {errorMessage => {
                    return (
                        <div className='error_message'>
                            {errorMessage}
                        </div>
                    )
                }}
            </ErrorMessage>
        </div>
    )
}
export default InputDate