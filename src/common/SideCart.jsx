import { useContext } from "react";
import { MainContext } from "../context/MainContext";
import { IoCloseSharp } from "react-icons/io5";
import { EmptyCart } from "../cartComponent/EmptyCart";
import { CartQuantity } from "../cartComponent/CartQuantity";
import { CartCheckout } from "../cartComponent/CartCheckout";

export const SideCart = () => {
  const { cartCount, cartItems, isSideCartOpen, toggleSideCart } =
    useContext(MainContext);

  return (
    <div
      className={`fixed ${isSideCartOpen ? "right-0" : "-right-[90%] md:-right-[400px]"} top-0 z-30 flex h-dvh w-[90%] max-w-[400px] flex-col bg-secondary-bg-color transition-all duration-300 md:w-full`}
    >
      <SideCartTop toggleSideCart={toggleSideCart} />
      {cartCount >= 1 ? (
        <>
          <div className="scrollbar-hidden flex grow flex-col gap-3 overflow-y-scroll px-5 py-3">
            {cartItems.map((item) => (
              <SideCartProductCard item={item} key={item.id} />
            ))}
          </div>
          <CartCheckout />
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

const SideCartTop = ({ toggleSideCart }) => {
  return (
    <div className="flex items-center justify-between gap-0 border-b border-primary-border-color px-5 py-4">
      <h4 className="offcanvas-heading">Cart</h4>
      <button
        onClick={toggleSideCart}
        className="text-2xl text-primary-text-color"
      >
        <IoCloseSharp />
      </button>
    </div>
  );
};

const SideCartProductCard = ({ item }) => {
  const { images, name, price } = item;
  return (
    <div className="grid grid-cols-[30%_auto] gap-3">
      <figure className="w-full">
        <img src={images[0].src} />
      </figure>
      <div className="flex flex-col gap-1">
        <h4 className="text-[15px] uppercase leading-[1.15] tracking-wide text-primary-text-color">
          {name}
        </h4>
        <h4 className="mt-1 text-base uppercase leading-[1.15] tracking-wide text-primary-text-color">
          Rs. {price}
        </h4>
        <span className="text-[11px] font-light tracking-wider text-primary-text-color">
          M, PINK
        </span>
        <CartQuantity />
      </div>
    </div>
  );
};
