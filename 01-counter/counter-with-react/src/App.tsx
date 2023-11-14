import "./App.css"
import {useState} from "react";
function App() {

  let [count,setCount] = useState(0);


  const addToCount = () => {
    if (count<10) {
      setCount(count +1)
    }
  }

  const subtractFromCount = () => {
    if (count > 0) {
      setCount(count -1)
    }
  }
  return (
    <>
    <h4>The current count is ...</h4>
      <h1>{count}</h1>
      <button onClick={subtractFromCount}>-</button>
      <button onClick={addToCount}>+</button>
    </>
  )
}

export default App
