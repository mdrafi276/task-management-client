import Swal from "sweetalert2";
import Navbar from "../Navber/Navbar";

const ContactUs = () => {
  const handlSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    const email = form.email.value;
    const feedback = form.feedback.value;
    const newRiview = {
      feedback,
      name,
      number,
      email,
    };

    fetch("https://task-management-server-inky-two.vercel.app/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRiview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "success",
            text: " succesfull",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      });
  };
  return (
    <div>
      <div className="bg-[#00DFC0]">
        <Navbar></Navbar>
      </div>
      <div></div>
      <div>
        <div className=" body-font bg-[#00DFC0] min-h-[100vh] anime-one relative">
          <div className=" px-5 py-5 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl md:text-5xl  font-bold title-font mb-4 text-black">
                Contact Us
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <form onSubmit={handlSubmit}>
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label className="leading-7  text-sm text-black">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input border-black  input-bordered w-full max-w-xs"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label className="leading-7 text-sm text-black">
                        Phone Number
                      </label>
                      <input
                        type="number"
                        name="number"
                        placeholder="Phone Number"
                        className="input   input-bordered border-black w-full max-w-xs"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full ">
                    <div className="relative">
                      <label className="leading-7 text-sm text-black">
                        E-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="input input-bordered border-black w-full "
                      />
                    </div>
                  </div>
                  <div className="p-2  w-full">
                    <div className="relative">
                      <label className="leading-7  text-sm  text-black">
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="feedback"
                        className="w-full  border-2  rounded bg-white border-black  focus:border-indigo-500   focus:ring-2  h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors "
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button
                      type="submit"
                      className="flex btn btn-three mx-auto text-black bg-transparent border-2  rounded text-lg"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
