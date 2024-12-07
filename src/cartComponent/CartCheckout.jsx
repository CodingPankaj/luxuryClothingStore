import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

export const CartCheckout = ({ viewCartHidden = "" }) => {
  const { toggleSideCart } = useContext(MainContext);

  return (
    <>
      <div className="py-1">
        <button className="flex w-full items-center justify-between border-y border-primary-border-color px-5 py-2 text-sm">
          <p>Add Order Note</p> <FiPlus />
        </button>
        <div className="flex flex-col justify-center gap-2 py-6">
          <p className="text-center">
            Taxes and shipping calculated at checkout
          </p>
          <Link className="secondary-btn mt-5 text-center">
            Checkout • Rs. 63,000.00
          </Link>
          <Link
            onClick={toggleSideCart}
            to={"/cart"}
            className={`text-center underline ${viewCartHidden}`}
          >
            View Cart
          </Link>
        </div>
      </div>
    </>
  );
};
