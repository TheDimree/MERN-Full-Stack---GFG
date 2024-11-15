import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <h2> Contact Us</h2>
        <table className='table'>
            <tbody>
                <tr>
                   <td width={200}>
                     <ul className="list-group">
                      <li className="list-group-item active"> <Link to="noida" className='list-group-item-action'> Noida</Link></li>
                        <li  className="list-group-item"> <Link to="gurugram"> Gurugram</Link></li>
                        <li  className="list-group-item"> <Link to="mumbai"> Mumbai</Link></li>
                     </ul>
                   </td>
                   <td>
                      {/* load childcomponents */}
                      <Outlet />
                   </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Contact