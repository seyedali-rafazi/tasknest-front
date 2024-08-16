import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Loading from "../../ui/Loading";
import useEditProfile from "./useEditProfile";
import TextField from "../../ui/TextField";
import useUser from "./useUser";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const { isPending, editProfile } = useEditProfile();
  const { user, isLoading } = useUser();
  const [userInput, setUserInput] = useState();
  const [emailInput, setEmailInput] = useState();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setUserInput(user?.name || "");
    setEmailInput(user?.email || "");
  }, [user]); // Update the dependency array

  const onSubmit = async (data) => {
    const updatedProfileData = {
      ...data,
    };
    editProfile(updatedProfileData);
    navigate("/");
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center p-8">
      <div className="w-full sm:max-w-sm space-y-8">
        <h1 className="font-bold  text-4xl flex justify-center">
          Update information
        </h1>
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            className="textfield__input"
            label="Name and surname:"
            name="name"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            register={register}
            errors={errors}
          />
          <TextField
            label="Email"
            name="email"
            register={register}
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            validationSchema={{
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email is invalid",
              },
            }}
            errors={errors}
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

export default EditProfile;
