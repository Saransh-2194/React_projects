import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCounter] = useState(0)
  const addValue = () => {
    if (count < 30) {
      count++;
    }
    else{
      alert('Maximum limit reached!');
    }
    setCounter(count)
    // setCounter(count)
    // setCounter(count)
    // setCounter(count)
    //***************************************
    //this doent increment the counter multiple times as the fibre works in batches and according to diffing
    //algo the changes in the ui are sent in batches therefore the fibre will see that we are making
    //the same changes again and again and it will only execute the change once.
  }
  const removeValue = () => {
    if (count > 0) {
      count--;
    }
    else{
      alert('Maximum limit reached!');
    }
    setCounter(count)
    // setCounter(count)
    // setCounter(count)
    // setCounter(count)
    // if we are to somehow add multiple values we can do it using the current state of the variable 
    // we get a callback in setCounter function and there we can make changes to the current state of the
    //variable
    setCounter((prevCounter) => prevCounter + 1)
    // we can call it anything not neccessarily prevCounter. The brackets are not neccessary.
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter app</h2>
      <h3>Count is: {count}</h3>
      <button onClick = {addValue}>add count</button>
      <button onClick = {removeValue}>remove count</button>
    </>
  )
}

export default App
