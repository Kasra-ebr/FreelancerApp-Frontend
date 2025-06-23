import React from 'react'
import { useForm } from 'react-hook-form'
import TextField from '../../../UI/TextField'
import { Button } from '@headlessui/react';
import Loading from '../../../UI/Loading';
import useCreateProposal from '../../../hooks/useCreateProposal';

function CreateProposal({ onClose,project._id }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
const {createProposal, isCreating} = useCreateProposal()
const onSubmit = (data ) => {
createProposal({...data, project._id },{
  onSuccess: ()=> onClose(), 
})
}
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Description"
          name="description"
          type='number'
          register={register}
          validationSchema={{
            required: "Price is necessary",
            minLength: {
             
              message: "Please add at least 10 characters",
            },
          }}
          errors={errors}
        />
         <TextField
          label="Description"
          name="description"
              type='number'
          register={register}
          validationSchema={{
            required: "Time is necessary",
            minLength: {
        
              message: "Please add at least 10 characters",
            },
          }}
          errors={errors}
        />
        <div>
            {
           isCreating ? (<Loading height={50} width={30}/>) :  <Button type="submit" className="btn btn--primary mt-4">
          Submit
        </Button>
            }
        </div>
       
      </form>
    </div>
  );
}

export default CreateProposal;
