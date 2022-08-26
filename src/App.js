import { useEffect, useState } from "react";

import { getShowNNodes, insert } from "./LinkList";

import TestCompo from "./TestCompo";

let showNodes = null;
let prevNNodeStart = null;
let nextNNodeStart = null;

function App({ classname, numberOfEle = 1 }) {
  const [initial, setIntial] = useState(true);

  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(1);
  const [three, setThree] = useState();
  const [four, setFour] = useState();
  const [five, setFive] = useState();
  const [six, setSix] = useState();
  const [seven, setSeven] = useState();
  const [eight, setEight] = useState();

  const childernOfTest = [
    <TestCompo value={1} />,
    <TestCompo value={2} />,
    <TestCompo value={3} />,
    <TestCompo value={4} />,
    <TestCompo value={5} />,
    <TestCompo value={6} />,
    <TestCompo value={7} />,
    <TestCompo value={8} />,
    <TestCompo value={9} />,
    <TestCompo value={10} />,
    <TestCompo value={11} />,
    <TestCompo value={12} />,
  ];

  const head = insert(childernOfTest);

  const initiate = () => {
    setIntial(false);

    let [s, sp, sn] = getShowNNodes(head, numberOfEle, "right");
    showNodes = s;
    prevNNodeStart = sp;
    nextNNodeStart = sn;

    setOne(prevNNodeStart.value);
    for (let i = 1; i <= numberOfEle; i++) {
      if (i === 1) setTwo(showNodes[i - 1].value);
      if (i === 2) setThree(showNodes[i - 1].value);
      if (i === 3) setFour(showNodes[i - 1].value);
      if (i === 4) setFive(showNodes[i - 1].value);
      if (i === 5) setSix(showNodes[i - 1].value);
      if (i === 6) setSeven(showNodes[i - 1].value);
    }

    const nextNumber = numberOfEle + 2;

    if (nextNumber === 5) setFive(nextNNodeStart.value);
    if (nextNumber === 6) setSix(nextNNodeStart.value);
    if (nextNumber === 7) setSeven(nextNNodeStart.value);
    if (nextNumber === 8) setEight(nextNNodeStart.value);
  };

  if (initial) initiate();

  const widthDiv = window.innerWidth / numberOfEle;

  const widthDivPer = 100 / numberOfEle;

  const [next, setNext] = useState(false);

  const onNextClick = () => {
    setNext(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (next) {
        let [s, sp, sn] = getShowNNodes(nextNNodeStart, numberOfEle, "right");

        showNodes = s;
        prevNNodeStart = sp;
        nextNNodeStart = sn;

        setOne(prevNNodeStart.value);

        for (let i = 1; i <= numberOfEle; i++) {
          if (i === 1) setTwo(showNodes[i - 1].value);
          if (i === 2) setThree(showNodes[i - 1].value);
          if (i === 3) setFour(showNodes[i - 1].value);
          if (i === 4) setFive(showNodes[i - 1].value);
          if (i === 5) setSix(showNodes[i - 1].value);
          if (i === 6) setSeven(showNodes[i - 1].value);
        }

        const nextNumber = numberOfEle + 2;

        if (nextNumber === 2) setTwo(nextNNodeStart.value);
        if (nextNumber === 3) setThree(nextNNodeStart.value);
        if (nextNumber === 4) setFour(nextNNodeStart.value);
        if (nextNumber === 5) setFive(nextNNodeStart.value);
        if (nextNumber === 6) setSix(nextNNodeStart.value);
        if (nextNumber === 7) setSeven(nextNNodeStart.value);
        if (nextNumber === 8) setEight(nextNNodeStart.value);
      }
      setNext(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [next]);
  return (
    <div>
      <div className="flex">
        <div
          style={{
            transform: `${
              next
                ? `translateX(-${2 * widthDivPer}%)`
                : `translateX(-${widthDivPer}%)`
            }`,
            transition: `${next ? `ease-in 75ms` : ""}`,
          }}
          className={`w-full `}
        >
          <div className={`flex absolute`}>
            <div style={{ width: `${widthDiv}px` }} id="1">
              {one}
            </div>
            <div style={{ width: `${widthDiv}px` }} id="2">
              {two}
            </div>
            <div style={{ width: `${widthDiv}px` }} id="3">
              {three}
            </div>
            <div style={{ width: `${widthDiv}px` }} id="4">
              {four}
            </div>
            <div style={{ width: `${widthDiv}px` }} id="5">
              {five}
            </div>
            <div style={{ width: `${widthDiv}px` }} id="6">
              {six}
            </div>
            <div style={{ width: `${widthDiv}px` }} id="7">
              {seven}
            </div>
            <div style={{ width: `${widthDiv}px` }} id="8">
              {eight}
            </div>
          </div>
        </div>

        <div className=" absolute mt-96">
          <button
            className="rounded-lg border-2 px-9 border-blue-100"
            onClick={onNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
