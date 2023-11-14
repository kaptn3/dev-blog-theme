import {MENU} from "@/consts";

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-100 pb-16 pt-10">
      <div className="mx-auto max-w-2xl lg:max-w-5xl flex justify-between">
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
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Kapiko
        </p>
      </div>
    </footer>
  );
};
