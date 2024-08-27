import { useState } from 'react'
import './style/style.css'

function App() {

  let [counter, setcounter] = useState(0);

  const AddValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setcounter(counter);
      console.log(counter);
    }
    else {
      alert("You can add 20 values!!")
    }
  }
  const RemoveValue = () => {
    if (counter > 0 && counter <= 20) {
      counter = counter - 1;
      setcounter(counter);
      console.log(counter);
    }
    else {
      alert("You can't remove value from 0!!")
    }
  }

  return (
    <>
      <div className="container">
        <h1>Counter Game</h1>
        <h2>Click on the Buttons & See the Magic!!!</h2>
        <h3>Counter Values are 0 to 20</h3>
        <h4>Counter Value: {counter}</h4>
        <button id="add_btn" onClick={AddValue}>Add Value</button>
        <button id="remove_btn" onClick={RemoveValue}>Remove Value</button>
      </div>
    </>
  );
}

export default App;
