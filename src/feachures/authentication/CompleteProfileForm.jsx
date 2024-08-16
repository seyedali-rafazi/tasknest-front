import React, { useEffect } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import Loading from "../../ui/Loading";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../ui/RadioInputGroup";
import useUser from "./useUser";

function CompleteProfileForm() {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (user && user.isActive) navigate("/", { replace: true });
  }, [user, navigate]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const onSubmit = async (data) => {
    try {
      const response = await mutateAsync(data);
      const { user, message } = response.data.data;
      toast.success(message);
      if (user.status !== 2) {
        navigate("/");
        toast("Your profile is awaiting approval.", { icon: "👏" });
        return;
      }
      if (user.role == "OWNER") {
        return navigate("/");
      }
      if (user.role == "FREELANCER") {
        return navigate("/");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="flex min-h-screen justify-center items-center p-8 w-full">
      <div className="w-full max-w-md space-y-8">
        <h1 className="font-bold  text-xl sm:text-2xl flex justify-center w-full">
          Completion of information
        </h1>
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            className="textfield__input"
            label="Name and surname:"
            name="name"
            register={register}
            validationSchema={{
              required: "Name and surname are required",
            }}
            errors={errors}
          />
          <TextField
            className="textfield__input"
            label="Email"
            name="email"
            register={register}
            validationSchema={{
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email is invalid",
              },
            }}
            errors={errors}
          />
          <RadioInputGroup
            register={register}
            watch={watch}
            errors={errors}
            config={{
              name: "role",
              validationSchema: {
                required: "Email is required",
              },
              options: [
                {
                  value: "OWNER",
                  label: "Owner",
                },
                {
                  value: "FREELANCER",
                  label: "Freelancer",
                },
              ],
            }}
          />
          <div>
            {isPending ? (
              <Loading />
            ) : (
              <button type="submit" className="btn btn--primary w-full">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompleteProfileForm;
