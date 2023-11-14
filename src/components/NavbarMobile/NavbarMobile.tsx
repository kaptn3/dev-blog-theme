import {MENU} from "@/consts";

export const NavbarMobile = () => {
  return (
    <div className="pointer-events-auto md:hidden flex justify-end md:flex-1">
      <button
        className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
        type="button"
        aria-expanded="false"
        aria-controls="headlessui-popover-panel-:r11:"
      >
        Menu
        <svg viewBox="0 0 8 6" aria-hidden="true"
             className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400">
          <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round"></path>
        </svg>
      </button>

      <div>
        <div
          className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm opacity-100"
          aria-hidden="true"
        />
        <div
          className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5"
          tabIndex="-1"
        >
          <div className="flex flex-row-reverse items-center justify-between">
            <button aria-label="Close menu" className="-m-1 p-1" type="button">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 text-zinc-500">
                <path
                  d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <h2 className="text-sm font-medium text-zinc-600">Navigation</h2></div>
          <nav className="mt-6">
            <ul
              className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800">
              {MENU.map((item) => (
                <li key={item.title}>
                  <a
                    className="block py-2"
                    href={item.href}
                    target={item.target}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
