export default function Navigation() {
  const scrollToSection = (id:string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <nav className="hidden lg:visible lg:flex lg:items-center">
      <ul className="flex items-center gap-4 whitespace-nowrap">
        <li className="transition-all hover:scale-110 hover:animate-pulse">
          <a
            className="text-01"
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            Хто ми
          </a>
        </li>
        <li className="transition-all hover:scale-110 hover:animate-pulse">
          <a
            className="text-01"
            href="#services"
          >
            Послуги та ціни
          </a>
        </li>
        <li className="transition-all hover:scale-110 hover:animate-pulse">
          <a
            className="text-01"
            href="#values"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("values");
            }}
          >
            Наші цінності
          </a>
        </li>
        <li className="transition-all hover:scale-110 hover:animate-pulse">
          <a
            className="text-01"
            href="#reviews"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("reviews");
            }}
          >
            Відгуки
          </a>
        </li>
      </ul>
    </nav>
  );
}
