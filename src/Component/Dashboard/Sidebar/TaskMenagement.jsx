// import { useContext, } from "react";
// import useAxiosPublic from "../../../Provider/UseAxiosPublic";
// import { AuthContext,  } from "../../../Provider/Authporvider";
// import { useQuery } from "@tanstack/react-query";
// import { GrEdit, GrTrash } from "react-icons/gr";

// const TaskMenagement = () => {
//     const {user, loding} = useContext(AuthContext)
//     const axiosPublic = useAxiosPublic()
//  const {
//     data: task = [],
//     isLoading,
//     refetch,
//   } = useQuery({
//     enabled: !loding,
//     queryKey: ["allTasks"],
//     queryFn: async () => {
//       const res = await axiosPublic.get(
//         `/task/${user?.email}`
//       );
//       return res.data;
//     },
//   });
//   console.log(task);
//     return (
//       <div>
//         <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
//           <div className="w-[250px] h-[120px] bg-red-400 rounded-2xl ">
//             <div className="flex justify-around">
//               <h1>rafi</h1>
//               <div className=" flex gap-3   top-0">
//                 <button className="  hover:scale-150 duration-200 bg-transparent text-white">
//                   <GrEdit />
//                 </button>
//                 <button className="  hover:scale-150 duration-200 bg-transparent text-white">
//                   <GrTrash />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default TaskMenagement;

import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { BiSolidTimeFive } from "react-icons/bi";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/Authporvider";
import axios from "axios";
const TaskMenagement = () => {
  const { user, loding } = useContext(AuthContext);

  const {
    data: tasks = [],
    isLoading,
    refetch,
  } = useQuery({
    enabled: !loding,
    queryKey: ["allTasks"],
    queryFn: async () => {
      const res = await axios.get(
        `https://task-management-server-inky-two.vercel.app/task/${user?.email}`
      );
      return res.data;
    },
  });
  const toDos = tasks.filter((task) => task.status === "to-do");
  const onGoing = tasks.filter((task) => task.status === "ongoing");
  const Completed = tasks.filter((task) => task.status === "completed");
  console.log(toDos);
  console.log(onGoing);
  console.log(Completed);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://task-management-server-inky-two.vercel.app/task/${id}`
          )
          .then((res) => {
            console.log(res.data);
            Swal.fire({
              title: "Deleted!",
              text: "Your task has been deleted.",
              icon: "success",
            });
            refetch();
          });
      }
    });
  };
  return (
    <div className="z-50">
      <div className="bg-blue-950  z-50 p-4 rounded-2xl flex justify-between items-center w-full lg:w-full">
        <h1 className="text-2xl  text-gray-300 font-bold uppercase">Tasks</h1>
        <Link to="/dashboard/CreateTask">
          <button className="flex items-center text-white gap-3 bg-blue-800 px-5 py-3 rounded-2xl outline-none font-semibold">
            Create Tasks
            <FaPlus />
          </button>
        </Link>
      </div>

      <div className="grid z-50 grid-cols-1 lg:grid-cols-3 gap-4 my-8">
        {/* To Do */}
        <div className="bg-teal-600 rounded-2xl border border-gray-400 p-4">
          <p className="text-white text-xl font-bold flex gap-2 items-center">
            <MdCheckBoxOutlineBlank /> To Do
          </p>
          <hr />
          {toDos.map((toDo) => (
            <div key={toDo._id}>
              <div className="rounded-xl my-4 bg-secondary text-primary-content group">
                <div className="card-body">
                  <div className="transition-transform  duration-1000 card-actions  flex flex-row justify-end gap-4">
                    <button
                      onClick={() => handleDelete(toDo._id)}
                      className="text-lg text-white"
                    >
                      <FaTrash />
                    </button>
                    <Link to={`/dashboard/editTask/${toDo._id}`}>
                      <button className="text-lg text-white">
                        <FaEdit />
                      </button>
                    </Link>
                  </div>
                  <h2 className="text-lg font-medium">{toDo?.title}</h2>
                  <h2 className="text-lg font-medium text-black">
                    Date: {toDo?.date}
                  </h2>
                  <p className="text-lg text-gray-700 font-bold">
                    Priority: {toDo?.priority}
                  </p>
                  <p>{toDo?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Ongoing  */}
        <div className="bg-pink-600 rounded-2xl border border-gray-400 p-4">
          <p className="text-white text-xl font-bold flex gap-2 items-center">
            <BiSolidTimeFive /> ongoing
          </p>
          <hr />
          {onGoing.map((going) => (
            <div key={going._id}>
              <div className="rounded-xl my-4 bg-secondary text-primary-content group">
                <div className="card-body">
                  <div className="transition-transform  duration-1000 card-actions  flex flex-row justify-end gap-4">
                    <button
                      onClick={() => handleDelete(going._id)}
                      className="text-lg text-white"
                    >
                      <FaTrash />
                    </button>
                    <Link to={`/dashboard/editTask/${going._id}`}>
                      <button className="text-lg text-white">
                        <FaEdit />
                      </button>
                    </Link>
                  </div>
                  <h2 className="text-lg font-medium">{going?.title}</h2>
                  <h2 className="text-lg font-medium text-black">
                    Date: {going?.date}
                  </h2>
                  <p className="text-lg text-gray-700 font-bold">
                    Priority: {going?.priority}
                  </p>
                  <p>{going?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-green-600 rounded-2xl border border-gray-400 p-4">
          <p className="text-white text-xl font-bold flex gap-2 items-center">
            <MdCheckBox /> Complete
          </p>
          <hr />
          {Completed.map((complete) => (
            <div key={complete._id}>
              {" "}
              <div className="rounded-xl my-4 bg-secondary text-primary-content group">
                <div className="card-body">
                  <div className="transition-transform  duration-1000 card-actions  flex flex-row justify-end gap-4">
                    <button
                      onClick={() => handleDelete(complete._id)}
                      className="text-lg text-red-700"
                    >
                      <FaTrash />
                    </button>
                    <Link to={`/dashboard/editTask/${complete._id}`}>
                      <button className="text-lg text-white">
                        <FaEdit />
                      </button>
                    </Link>
                  </div>
                  <h2 className="text-lg font-medium">{complete?.title}</h2>
                  <h2 className="text-lg font-medium text-yellow-700">
                    Date: {complete?.date}
                  </h2>
                  <p className="text-lg text-gray-700 font-bold">
                    Priority: {complete?.priority}
                  </p>
                  <p>{complete?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskMenagement;
