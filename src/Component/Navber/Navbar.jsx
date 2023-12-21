import { useContext } from "react";
import Headroom from "react-headroom";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Authporvider";
import Swal from "sweetalert2";
import profile from '../../assets/user.png'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Successfully SignOut From Your Account",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .catch();
  };
   const navLink = (
     <>
       <li>
         <NavLink
           className={({ isActive, isLoading }) =>
             isLoading
               ? "loading"
               : isActive
               ? "text-black bg-[#32D2D7] hover:text-black "
               : ""
           }
           to="/"
         >
           Home
         </NavLink>
       </li>

       <li>
         <NavLink
           className={({ isActive, isLoading }) =>
             isLoading
               ? "loading"
               : isActive
               ? "text-black bg-[#32D2D7] hover:text-yellow-300"
               : ""
           }
           to="/contactUs"
         >
           Contact us
         </NavLink>
       </li>
       <li>
         <NavLink
           className={({ isActive, isLoading }) =>
             isLoading
               ? "loading"
               : isActive
               ? "text-black bg-[#32D2D7] hover:text-[#42a6a9]"
               : ""
           }
           to="/dashboard/dashboardUser"
         >
           Dashboard
         </NavLink>
       </li>
     </>
   );
    return (
      <Headroom>
        <div>
          <div className="navbar container mx-auto backdrop-blur bg-white/5  ">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn  btn-ghost  lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm text-black   font-bold dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {navLink}
                </ul>
              </div>
              <h1 id="title-h1" className=" flex items-center  h-[30px]  ">
                <img
                  className="w-[150px] "
                  src="https://i.ibb.co/Mgjk8W0/images-2-removebg-preview.png"
                  alt=""
                />
              </h1>
            </div>
            <div className="navbar-center hidden   lg:flex">
              <ul className="menu menu-horizontal font-bold  px-1">
                {navLink}
              </ul>
            </div>
            <div className="navbar-end">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL ? user.photoURL : profile}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content text-black font-semibold mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52"
                >
                  {" "}
                  <Link to="/Profile">
                    <li>
                      <a className="justify-between hover:bg-[#00DFC0] hover:rounded-2xl">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>{" "}
                  </Link>
                  <li className="hover:bg-[#00DFC0] hover:rounded-2xl">
                    <Link to="/dashboard/dashboardUser">
                      {" "}
                      <a>Dashboard</a>
                    </Link>
                  </li>
                  <li className="hover:bg-[#00DFC0] hover:rounded-2xl">
                    <Link to="/register">
                      {" "}
                      <a>Register</a>
                    </Link>
                  </li>
                  <li className="hover:bg-[#00DFC0] hover:rounded-2xl">
                    {user ? (
                      <div>
                        <button onClick={handleSignOut} className="  ">
                          Logout
                        </button>
                      </div>
                    ) : (
                      <Link to="/login">
                        <buttone className="hover:bg-[#00DFC0] hover:rounded-2xl ">
                          Login
                        </buttone>
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Headroom>
    );
};

export default Navbar;