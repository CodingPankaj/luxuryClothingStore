import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

export const CartQuantity = ({ customStyle = "" }) => {
  const [qty, setQty] = useState(1);
  const increaseQty = () => {
    setQty(qty + 1);
  };
  const decreaseQty = () => {
    setQty(qty - 1);
  };

  return (
    <div className={`flex items-center gap-4 ${customStyle}`}>
      <div className="flex items-center border border-primary-border-color py-1 text-primary-text-color">
        <button onClick={decreaseQty} className="px-1">
          <FiMinus />
        </button>
        <input
          type="text"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          className="w-[50px] appearance-none text-center outline-none"
        />
        <button onClick={increaseQty} className="px-1">
          <FiPlus />
        </button>
      </div>
      <button className="text-light-red-color">
        <RiDeleteBinLine />
      </button>
    </div>
  );
};
