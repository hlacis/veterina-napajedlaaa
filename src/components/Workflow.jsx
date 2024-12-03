import { testimonials } from "../constants";

const Workflow = () => {
  return (
    <section id="testimonials">
        <div className="pt-20 tracking-wide">
            <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 mb-6 text-black'>Náš
                <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">{" "}kolektiv</span>
            </h2>
            <div className="flex flex-wrap justify-center">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                        <div className="bg-neutral rounded-md p-4 text-sm font-thin">
                            <div className="flex mt-6 items-center">
                                <img
                                    className="w-32 h-32 mr-4 rounded-full border border-neutral-300 transform transition-transform duration-300 hover:scale-110"
                                    src={testimonial.image}
                                    alt={testimonial.user}
                                />
                                <div>
                                    <h6 className="text-base font-medium text-black">{testimonial.user}</h6>
                                    <span className="text-sm font-normal italic text-neutral-600">{testimonial.company}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

export default Workflow;