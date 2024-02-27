import React, { useState } from 'react'

//1. import useState
function Counter() {
  //2. state creation    //similar to var counter=0
  const [counter,setCounter]=useState(0)

  const incrementCounter=()=>{
    //increment counter value by 1
    setCounter(counter+1)
  }

  function decrementCounter() {
    //decrement counter value by 1
    if(counter!=0){
      setCounter(counter-1)
    }
  }

  function reset() {
    //reset counter to 0
    setCounter(0)
  }

  return (
    <div className='m-5 p-5 bg-black'>
      <div className='text-center m-5 p-5'>
        <h1 className='text-center mt-5 pt-5 text-light'>Counter Application</h1>
        <h1 className='text-center text-light'>{counter}</h1>
        <div className="row text-center mb-5 pb-5">
          <div className="col">
            <button onClick={incrementCounter} className='btn btn-primary mx-3'>Increment</button>
            <button onClick={decrementCounter} className='btn btn-dark mx-3'>Decrement</button>
            <button onClick={reset} className='btn btn-light mx-3'>Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counter