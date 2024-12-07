import { useContext } from "react";
import { BsBag, BsHeart, BsSearch } from "react-icons/bs";
import { MainContext } from "../context/MainContext";

export const HeaderButtonsRight = () => {
  const { cartCount, toggleSideCart } = useContext(MainContext);
  return (
    <div className="flex items-center justify-end pr-2">
      <ul className="flex items-center gap-4 text-xl text-secondary-text-color">
        <li className="-mr-[2px]">
          <button>
            <BsSearch />
          </button>
        </li>
        <li className="relative">
          <button>
            <BsHeart />
            <div className="absolute -right-3 -top-2 flex size-5 items-center justify-center rounded-full bg-secondary-bg-color text-[10px] font-bold text-primary-text-color">
              <span>0</span>
            </div>
          </button>
        </li>
        <li className="relative">
          <button onClick={toggleSideCart}>
            <BsBag />
            <div className="absolute -right-3 -top-2 flex size-5 items-center justify-center rounded-full bg-secondary-bg-color text-[10px] font-bold text-primary-text-color">
              <span>{cartCount}</span>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};
