import logo from "./logo.svg";
import { useEffect, useState } from "react";

function App({ classname, numberOfEle = 4 }) {
  const widthDiv = window.innerWidth / numberOfEle;

  const [next, setNext] = useState(false);

  const childern = [
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
    "hello",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setNext(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [next]);

  const onNextClick = () => {
    setNext(true);
  };
  return (
    <div>
      <div className="flex">
        <div
          className={`w-full ${
            next ? "translate-x-[-200%]" : "translate-x-[-100%]"
          }`}
        >
          <div className="flex absolute ">
            {childern?.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{ width: `${widthDiv}px` }}
                  className={`h-auto bg-red-500 ${classname}`}
                >
                  <h1>
                    {item}
                    {index}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute mt-40 ">
        <button
          className="rounded-lg border-2 px-9 border-blue-100"
          onClick={onNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
