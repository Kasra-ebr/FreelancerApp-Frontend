import React from "react";
import RHFSelect from "../../UI/RHFSelect";
import { Button } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useChangeProposalStatus from "../../hooks/useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import Loading from "../../UI/Loading";

interface FormData {
  status: number;
}

function ChangeProposalStatus({ proposalId, onClose }: { proposalId: string; onClose: () => void }) {
  const options = [
    { label: "Denied", value: 0 },
    { label: "In Process", value: 1 },
    { label: "Approved", value: 2 },
  ];

  const { register, handleSubmit } = useForm<FormData>();
  const { id: projectId } = useParams();
  const { changeProposalStatus, isUpdating } = useChangeProposalStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data: FormData) => {
    changeProposalStatus(
      { id: proposalId, data },
      {
        onSuccess: () => {
          onClose?.();
          queryClient.invalidateQueries({ queryKey: ["project", projectId] });
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          name="status"
          label="Change Status"
          register={register}
          required
          options={options}
        />

        <div className="!mt-8">
          {isUpdating ? (
            <Loading height={50} width={30} />
          ) : (
            <Button type="submit" className="btn btn--primary w-full">
              Accept
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ChangeProposalStatus;
