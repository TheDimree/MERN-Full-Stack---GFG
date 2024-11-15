    import { createSlice } from "@reduxjs/toolkit";

    const initialValue = {
        count:0,
        rate:0,
    }

    //* --> createSlice automatically create action.type = 'counter/decrement' i.e., name/reducer; hence that switch part is also handled automatically.    
    const counterSlice = createSlice({
        name: "counter",
        initialState: initialValue, // initial state is a  fixed keyword, either define initialState or do this.
        reducers: {
            increment: (state, action) => {
            state.count += 1  // this is Mutation : mutating the value not updating the value but redux under the hood uses something called immerJS which returns a new object.
                // return {...state, count: state.count+1}  //* this updating the value by creating immutable object
            },

            // decrement: (state) => state.count =  state.count - 1,  //! throws error because in Immer, you must either mutate the draft directly or return a new state—not both.
            decrement: (state) => {
                state.count -= 1
            },  //* always use breaces while defining the reducers to avoid implicit returning the new state.
           
            // // reset: state => 0,

            // setRate: (state, action) => state.rate += action.payload,    //! Immer may have trouble understanding if you're intending to mutate the draft or create a new state because return statement is implicitly happening (because it's a concise arrow function). So, it is Error Prone
            setRate: (state, action) => {   // use braces, return is not implicit here.
                state.rate += action.payload
            },
        },
    })

    // * createSlice has all the created reducers in counterSlice.actions you've created just export them, so that we can dispatch actions.
    // const createSlice.actions = {
    //     increment,
    //     decrement,
    //     // reset,
    // }

    export const { increment, decrement, setRate } = counterSlice.actions;
    export default counterSlice.reducer;