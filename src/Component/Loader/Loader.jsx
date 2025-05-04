import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <span className="loading loading-ball loading-md"></span>
      <span className="loading loading-ball loading-lg"></span>
      <span className="loading loading-ball loading-xl"></span>
    </div>
  );
};

export default Loader;
