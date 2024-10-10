function App() {
  const title="Welcome to Geek for Geek";
  const para="We learn here from basic to advance level";
  const courses=["A","B","C","D","E"];
  const empData=[
    {"id":1,"name":"Anuj" ,"age":23,"city":"noida"},
    {"id":2,"name":"Sumit" ,"age":33,"city":"delhi"},
    {"id":3,"name":"Suraj" ,"age":43,"city":"gurugram"},
    {"id":4,"name":"Rahul" ,"age":53,"city":"noida"}
  ]
  return (
    <div >
       <h2 className="text-3xl font-bold underline"> Hello Guys ! {title}!</h2>
       <p> {para} </p>
       <ul>
           {courses.map((val,index)=> 
             <li key={index}> {val} </li>
          )}
       </ul>
       <hr/>
       <table  className="relative overflow-x-auto">
           <tbody>
               <tr>
                   <th> S.no</th>
                   <th> Name </th>
                   <th> Age </th>
                   <th> City </th>
               </tr>
               {empData.map((emp,ind)=> 
                 <tr key={emp.id}>
                    <td> {ind+1} </td>
                    <td> {emp.name} </td>
                    <td> {emp.age} </td>
                    <td> {emp.city} </td>
                 </tr>
              )}
           </tbody>
       </table>
    </div>
  );
}

export default App;
