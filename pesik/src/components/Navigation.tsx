export default function Navigation() {
  return (
    <nav className="hidden lg:visible lg:flex lg:items-center">
      <ul className="flex items-center gap-4 whitespace-nowrap">
        <li className="hover:animate-pulse hover:scale-110 transition-all">
          <a className="text-01" href="#About">
            Хто ми
          </a>
        </li>
        <li className="hover:animate-pulse hover:scale-110 transition-all">
          <a className="text-01" href="#Price">
            Послуги та ціни
          </a>
        </li>
        <li className="hover:animate-pulse hover:scale-110 transition-all">
          <a className="text-01" href="#Values">
            Наші цінності
          </a>
        </li>
        <li className="hover:animate-pulse hover:scale-110 transition-all">
          <a className="text-01" href="#Reviews">
            Відгуки
          </a>
        </li>
      </ul>
    </nav>
  );
}
