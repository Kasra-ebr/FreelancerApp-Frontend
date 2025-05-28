import React from 'react'
import Button from './Button'

interface IConfirm = {
    resourceName:string,
    onclose:()=> void,
    disabled:bolean,
    onConfirm:()=> void,
} 
function ConfirmDelete({resourceName,onclose,disabled,onConfirm}:IConfirm) {
  return (
    <div>
        <h2 className='font-bold text-base mb-8 '>
            Do you really want to delete this ? {resourceName}
        </h2>
        <div className='flex justify-items gap-x-16'>
            <Button
                className='btn btn--primary flex-1 '
                onClick={onclose}
                disabled={disabled}
            >
                Back
            </Button>
            <Button 
                onClick={onConfirm}
                disabled={disabled}
                className='btn btn--priamry flex-1 py-3'>
                    Confirm
            </Button>
        </div>
    </div>
  )
}

export default ConfirmDelete