import { useEffect } from "react";
import { gsap } from "gsap";
import image1 from "../assets/homepageimage.jpg";
import image2 from "../assets/homepageimage2.jpg";
import mapLogo from "../assets/placeholder.png";  
import phoneLogo from "../assets/phone.png";  

const HeroSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-heading",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );

    gsap.fromTo(
      ".contact-item",
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.2, delay: 0.5, ease: "power3.out" }
    );

    gsap.fromTo(
      ".hero-image",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.3, delay: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="hero-heading text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-black">
            Propojujeme odbornou péči s důvěrou,
            <span className='bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text'>{" "}kterou si vaše zvířátka zaslouží</span>
        </h1>
        
        <div className="flex justify-center items-center mt-6 space-x-8">
            <div className="contact-item flex items-center space-x-2">
                <img src={mapLogo} alt="Map logo" className="w-6 h-6" />
                <p className="text-lg text-black">Na Kapli 1622, 763 61 Napajedla</p>
            </div>

            <div className="contact-item flex items-center space-x-2">
                <img src={phoneLogo} alt="Phone logo" className="w-6 h-6" />
                <a href="tel:+420123456789" className="text-lg text-black hover:text-green-800">+420 123 456 789</a>
            </div>
        </div>

        <div className='flex mt-10 justify-center'>
            <img src={image1} alt="Image 1" className="hero-image rounded-lg w-1/2 border border-green-700 shadow-sm shadow-green-400 mx-2 my-4" />
            <img src={image2} alt="Image 2" className="hero-image rounded-lg w-1/2 border border-green-700 shadow-sm shadow-green-400 mx-2 my-4" />
        </div>
    </div>
  );
}

export default HeroSection;