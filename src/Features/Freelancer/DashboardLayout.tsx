import React from 'react'
import DashboardHeader from '../Owner/DashboardHeader'
import Loading from '../../UI/Loading'
import Stats from '../Owner/Stats'
import useProposals from '../../hooks/useProposals'

function DashboardLayout() {
    const {isLoading, proposals} = useProposals()
    if (isLoading) return <Loading height={50} width={30}/>
  return (
    <div>
        <DashboardHeader/>
        <Stats proposals={proposals}/>
    </div>
  )
}

export default DashboardLayout