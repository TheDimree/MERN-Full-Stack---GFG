import { Counter } from "./Counter"
import First from "./First"

export const ReduxLibrary = () => {
    return(
        <div className="container">
            <h1 className="text-center">Redux: A Cental State Management Library Example</h1>
            <Counter />
            <hr />
            <First />

        </div>
        
    )
}