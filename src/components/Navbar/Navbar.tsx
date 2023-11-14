import {MENU} from "@/consts";

export const Navbar = () => {
  return (
    <nav className="pointer-events-auto hidden md:block">
      <ul
        className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
        {MENU.map((item) => (
          <li key={item.title}>
            <a
              className="relative block px-3 py-2 transition hover:text-violet-400"
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
