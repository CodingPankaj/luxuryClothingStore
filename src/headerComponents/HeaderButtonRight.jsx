import { useContext } from "react";
import { BsBag, BsHeart, BsSearch } from "react-icons/bs";
import { MainContext } from "../context/MainContext";

export const HeaderButtonsRight = () => {
  const { cartCount } = useContext(MainContext);
  return (
    <div className="flex items-center justify-end pr-2">
      <ul className="text-secondary-text-color flex items-center gap-4 text-xl">
        <li className="-mr-[2px]">
          <button>
            <BsSearch />
          </button>
        </li>
        <li className="relative">
          <button>
            <BsHeart />
            <div className="bg-secondary-bg-color text-primary-text-color absolute -right-3 -top-2 flex size-5 items-center justify-center rounded-full text-[10px] font-bold">
              <span>0</span>
            </div>
          </button>
        </li>
        <li className="relative">
          <button>
            <BsBag />
            <div className="bg-secondary-bg-color text-primary-text-color absolute -right-3 -top-2 flex size-5 items-center justify-center rounded-full text-[10px] font-bold">
              <span>{cartCount}</span>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
};
