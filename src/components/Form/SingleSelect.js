import React, { useState } from 'react'
import Select from 'react-select'
import { ErrorMessage } from 'formik'
import cl from 'classnames'
import './InputStyle.scss'


const SingleSelect = (props) => {

  const [error, setError] = useState(0)
  const { options, name, label, onBlur, placeholder, err, className, styles, isLoading, value, defaultValue, disabled } = props

  const onChange = (option) => {
    props.onChange(props.name, option.value)
    // setError(0)
  }

  return (
    <div className={cl('SingleSelect SingleSelect-wrapper', className ? className : '')}>
      {
        label !== undefined
          ? <label htmlFor={name}> {label} </label>
          : ''
      }

      <Select
        closeMenuOnSelect={true}
        name={name}
        value={value}
        options={options}
        onChange={onChange}
        onBlur={onBlur}
        styles={styles || {}}
        disabled={disabled}
        isSearchable={true}
        className={cl('_single-select',
          (err && error || error) ? 'error_input' : '')}
        classNamePrefix='_single-select'
        placeholder={placeholder || ''}
        isDisabled={disabled}
        isLoading={isLoading}
        defaultValue={defaultValue}
      />
      <ErrorMessage name={name}>
        {errorMessage => {
          // setError(1)
          return <div className='error_message'> {errorMessage} </div>
        }}
      </ErrorMessage>

    </div>
  )
}
export default SingleSelect
