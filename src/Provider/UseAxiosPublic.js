import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://task-management-server-inky-two.vercel.app/",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
