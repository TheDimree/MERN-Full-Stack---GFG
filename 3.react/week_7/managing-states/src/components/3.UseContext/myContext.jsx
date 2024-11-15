import { createContext, useContext, useState } from "react"

const initialState = {
    count: 0,
    price: '',
    discount: '',
}
const myContext = createContext(initialState);

// * Provider
const ContextProvider = ({children}) => {
    const [count, setCount] = useState(0) //hooks cant be used outside the component
    const [price, setPrice] = useState(0)
    const [discount, setDiscount] = useState(0)
    
    return (
        <myContext.Provider value={{ count, setCount, price, setPrice, discount, setDiscount }}>  {/* writing an object in JSX */}
            {children}  {/* //* App is the child as it is wrapped in main INDEX.js */}
        </myContext.Provider>
    )
}

// * Consumer

const useMyContext = () => useContext(myContext)  // Custom hook always returns the hook.

// * Custom hook returning the context
// function useMyContext() {
//     return useMyContext(myContext)
// }

export {useMyContext, ContextProvider};