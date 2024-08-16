import React from "react";
import RHFSelect from "../../../ui/RHFSelect";
import Loading from "../../../ui/Loading";
import { useForm } from "react-hook-form";
import useUserStatus from "./useUserStatus";
import { useQueryClient } from "@tanstack/react-query";

const options = [
  {
    label: "Rejected",
    value: "0",
  },
  {
    label: "Awaiting approval",
    value: "1",
  },
  {
    label: "Approved",
    value: "2",
  },
];

function ChangeUserStatus({ userId, onClose }) {
  const { register, handleSubmit, reset } = useForm();
  const { changeUserStatus, isUpdating } = useUserStatus();
  const queryClient = useQueryClient();

  const onSubmit = (data) => {
    changeUserStatus(
      { userId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["users"] });
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          name="status"
          label="Change request status"
          register={register}
          required
          options={options}
        />
        <div className="!mt-8">
          {isUpdating ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ChangeUserStatus;
