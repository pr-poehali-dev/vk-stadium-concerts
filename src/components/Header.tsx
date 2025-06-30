import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const navItems = [
    { name: "Афиша", href: "#afisha" },
    { name: "Расписание", href: "#schedule" },
    { name: "Цены", href: "#prices" },
    { name: "Как добраться", href: "#location" },
  ];

  return (
    <header className="bg-black text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Icon name="Music" size={32} className="text-white" />
            <span
              className="text-2xl font-bold"
              style={{ fontFamily: "Montserrat" }}
            >
              VK STADIUM
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors font-medium"
                style={{ fontFamily: "Open Sans" }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-black"
          >
            Купить билеты
          </Button>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
