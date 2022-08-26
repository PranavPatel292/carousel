import React from "react";
import testImg from "./logo192.png";

const TestCompo = ({ value }) => {
  return (
    <div className="flex flex-col p-10 justify-center items-center">
      <p className="font-bold text-3xl">Test div {value}</p>
      <img src={testImg} />
      <div className="p-3"></div>
      <h1>You can add your react componets here</h1>
    </div>
  );
};

export default TestCompo;
