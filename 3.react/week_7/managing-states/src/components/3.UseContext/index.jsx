import First from './First';
import Second from './second';
export const UseContext = () => {

    return (
        <>
            <h1>useContext Example</h1>
            <First />
            <hr />
            <Second />
            <div className=" container my-2">
                <p>Problem: State is global but still we're using useState and useReducer to manage/update the states.</p>
                <p>Solution: REDUX, a Centralized State Management Library</p>
            </div>
        </>
    )
}