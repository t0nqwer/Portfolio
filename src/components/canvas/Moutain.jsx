import React from "react";
import { moutain } from "../../assets";

const Moutain = () => {
  return (
    <div className="absolute bottom-0 w-full md:h-screen mx-auto z-[-10] ">
      <img
        src={moutain}
        alt="moutain"
        className="inset-0 object-cover w-full "
      />
    </div>
  );
};

export default Moutain;
