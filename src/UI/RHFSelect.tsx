import React from 'react'

function RHFSelect({label, name, register, options, required}) {
  return (
    <div>
        <label htmlFor={name} className='mb-2 block text-secondary-700'>
            {label} {required && <span className='text-error'>*</span>}
        </label>
        <select {...register(name)} id={name} className='textField__input'>
            {options.map(()=> (
                <option key={options.value} value={options.value}>
                    {options.label}
                </option>
            ))}
        </select>
    </div>
  )
}

export default RHFSelect