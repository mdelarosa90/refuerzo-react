import { FC, Fragment, useState } from "react"

interface CounterProps {
  initialValue?: number;
}

export const Counter: FC<CounterProps> = ({initialValue = 0}) => {
  const [counter, setCounter] = useState(initialValue);

  const handleClick = () => setCounter((c) => c+1);
  return (
    <Fragment>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}>
        +1
      </button>
    </Fragment>
  )
}
