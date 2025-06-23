import React from 'react'
import { useSearchParams } from 'react-router'
import Select from './Select';

function FilterDropDown({options, filterfield}) {
    const [searchParams, setSearchParams] = useSearchParams()
    const category = searchParams.get(filterfield) || "";

    function handleChange (e) {
        searchParams.set(filterfield, e.target.value)
        setSearchParams(searchParams)
    }
  return (
   <Select value={category} onChange={handleChange} options={options}/>
       

  )
}

export default FilterDropDown

 {options.map(item => <option key={item.value} value={item.value} >{item.label}</option>)}