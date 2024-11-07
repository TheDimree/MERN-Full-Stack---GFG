import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DEC, INC, RESET } from '../store/counterSlice';

const Counter = () => {
    const {count}=useSelector(state=> state.counter);
    const dispatch=useDispatch();
  return (
    <div>
        <h2> Redux Counter Example</h2>
        <p> The redux counter is {count}</p>
        <button className='btn btn-success' onClick={()=> dispatch(INC(5))}> ++ </button>
        <button className='btn btn-success' onClick={()=> dispatch(DEC(2))}> -- </button>
        <button className='btn btn-success' onClick={()=> dispatch(RESET())}> Reset </button>
    </div>
  )
}

export default Counter