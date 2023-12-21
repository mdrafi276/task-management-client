import Navbar from '../Navber/Navbar';
import Sidebar from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
      <div className="bg-[#00DFC0] min-h-screen">
        <div className="z-50  hidden md:block">
          <Navbar></Navbar>
        </div>

        <div className="max-w-7xl   mx-auto">
          <div className="">
            <Sidebar></Sidebar>
          </div>
          <div className="md:ml-64  lg:ml-52 2xl:ml-2 p-10">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;