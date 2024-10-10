import Home from "./components/Home";
import Services from "./components/Services";
import Counter from "./components/Counter";
import Products from "./components/Products";
const App=()=>{
    const obj={name:"sumit",age:35};
    const courses=[];
    return (
        <div>
            <h1> Welcome to React Training</h1>
            {/* <Products /> */}
            <hr/>
            <Home />
            <hr/>
            <Services myobj={obj} courses={courses}/>
            <hr/>
            <Counter />
        </div>
    )
}
export default App;