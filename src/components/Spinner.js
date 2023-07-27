import React, { Component } from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <>
      {/* <div className=" text-center">
        <img className="my-5" src={loading} alt="loading" />
      </div>
       */}
      <div className="loader">
        <div>l</div>
        <div>o</div>
        <div>a</div>
        <div>d</div>
        <div>i</div>
        <div>n</div>
        <div>g</div>
      </div>
    </>
  );
};

export default Spinner;
