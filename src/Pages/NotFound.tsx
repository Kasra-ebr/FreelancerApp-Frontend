import React from 'react'
import { useNavigate } from 'react-router-dom'  // also fix import here
import Button from '../UI/Button'
import { HiArrowRight } from 'react-icons/hi'
import useMoveBack from '../hooks/useMoveBack'

function NotFound() {
const moveBack = useMoveBack()

  return (
    <div className="container xl:max-w-screen-xl mx-auto px-4 ">
        <div className="sm:max-w-sm flex justify-center">
      <div>
        <h1 className="text-xl font-bold text-secondary-700 mb-8">
          Page Not Found. Please Try Again.
        </h1>
        <Button onClick={moveBack} className="flex items-center gap-x-2">
          <HiArrowRight className="w-6 h-6 text-primary-900" />
          <span>Back</span>
        </Button>
      </div>
    </div>
    </div>
  )
}

export default NotFound
