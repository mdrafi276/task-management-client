import './Taskmaster.css'
import { IoIosColorPalette } from "react-icons/io";
import { FaCode, FaUsers, } from "react-icons/fa";
import { MdCorporateFare } from "react-icons/md";
import { CiBank } from "react-icons/ci";
import { SiMarketo } from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";
import { CgMoreO } from "react-icons/cg";


const Taskmaster = () => {
    return (
      <div id="proTask" className="mt-5 md:mt-16">
        <div className="">
          <div className="">
            <h2 className=" selection:bg-white h-one font-extrabold text-center md:text-4xl lg:text-5xl">
              Pro Task Team: For Every <br /> Profassional
            </h2>
            <h2 className="text-center">
              What would you like to manage with TaskMaster Work OS?
            </h2>
          </div>
        </div>
        <div className=" mt-2 md:mt-20 grid grid-cols-1 md:grid-cols-2 md:w-[85%] gap-4 mx-auto lg:grid-cols-4">
          {" "}
          <div className="card w-full md:w-[280px] h-[180px]">
            <h1>
              <IoIosColorPalette className="text-3xl" />
            </h1>
            <h1> Creative & Design</h1>
          </div>
          <div className="card w-full md:w-[280px] h-[180px]">
            <h1>
              <FaCode className="text-3xl" />
            </h1>
            <h1>Developement</h1>
          </div>
          <div className="card w-full md:w-[280px] h-[180px]">
            <h1>
              <MdCorporateFare className="text-3xl" />
            </h1>
            <h1>Corporate Professionals</h1>
          </div>
          <div className="card w-full md:w-[280px] h-[180px]">
            <h1>
              <CiBank className="text-3xl" />
            </h1>
            <h1>Bankers</h1>
          </div>
          <div className="card w-full md:w-[280px] h-[180px]">
            <h1>
              <SiMarketo className="text-3xl" />
            </h1>
            <h1>Marketing</h1>
          </div>
          <div className="card w-full md:w-[280px] h-[180px]">
            <h1>
              <FaProjectDiagram className="text-3xl" />
            </h1>
            <h1>Project Management</h1>
          </div>
          <div className="card w-full md:w-[280px] h-[180px]">
            <h1>
              <FaUsers className="text-3xl" />
            </h1>
            <h1>HR</h1>
          </div>
          <div className="card w-full md:w-[280px] h-[180px]">
            <h1>
              <CgMoreO className="text-3xl" />
            </h1>
            <h1>More</h1>
          </div>
        </div>
      </div>
    );
};

export default Taskmaster;