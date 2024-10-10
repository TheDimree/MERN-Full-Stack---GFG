const Services=({myobj,courses})=>{
    return(
        <div>
            <h3> Services Page</h3>
            <p> {myobj.name} is {myobj.age} year old</p>
            {courses.length>0 ? 
            <div>
                <h4> Courses</h4>
                <ul>
                {courses.map((val,ind)=>
                  <li key={ind}> {val} </li>
                )}
            </ul>
            </div> :
            <div> No course found </div>}
            
        </div>
    )
}
export default Services;