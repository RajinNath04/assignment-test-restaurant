import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage } from 'formik'
import { Input } from 'antd'
import cl from 'classnames'
import './InputStyle.scss'

const InputTextArea = (props) => {

  const [error, setError] = useState(0)
  const { value, name, onChange, onBlur, label, cols, err, disabled, placeholder, maxLength } = props

  return (
    <div className='InputTextArea InputTextArea-wrapper'>
      {
        (label)
          ? <label htmlFor={name}> {label} </label>
          : ''
      }
      <Input.TextArea
        cols={cols}
        rows={cols}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        maxLength={maxLength ? maxLength : undefined}
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

export default InputTextArea
