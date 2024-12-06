import { useState } from "react";
import { BsHeart } from "react-icons/bs";

export const ProductCard = ({ product }) => {
  return (
    <div className="w-full">
      <ProductCardImage product={product} />
      <ProductDetails product={product} />
    </div>
  );
};

const ProductCardImage = ({ product }) => {
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
      <button className="absolute right-2 top-2 text-lg text-primary-text-color">
        <BsHeart />
      </button>
    </div>
  );
};

const ProductDetails = ({ product }) => {
  const { name, category, price, brand } = product;
  return (
    <div className="mt-3 flex flex-col gap-[5px]">
      <h5 className="text-xs tracking-wide text-primary-text-color">{brand}</h5>
      <h3 className="text-base tracking-wide text-primary-text-color">
        {name}
      </h3>
      <h3 className="text-base tracking-wide text-primary-text-color">
        <span className="mr-2 text-primary-text-color/50 line-through">
          Rs. {(price * 1.2).toFixed(2)}
        </span>
        Rs. {price}
      </h3>
      <ProductCardButton />
    </div>
  );
};

const ProductCardButton = () => {
  return <button className="primary-btn">Add to cart</button>;
};
