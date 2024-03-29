import {Navbar} from "@/components/Navbar";
import {Logo} from "@/components/Logo";

export const Header = () => {
  return (
    <header className="px-4 relative flex gap-4 mx-auto max-w-2xl lg:max-w-5xl pt-6">
      <Logo />
      <Navbar />
    </header>
  );
};
