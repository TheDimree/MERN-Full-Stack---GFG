/* eslint-disable default-case */
import { useReducer } from "react"

export const UseReducer = () => {

    const initialState = {
        // * defining states with initialized values
        count: 0,
        price: 0,
        discount: 0,
        rating: 0
        // discount: 0
    }

    const reducerFunction = (state, action) => {
        console.log(state, "\n", action.payload)
        switch (action.type) {
            case 'INCREMENT':
                return { ...state, count: state.count + 1 }
            case 'DECREMENT':
                return { ...state, count: state.count - 1 }
            case 'UPDATE_PRICE':
                return { ...state, price: state.price + 100 }
            case 'discount':
                console.log("discounting")
                // return { ...state, price:  }
                return { ...state, discount: action.payload}
                // return { ...state, price: state.price - (state.price * action.payload/100)}
            default:
                return state;
        }

    }

    // const [state, stateDispatch] = useReducer(stateReducer, initialState)    // * Syntax
    const [state, dispatch] = useReducer(reducerFunction, initialState)
    // const [{price, discount, rating}, dispatch] = useReducer(reducerFunction, initialState)   // destructuring

    const handleDiscount = (event) => {
        dispatch({
            type: 'discount',
            payload: event.target.value,
        })
    }

    return (
        <>
            <div className="container my-2">
                <h1 className='text-center'>useState Hook Example</h1>
                <div className="my-2">
                    <button type="button" className="btn btn-primary" onClick={() => dispatch({ type: 'DECREMENT' })}>--</button>
                    <span className="mx-2">Count: {state.count}</span>
                    <button type="button" className="btn btn-primary" onClick={() => dispatch({ type: 'INCREMENT' })}>++</button>

                </div>
                <div className='my-2'>
                    <button type="button" className="btn btn-primary" onClick={() => dispatch({ type: 'UPDATE_PRICE' })}>Increasing price by 100</button> <span className='mx-2'>Price: {state.price}</span>
                </div>
                <div className='my-2'>
                    <input type="text" name="" id="" onChange={handleDiscount} /> <br />
                    <button type="button" className="btn btn-primary my-2" onClick={()=>handleDiscount}>Check Discount</button>
                    <span className="font-bold mx-2 my-2">Discount given: {state.discount}</span> <br />
                </div>
            </div>
            <div className="my-2 container">
                <p>Problem: Solved the problem by using single reducerFunction to manage multiple states but the State is Local, can't access globally.</p>
                <p>Solution: Props drilling and useContext Hook</p>
            </div>

        </>

    )
}