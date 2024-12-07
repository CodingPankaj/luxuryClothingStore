import { useContext, useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { MainContext } from "../context/MainContext";

export const ProductCard = ({ product }) => {
  return (
    <div className="flex w-full flex-col">
      <ProductCardImage product={product} />
      <ProductDetails product={product} />
    </div>
  );
};

const ProductCardImage = ({ product }) => {
  const [isWishlist, setIsWishlist] = useState(false);
  const { images } = product;

  const [productImage, setProductImage] = useState(images[0].src);

  return (
    <div className="relative w-full">
      <figure className="aspect-1 w-full">
        <img
          src={productImage}
          onMouseEnter={() => setProductImage(images[1].src)}
          onMouseLeave={() => setProductImage(images[0].src)}
          className="h-full w-full object-cover"
        />
      </figure>
      <span className="absolute left-2 top-2 rounded-full bg-primary-bg-color px-2 py-[2px] text-[10px] font-semibold uppercase text-secondary-text-color">
        Sale
      </span>
      <button
        onClick={() => setIsWishlist(!isWishlist)}
        className="absolute right-2 top-2 text-lg text-primary-text-color"
      >
        {isWishlist ? <BsHeartFill /> : <BsHeart />}
      </button>
    </div>
  );
};

const ProductDetails = ({ product }) => {
  const { name, category, price } = product;
  return (
    <div className="mt-3 flex grow flex-col gap-[5px]">
      <h5 className="text-xs tracking-wide text-primary-text-color">
        Luxury Brand
      </h5>
      <h3 className="line-clamp-2 text-base tracking-wide text-primary-text-color">
        {name}
      </h3>
      <h3 className="mb-auto text-base tracking-wide text-primary-text-color">
        <span className="mr-2 text-primary-text-color/50 line-through">
          Rs. {(price * 1.2).toFixed(2)}
        </span>
        Rs. {price}
      </h3>
      <ProductCardButton product={product} />
    </div>
  );
};

const ProductCardButton = ({ product }) => {
  const { cartItems, setCartItems } = useContext(MainContext);

  return (
    <button
      onClick={() => setCartItems([...cartItems, product])}
      className="primary-btn"
    >
      Add to cart
    </button>
  );
};
