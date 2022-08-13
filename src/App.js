import logo from "./logo.svg";

function App({ classname, numberOfEle = 4 }) {
  const widthDiv = window.innerWidth / numberOfEle;

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
  ];

  return (
    <div className="flex">
      <div className="flex space-x-4">
        {childern?.map((item, index) => {
          return (
            <div
              key={index}
              style={{ width: `${widthDiv}px` }}
              className={`h-auto bg-red-500 ${classname}`}
            >
              <h1>{item}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
