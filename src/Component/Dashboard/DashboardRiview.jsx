import Swal from "sweetalert2";

const DashbordRiview = () => {
  const handleriview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const feedback = form.feedback.value;
    const newRiview = {
      feedback,
      name,
      image,
    };

    fetch("https://task-management-server-inky-two.vercel.app/riview", {
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
            text: "Rieview succesfull",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      });
  };
  return (
    <div>
      <div className="anime-one ">
        <div className="text-black body-font relative">
          <div className=" px-5  mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl md:text-5xl h-one  font-bold title-font mb-4 text-gray-900">
                Add Riview
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <form onSubmit={handleriview}>
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label className="leading-7   text-sm text-black">
                        Name
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input border-black text-black focus:border-black dark:border-2 h-one input-bordered w-full max-w-xs"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label className="leading-7  text-sm text-black">
                        Rating
                      </label>
                      <input
                        required
                        type="text"
                        name="ratting"
                        placeholder="rating"
                        className="input h-one focus:border-black  text-black  dark:border-2 input-bordered border-black w-full max-w-xs"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full ">
                    <div className="relative">
                      <label className="leading-7 text-sm text-black">
                        Photo url
                      </label>
                      <input
                        required
                        type="text"
                        name="image"
                        placeholder="photo"
                        className="input h-one  focus:border-black dark:border-2  text-black input-bordered border-black w-full "
                      />
                    </div>
                  </div>
                  <div className="p-2 h-one w-full">
                    <div className="relative">
                      <label className="leading-7  text-sm h-one text-black">
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="feedback"
                        className="w-full  border-2`  bg-opacity-50 rounded border  border-black h-one focus:border-indigo-500 bg-white  focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button
                      type="submit"
                      className="flex btn btn-three mx-auto border-2 text-black bg-transparent border-black  rounded text-lg"
                    >
                      Submit
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

export default DashbordRiview;
