import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount, reset } from './CounterSlice';

const Counter = ({ title }) => {
  const {count} = useSelector((state) => state.counter);  // destructuring
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <h2>{title}</h2>
      <p> The redux counter is {count}</p>
      <button className='btn btn-success mx-2' onClick={() => dispatch(increment())}> ++ </button>
      <button className='btn btn-success mx-2' onClick={() => dispatch(decrement())}> -- </button>
      <button className='btn btn-success mx-2' onClick={() => dispatch(reset())}> Reset </button>
      <button className='btn btn-success mx-2' onClick={() => dispatch(incrementByAmount(5))}> Increase by 5</button>
      <p className='my-2'>Counter is being updated in this and the Navbar component.</p>
    </div>
  )
}

export default Counter