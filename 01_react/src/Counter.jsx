import { useState } from "react";
function Counter() {
  const [x, setX] = useState(0);
  //   useState function ek arguments leta hai jo ki hamare state variable initial value hoti hai
  //  useState ek array return krta hai hai wo array 2 value leta hai phli hamra state variable
  //  dusra jo hamra state variable ko upadte krta hai(track krta hai)
  //   dusra variable hota hai state setter function khte hai kykoi value ko update krte wqt hum use krenge to
  // setX(x+1) aise use hoga
  return (
    <>
      Count:{x}
      <button onClick={() => setX(x + 1)}>Increment</button>
      <button onClick={() => setX(x - 1)}>Decrement</button>
    </>
  );
}
export default Counter;
