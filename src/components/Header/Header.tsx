import {Navbar} from "@/components/Navbar";
import {Logo} from "@/components/Logo";
import {NavbarMobile} from "@/components/NavbarMobile";

export const Header = () => {
  return (
    <header className="relative flex gap-4 mx-auto max-w-2xl lg:max-w-5xl pt-6">
      <Logo />
      <Navbar />
      {/*<NavbarMobile />*/}
      <div className="flex justify-end md:flex-1" />
    </header>
  );
};
