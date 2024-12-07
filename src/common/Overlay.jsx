import { useContext } from "react";
import { MainContext } from "../context/MainContext";

export const Overlay = () => {
  const { isOverlayOpen } = useContext(MainContext);
  return (
    <div
      className={`fixed left-0 top-0 z-20 h-full w-full bg-black/10 backdrop-blur-md ${isOverlayOpen ? "block" : "hidden"}`}
    ></div>
  );
};
