import { useEffect, useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CorosolMap from "./CorosoleMap";
const Testimonial = () => {
  const [corosoulData, setCorousolData] = useState();
  console.log(corosoulData);
  useEffect(() => {
    fetch("http://localhost:5000/riview")
      .then((res) => res.json())
      .then((data) => setCorousolData(data));
  }, []);
  return (
    <div
      id="test"
      className="lg:mt-56 anime-two  bottom-0 mt-10 md:mt-20 bg-gradient-to-b from-white via-[#f7fdfd]  to-white"
    >
      <div className="text-center md:mt-20 lg:mb-0 mt-10">
        <h1 className="text-white text-5xl font-bold h-one">
          USER TESTIMONIALS
        </h1>
      </div>
      <Carousel>
        {corosoulData?.map((corosul) => (
          <CorosolMap key={corosul.id} corosul={corosul}></CorosolMap>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
