import { FC, Fragment, useState } from "react"

interface CounterByProps {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy: FC<CounterByProps> = ({ initialValue = 5 }) => {
  const [{ counter, clicks }, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0
  });

  const handleClick = (value: number) => setCounterState(({ counter, clicks }) => ({ clicks: clicks + 1, counter: counter + value }));
  return (
    <Fragment>
      <h1>CounterBy: {counter}</h1>
      <h1>Clicks: {clicks}</h1>
      <button onClick={() => handleClick(1)}>
        +1
      </button>
      <button onClick={() => handleClick(5)}>
        +5
      </button>
    </Fragment>
  )
}
