const Home=()=>{
    const errMsg="Enter details";
    return(
        <div>
            <h3> Home Page</h3>
            {errMsg!='' && <p style={{color:'red'}}> {errMsg} </p>}
        </div>
    )
}
export default Home;