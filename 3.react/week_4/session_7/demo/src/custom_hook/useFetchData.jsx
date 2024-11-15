import { useEffect, useState } from "react";
const useFetchData=(url)=>{
  const [data,setData]=useState([]);
  useEffect(()=>{
     fetch(url)
     .then(res=> res.json())
     .then(data=> setData(data))
     .catch(err=> console.log(err))
  },[])
  return data;
}
export default useFetchData;