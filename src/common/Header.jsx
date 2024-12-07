import { FiMenu } from "react-icons/fi";
import { Logo } from "../headerComponents/Logo";
import { Navbar } from "../headerComponents/Navbar";
import { HeaderButtonsRight } from "../headerComponents/HeaderButtonRight";

export const Header = () => {
  return (
    <header className="w-full bg-primary-bg-color px-[10px] py-4 md:px-[30px]">
      <div className="mx-auto grid grid-cols-[1fr_auto_1fr] align-middle">
        <button className="text-2xl text-secondary-text-color lg:hidden">
          <FiMenu />
        </button>
        <Logo />
        <Navbar />
        <HeaderButtonsRight />
      </div>
    </header>
  );
};
