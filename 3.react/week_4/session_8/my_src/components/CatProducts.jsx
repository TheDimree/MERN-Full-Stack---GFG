import React from 'react'
import { useParams } from 'react-router-dom'
const CatProducts = () => {
    const {cname}=useParams();
  return (
    <div>
        <h2> {cname} Products</h2>
    </div>
  )
}

export default CatProducts