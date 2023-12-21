import { Link } from 'react-router-dom';
import './Hero.css'
const Hero = () => {
  return (
    <div>
      <div className="flex  h-[100vh] anime-one  backdrop-blur flex-col md:flex-row items-center justify-center  lg:gap-36 ">
        <div className=" ">
          <h1 className="lg:text-5xl text-center md:text-start md:text-4xl text-2xl   font-bold text-black">
            Elevate Your Productivity <br />
            with Pro Task
          </h1>
          <p className="py-6 text-center md:text-start  text text-black text-[10px] md:text-[12px] lg:text-[14px]">
            Prioritize intelligently with Pro Task's smart prioritization
            features. Ensure that your <br /> most important tasks are always at
            the forefront of your attention
          </p>
          <div className="flex justify-center md:justify-start ">
            <Link to="/dashboard/CreateTask">
              {" "}
              <button className="c-button  c-button--gooey  text-sm  rounded-2xl ">
                {" "}
                Let's Explore
                <div className="c-button__blobs  rounded-xl">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>
            </Link>
          </div>
        </div>

        <div className=" w-[250px] mt-10 md:mt-0 md:w-[300px] lg:w-[500px] ">
          <img
            className="w-full"
            src="https://i.ibb.co/mRrnrxg/7118756-3426526.jpg"
          />
        </div>
      </div>
      <div className=" absolute w-[100%] md:-mt-[30px]   lg:-mt-[160px] flex justify-center">
        <button className="mouse animate-bounce ">
          <div className="scroll"></div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
