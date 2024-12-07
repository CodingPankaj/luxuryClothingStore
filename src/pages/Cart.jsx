import { useContext } from "react";
import { MainSection } from "../common/MainSection";
import { MainContext } from "../context/MainContext";
import { EmptyCart } from "../cartComponent/EmptyCart";
import { CartQuantity } from "../cartComponent/CartQuantity";
import { CartCheckout } from "../cartComponent/CartCheckout";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cartCount } = useContext(MainContext);
  return (
    <MainSection>
      <div className="main-div px-3">
        <h1 className="main-heading">Cart</h1>
      </div>
      {cartCount >= 1 ? (
        <div>
          <CartTable />
        </div>
      ) : (
        <EmptyCart />
      )}
    </MainSection>
  );
};

const CartTable = () => {
  const { cartItems } = useContext(MainContext);
  return (
    <div className="mx-auto w-full max-w-[900px] px-3">
      <div className="grid w-full grid-cols-2 gap-5 border-b border-primary-border-color py-3 md:grid-cols-[60%_1fr] md:py-5 lg:grid-cols-[52%_1fr_1fr]">
        <h4 className="text-left">Product</h4>
        <h4 className="hidden text-center lg:block">Quantity</h4>
        <h4 className="text-right">Price</h4>
      </div>

      {cartItems.map((item) => (
        <CartCard key={item.id} item={item} />
      ))}
      <div className="mt-5 flex flex-col-reverse justify-between md:flex-row md:gap-4">
        <Link className="text-center underline">Continue Shopping</Link>
        <CartCheckout viewCartHidden="hidden" />
      </div>
    </div>
  );
};

const CartCard = ({ item }) => {
  const { name, images } = item;
  console.log(item);

  return (
    <div className="grid w-full grid-cols-1 gap-2 border-b border-primary-border-color py-5 md:grid-cols-[60%_1fr] md:gap-5 lg:grid-cols-[52%_1fr_1fr]">
      <div className="flex gap-4">
        <figure className="w-[100px]">
          <img src={images[0].src} className="w-full" />
        </figure>
        <div className="flex flex-col gap-1">
          <h3 className="text-sm tracking-wide text-primary-text-color">
            {name}
          </h3>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-primary-text-color/70">
              Size: M
            </p>
            <p className="text-[11px] uppercase tracking-wider text-primary-text-color/70">
              Color: Pink
            </p>
          </div>
          <div className="block lg:hidden">
            <CartQuantity />
          </div>
        </div>
      </div>

      <div className="hidden justify-center lg:flex">
        <CartQuantity />
      </div>

      <div className="flex items-center justify-center">
        <h3 className="w-full text-nowrap text-right text-[15px] uppercase tracking-wide text-primary-text-color">
          Rs. 12,600.00
        </h3>
      </div>
    </div>
  );
};
