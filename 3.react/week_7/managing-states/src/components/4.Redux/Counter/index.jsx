import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, setRate } from '../../../slices/CounterSlice'

export const Counter = () => {
    const dispatch = useDispatch()
    const { count, rate } = useSelector(state => state.counter)

    const handleUp = () => {
        dispatch(increment());
    }
    const handleDown = () => {
        dispatch(decrement());
    }
    const updateRate = () => {
        dispatch(setRate(100))
    }
    return (
        <>
            <h2>Counter</h2>
            <div className="my-2">
                <button type="button" class="btn btn-primary" onClick={handleDown}>--</button>
                <span className="mx-2">Count: {count}</span>
                <button type="button" class="btn btn-primary" onClick={handleUp}>++</button>
            </div>
            <div className='my-2'>
                <button type="button" class="btn btn-primary" onClick={updateRate}>Increasing price by 100</button> <span className='mx-2'>Price: {rate}</span>
            </div>
        </>
    )
}
