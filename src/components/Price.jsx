import image1 from "../assets/cekarna.jpg";
import image2 from "../assets/ambulance.jpg";
import image3 from "../assets/sal.jpg";
import image4 from "../assets/laborator.jpg";

const Price = () => {
  return (
    <section id="pricing">
      <div className="pt-20">
      <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 mb-6 text-black'>Naše
            <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">{" "}prostory</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          <div className="relative group">
            <img
              src={image1}
              alt="Služba 1"
              className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
              <h3 className="text-lg text-white font-medium">Čekárna</h3>
            </div>
          </div>
          <div className="relative group">
            <img
              src={image2}
              alt="Služba 2"
              className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
              <h3 className="text-lg text-white font-medium">Vyšetřovna</h3>
            </div>
          </div>
          <div className="relative group">
            <img
              src={image3}
              alt="Služba 3"
              className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
              <h3 className="text-lg text-white font-medium">Sál</h3>
            </div>
          </div>
          <div className="relative group">
            <img
              src={image4}
              alt="Služba 4"
              className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
              <h3 className="text-lg text-white font-medium">Laboratoř</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;