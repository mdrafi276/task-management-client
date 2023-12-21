import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useContext } from "react";
import './CreateNewTask.css'

import useAxiosPublic from "../../../Provider/UseAxiosPublic";
import { AuthContext } from "../../../Provider/Authporvider";
const CreateNewTask = () => {
  const { user } = useContext(AuthContext);
  const axios = useAxiosPublic();
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
      userEmail: user?.email,
      status: "to-do",
    };
    axios
      .post("/task", taskData)
      .then((res) => {
        toast.success("Task added successfully!");
        console.log(res.data);
        reset();
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err.message);
      });
  };

  return (
    <div className="z-10 w-full flex justify-center ">
      <div className="form-container w-full lg:w-[600px]">
        <h3 className="text-4xl font-bold text-gray-300 text-center">
          Begin Your Next Task
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
              className="input input-bordered text-black"
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
              className="input input-bordered text-black"
              required
            />
            {errors.date && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="form-control z-10">
            <label className="label">
              <span className="label-text text-black">Description</span>
            </label>
            <textarea
              type="text"
              {...register("description", { required: true })}
              placeholder="Description"
              className="input input-bordered text-black textarea-md"
              required
            />
            {errors.description && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <label className="form-control z-10 w-full">
            <div className="label">
              <span className="label-text text-black">priority</span>
            </div>
            <select
              {...register("priority", { required: true })}
              className="select select-bordered text-black"
              defaultValue=""
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
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewTask;
