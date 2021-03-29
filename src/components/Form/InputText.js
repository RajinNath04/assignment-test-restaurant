import React, { useState } from 'react'
import { ErrorMessage } from 'formik'
import { Input } from 'antd'
import cl from 'classnames'
import './InputStyle.scss'

const InputText = (props) => {
  const { id, value, name, type, onChange, icon, onBlur, label, err, disabled, maxLength, minLength, placeholder, className } = props;

  const [error, setError] = useState(0);
  const [updateType, setUpdatedType] = useState(props.type)

  const passwordViewHandler = () => {
    if (updateType === "text")
      setUpdatedType("password")
    else
      setUpdatedType("text")
  }

  return (
    <div className='input input-wrapper'>
      {
        label !== undefined
          ? <label htmlFor={name}> {label} </label>
          : ''
      }

      {icon && <div className='iconfront'><div dangerouslySetInnerHTML={{ __html: icon }} /></div>}

      <Input
        id={id && id}
        name={name}
        disabled={disabled}
        type={updateType || ''}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="off"
        className={cl((err && error) ? 'error_input' : className)}
        style={{ padding: icon !== undefined ? '0 0 0 35px' : "10px" }}
        maxLength={maxLength}
        minLength={minLength}

      />

      {
        type === "password"
        &&
        <div className="password-eye"
          onClick={() => passwordViewHandler()}>

        </div>
      }

      <ErrorMessage name={name}>
        {errorMessage => {
          // setError(1)
          return (
            <p className='error_message'>
              {errorMessage}
            </p>
          )
        }}
      </ErrorMessage>
    </div>
  )
}

export default InputText
