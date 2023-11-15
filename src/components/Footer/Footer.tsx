import {MENU} from "@/consts";

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-100 py-10">
      <div className="mx-auto max-w-2xl lg:max-w-5xl flex justify-between">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
          {MENU.map((item) => (
            <a
              key={item.title}
              className="transition hover:text-violet-400"
              href={item.href}
              target={item.target}
            >
              {item.title}
            </a>)
          )}
        </div>
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Kapiko
        </p>
      </div>
    </footer>
  );
};
