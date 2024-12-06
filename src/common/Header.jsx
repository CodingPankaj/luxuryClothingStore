import { FiMenu } from "react-icons/fi";
import { Logo } from "../headerComponents/Logo";
import { Navbar } from "../headerComponents/Navbar";
import { HeaderButtonsRight } from "../headerComponents/HeaderButtonRight";

export const Header = () => {
  return (
    <header className="bg-primary-bg-color w-full px-[10px] py-2 md:px-[30px]">
      <div className="mx-auto grid grid-cols-[1fr_auto_1fr] align-middle">
        <button className="text-secondary-text-color text-2xl lg:hidden">
          <FiMenu />
        </button>
        <Logo />
        <Navbar />
        <HeaderButtonsRight />
      </div>
    </header>
  );
};
