import React from 'react'
import DashboardHeader from '../Owner/DashboardHeader'
import Loading from '../../UI/Loading'
import Stats from '../Owner/Stats'

function DashboardLayout() {

    if (isLoading) return <Loading/>
  return (
    <div>
        <DashboardHeader/>
        <Stats/>
    </div>
  )
}

export default DashboardLayout