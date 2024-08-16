import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../../../ui/TextField";
import Loading from "../../../ui/Loading";
import useCreateProposal from "./useCreateProposal";

function CreateProposal({ onClose, projectId }) {
  const { createProposal, isCreating } = useCreateProposal();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const newProposal = { ...data, projectId };
    createProposal(newProposal, {
      onSuccess: () => {
        onClose();
        reset;
      },
    });
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className="textfield__input"
          label="Description"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "Description is required",
            minLength: {
              value: 10,
              message: "Enter at least 10 characters",
            },
          }}
          errors={errors}
        />
        <TextField
          className="textfield__input"
          label="Price"
          name="price"
          register={register}
          required
          type="number"
          validationSchema={{
            required: "Price is required",
          }}
          errors={errors}
        />
        <TextField
          className="textfield__input"
          label="Duration"
          name="duration"
          register={register}
          required
          type="number"
          validationSchema={{
            required: "Duration is required",
          }}
          errors={errors}
        />
        <div className="!mt-8">
          {isCreating ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full ">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CreateProposal;
