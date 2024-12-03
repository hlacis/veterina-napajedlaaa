import { navItems } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 py-10 bg-white text-black border-t border-neutral-300">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  className="text-neutral-700 hover:text-green-500 transition-all duration-300"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 text-center text-neutral-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Veterina Napajedla - Všechna práva vyhrazena</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;