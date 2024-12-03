import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logoVet.png";
import { navItems } from "../constants";

const Navbar = () => {
    const [mobileDrawerOpen, setmobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setmobileDrawerOpen(!mobileDrawerOpen);
    }

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-black">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <a href="#" className="flex items-center flex-shrink-0">
                        <img className="h-10 w-11 mr-2" src={logo} alt="logo" />
                        <span className="text-xl tracking-tight text-black">Veterina Napajedla</span>
                    </a>
                    <ul className="hidden lg:flex ml-14 space-x-12 text-black">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="hover:text-green-500">{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? (
                                <X stroke="black" strokeWidth={2} />
                            ) : (
                                <Menu stroke="black" strokeWidth={2} />
                            )}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-white w-full p-6 flex flex-col justify-center items-center lg:hidden text-black border-color-black">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href} className="hover:text-green-500">{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;