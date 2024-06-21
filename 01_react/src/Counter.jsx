import { useState } from "react";
function Counter() {
  // const [x, setX] = useState(0);
  //   useState function ek arguments leta hai jo ki hamare state variable initial value hoti hai
  //  useState ek array return krta hai hai wo array 2 value leta hai phli hamra state variable
  //  dusra jo hamra state variable ko upadte krta hai(track krta hai)
  //   dusra variable hota hai state setter function khte hai kykoi value ko update krte wqt hum use krenge to
  // setX(x+1) aise use hoga

  // const [isEditting, setIsEditting] = useState(false);

  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  return (
    <ul>
      {/* Count:{x} is {x % 2 == 0 ? "Even " : "Odd "}
      <button onClick={() => setX(x + 1)}>Increment</button>
      <button onClick={() => setX(x - 1)}>Decrement</button> */}
      {/* --------------------------------------------------------- */}
      {/* {isEditting ? <input /> : <p>Some Todo</p>}
      <br />
      <button onClick={() => setIsEditting(!isEditting)}>Click</button> */}
      {/* --------------------------------------------------------- */}
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
        // jb bhi hum list jse item print kr rhe hote hai react item ko idienfy ko krne me problem hoti hai
        // koi child element rerender ho rha hai isilye unique key ki jarurat hoti hai
        // key generally id form me dete hai prr yha array ki index me dia jo not good recommendation
      ))}
      <button onClick={() => setTodos([...todos, "another one"])}>Click</button>
    </ul>
  );
}
export default Counter;
