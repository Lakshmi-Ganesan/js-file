import React,{useState,useEffect} from 'react'
//import Button from '@mui/material/Button';

 function Counter() {
     const[count,setCount]=useState(3);
     useEffect(() => 
     {
       console.log("mounting phase")  
     },[])//only called at mounting phase not at updating phase

     useEffect(() => 
     {
       console.log("updating phase")  
     },[count])

    return (
        <div>
           <h1>counter function component with hooks</h1>
           <h4>initial:{count}</h4>
           <button onClick={()=>setCount(count+1)}variant="contained">increment</button> &nbsp;
           <button onClick={()=>setCount(count-1)}variant="contained">decrement</button> &nbsp;
           <button onClick={()=>setCount(5)}variant="outlined">reset</button><hr></hr>
        </div>
    )
}
export default Counter;