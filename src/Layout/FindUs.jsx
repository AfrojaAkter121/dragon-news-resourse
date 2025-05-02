import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h1 className="font-bold mb-5">Find Us on</h1>
      <div className="join join-vertical w-full">
        <button className=" btn bg-base-100 justify-start join-item"> <FaFacebook/> Fecebook</button>
        <button className=" btn bg-base-100 justify-start join-item"><FaTwitter />Twitter</button>
        <button className=" btn bg-base-100 justify-start join-item"><BsInstagram />Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
