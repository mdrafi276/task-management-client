import toast from "react-hot-toast";
import useAxios from "./Dashboard/useAxios";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { data } from "autoprefixer";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";

const EditTask = () => {
  const axios = useAxios();
  const loadedTask = useLoaderData();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const title = data.title;
    const date = data.date;
    const description = data.description;
    const priority = data.priority;
    const taskData = {
      title,
      date,
      description,
      priority,
    };
      axios.put(`/task/${loadedTask._id}, taskData`).then((res) =>
      {
        console.log(res.data)
      if (res.data?.modifiedCount > 0) {
        toast.success("Updated successfully!");
      }
    });
  };
  return (
    <div className="z-10 w-full flex justify-center ">
      <div className="form-container w-full lg:w-[600px]">
        <h3 className="text-4xl font-bold text-gray-300 text-center">
          Edit Your Next Task
        </h3>
        <form className="z-50" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control z-10">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="Title"
              className="input input-bordered"
              defaultValue={loadedTask?.title}
              required
            />
            {errors.title && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>

          <div className="form-control z-10">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              {...register("date", { required: true })}
              className="input input-bordered"
              defaultValue={loadedTask?.date}
              required
            />
            {errors.date && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="form-control z-10">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              type="text"
              {...register("description", { required: true })}
              placeholder="Description"
              className="input input-bordered textarea-md"
              defaultValue={loadedTask?.description}
              required
            />
            {errors.description && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <label className="form-control z-10 w-full">
            <div className="label">
              <span className="label-text">priority</span>
            </div>
            <select
              {...register("priority", { required: true })}
              className="select select-bordered"
              defaultValue={loadedTask?.priority}
            >
              <option disabled>Pick one</option>
              <option value="high">High</option>
              <option value="moderate">Moderate</option>
              <option value="low">Low</option>
              <option value="optional">Optional</option>
            </select>
          </label>
          {errors.priority && (
            <span className="text-red-600">This field is required</span>
          )}

          <button type="submit" className="mt-5 z-10 task-btn w-full">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTask;