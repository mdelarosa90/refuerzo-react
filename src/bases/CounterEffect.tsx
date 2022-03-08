import { gsap } from 'gsap';
import { Fragment, useEffect, useRef, useState } from "react";

const MAXIMUM_COUNT = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMUM_COUNT));
  }

  useEffect(() => {
    if (counter < 10) return;

    const tl = gsap.timeline();
    tl.to(counterElement.current, {y: -10, duration: 0.2, ease: 'ease.out'});
    tl.to(counterElement.current, {y: 0, duration: 1, ease: 'bounce.out'});
    console.log('%cSe Llegó al Valor Máximo', 'color: red; background-color: white');
  }, [counter]);

  return (
    <Fragment>
      <h1>Counter:</h1>
      <h2 ref={counterElement}>{counter}</h2>
      <button onClick={handleClick}>
        +1
      </button>
    </Fragment>
  )
}
