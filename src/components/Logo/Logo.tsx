import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex flex-1">
      <div
        className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
      >
        <Link aria-label="Home" className="pointer-events-auto" href="/">
          <Image src="/img/logo.svg" className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9" width={36} height={36} />
        </Link>
      </div>
    </div>
  );
};
