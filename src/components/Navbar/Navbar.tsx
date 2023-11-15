import {MENU} from "@/consts";

export const Navbar = () => {
  return (
    <nav className="pointer-events-auto">
      <ul
        className="flex text-sm font-medium text-zinc-800 gap-3">
        {MENU.map((item) => (
          <li key={item.title}>
            <a
              className="relative block py-2 transition hover:text-violet-400"
              href={item.href}
              target={item.target}
            >
              {item.title}
            </a>
          </li>
          )
        )}
      </ul>
    </nav>
  );
};
