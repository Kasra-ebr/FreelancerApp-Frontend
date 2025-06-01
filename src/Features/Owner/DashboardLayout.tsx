import React from 'react'
import DashboardHeader from './DashboardHeader'
import Stats from './Stats'
import useOwnerProjects from '../Projects/useOwnerProjects'
import Loading from '../../UI/Loading'

function DashboardLayout() {
    const {isLoading,projects} = useOwnerProjects()
    if (!isLoading) return <Loading height={50} width={50}/>
  return (
    <div>
        <DashboardHeader/> 
        <Stats projects={projects}/>
    </div>
  )
}

export default DashboardLayout