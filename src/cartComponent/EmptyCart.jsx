import { useContext } from "react";
import { BsCartX } from "react-icons/bs";
import { MainContext } from "../context/MainContext";

export const EmptyCart = () => {
  const { toggleSideCart } = useContext(MainContext);
  return (
    <div className="flex grow flex-col items-center justify-center gap-2 px-5 py-36">
      <BsCartX className="text-6xl text-primary-text-color md:text-8xl" />
      <p className="text-center text-base text-primary-text-color">
        Your cart is currently empty.
      </p>
      <button
        onClick={toggleSideCart}
        className="secondary-btn max-w-fit uppercase"
      >
        Start Shopping
      </button>
    </div>
  );
};
