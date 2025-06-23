import React from 'react'
import Button from './Button'
import { useSearchParams } from 'react-router';
interface IFilter {

}
function Filter({filterfield,options}:IFilter) {
    const [searchParams, setSearchParams] = useSearchParams()
    const currentFilter = searchParams.get(filterfield) || options[0].at(0).value;

    function handleClick (value) {
        searchParams.set(filterfield,value)
        setSearchParams(searchParams)
    }
  return (
    <div className='flex items-center gap-x-2 text-xs'>
        <span>Status</span>
        <div className='flex items-center gap-x-2 border border-secondary-100 bg-secondary-0 rounded-lg'>
            {options.map((item)=> {
                const isActive = item.value === currentFilter
                return (
                    <Button 
                    onClick={()=> handleClick(item.value)} 
                    disabled={isActive} 
                    key={item.value}
                     className={`whitespace-nowrap rounded-md-bg-red-100 px-4 py-1.5 font-bold transition-all duration-300 ${isActive ? "!bg-primary-900 text-white" : " bg-secondary-0 text-secondary-800" } `}>
                        {item.label}
                    </Button>
                )
            })}
            
        </div>
    </div>
  )
}

export default Filter