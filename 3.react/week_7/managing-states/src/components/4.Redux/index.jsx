// download redux devtools extension on chrome.
import { Counter } from "./Counter"
import First from "./First"

export const ReduxLibrary = () => {
    return(
        <div className="container">
            <h1 className="text-center">Redux: A Cental State Management Library Example</h1>
            <Counter />
            <hr />
            <First />
            <div className="my-2 container">
                <p>Problem: Solved all problems but can't handle asynchronous operations i.e. delayed works. Eg: calling an api.</p>
                <p>Solution: Async Thunk Redux</p>
            </div>
        </div>
        
    )
}