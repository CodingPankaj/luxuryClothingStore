import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <figure className="w-32">
      <Link to={"/"}>
        <img src="images/logo.svg" alt="Logo" className="mt-[5px] block" />
      </Link>
    </figure>
  );
};
