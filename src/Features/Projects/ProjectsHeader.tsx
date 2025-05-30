import React, { useState } from 'react'
import Modal from '../../UI/Modal'
import CreateProjectForm from './CreateProjectForm'
import Button from '../../UI/Button'
import { HiOutlinePlus } from 'react-icons/hi'

function ProjectsHeader() {
    const [open , setOpen ] = useState(false)
  return (
    <div className='flex items-center justify-between mb-8'
>
    <h1 className='font-black text-secondary-700 text-xl'></h1>
    <Modal title="Add a new project" open={open} onClose={()=> setOpen(false)}> 
        <CreateProjectForm onClose={()=>setOpen(false)} />
    </Modal>
    <Button onClick={()=> setOpen(true)}
        className='btn btn-primary flex items-center gap-x-2'>
            <HiOutlinePlus/>
            <span>Add New Project</span>
    </Button>
</div>
  )
}

export default ProjectsHeader