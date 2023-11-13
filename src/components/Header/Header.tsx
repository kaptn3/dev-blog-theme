import Link from "next/link";

export const Header = () => {
  return (
    <nav className="flex items-center flex-wrap bg-gray-900 p-3">
      <Link href="/">
        <span className="text-xl text-white font-bold uppercase tracking-wide">
          Markdown Blog
        </span>
      </Link>
    </nav>
  );
};
