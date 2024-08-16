import TextField from "../../ui/TextField";
import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategory";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);
  // if isEditSession is true then we want destracturing {title , description , category , tags ,...}
  const {
    title,
    description,
    budget,
    category,
    deadline,
    tags: prevTags,
  } = projectToEdit;
  let editValue = {};
  if (isEditSession) {
    editValue = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues: editValue });
  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { categories } = useCategories();
  const { isCreating, createProject } = useCreateProject();
  const { isEditing, editProject } = useEditProject();

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };
    if (isEditSession) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <div>
      <form
        className="space-y-8 bg-secondery-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          className="textfield__input"
          label="Title"
          name="title"
          register={register}
          required
          validationSchema={{
            required: "Title is required",
            minLength: {
              value: 10,
              message: "At least enter 10 charecter",
            },
          }}
          errors={errors}
        />
        <TextField
          className="textfield__input"
          label="Description"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "Description is required",
            minLength: {
              value: 20,
              message: "At least enter 20 charecter",
            },
          }}
          errors={errors}
        />
        <TextField
          className="textfield__input"
          label="Budget"
          name="budget"
          type="number"
          register={register}
          required
          validationSchema={{
            required: "Budget is required",
          }}
          errors={errors}
        />
        <RHFSelect
          register={register}
          label="Category"
          name="category"
          errors={errors}
          required
          options={categories}
        />
        <div>
          <label className="mb-2 block text-secondery-700">Tags</label>
          <TagsInput value={tags} onChange={setTags} name="tags" />
        </div>
        <DatePickerField date={date} setDate={setDate} label="Deadline" />
        <div className="!mt-8">
          {isCreating || isEditing ? (
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

export default CreateProjectForm;
