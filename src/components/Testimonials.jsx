import { doctorsSchedule } from "../constants";
import { useEffect } from "react";
import { gsap } from "gsap";

const Testimonials = () => {
  useEffect(() => {
    gsap.fromTo(
      ".doctor-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <section id="testimonials" className="pt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 mb-6 text-black">
        Kdy tu pro
        <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">{" "}Vás jsme</span>
      </h2>
      <div className="flex flex-wrap justify-center">
        {doctorsSchedule.map((doctor, index) => (
          <div key={index} className="doctor-card w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="bg-neutral-100 rounded-lg shadow-md p-6 h-full">
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                {doctor.name}
              </h3>
              <p className="text-lg font-medium text-neutral-700 mb-4">
                {doctor.specialization}
              </p>
              <ul className="text-neutral-600">
                {doctor.hours.map((hour, hourIndex) => (
                  <li key={hourIndex} className="flex justify-between mb-2">
                    <span>{hour.day}</span>
                    <span>{hour.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;