import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  selectCounter,
} from "../features/counter/counterSlice";
import { useState } from "react";

function Counter() {
  const [value, setValue] = useState(2);
  const counter = useSelector(selectCounter);
  console.log(counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter is {counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={() => dispatch(incrementByAmount(+value))}>
        Increment by amount
      </button>
    </div>
  );
}

export default Counter;
