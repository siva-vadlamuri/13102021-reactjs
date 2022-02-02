import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   Dont call the hooks in class components
  // Dont call the hooks in loops,condtions,nested functions
  // if(count>2){
  //     const [countTwo,setCountTwo] = useState(count);
  // }
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => (count > 0 ? setCount(count - 1) : null);

  return (
    <div>
      <h2>Counter Application</h2>
      <p> count is :{count}</p>
      <button onClick={handleIncrement} className="btn btn-info px-3 py-1">
        Increment
      </button>
      <button onClick={handleDecrement} className="btn btn-info px-3 py-1 ml-2">
        decrement
      </button>
    </div>
  );
}
export default Counter;
