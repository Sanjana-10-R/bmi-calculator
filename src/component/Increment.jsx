import React,{ useState} from 'react'
function Increment  (){
    const[count,setCount]=useState(0);
    return(
        <div>
            <p> Count:{count}</p>
            <button onClick={()=>setCount(count+1)}>❤️Increment</button>
              <button onClick={()=>setCount(count-1)}>😢Decrement</button>
              <button onClick={()=>setCount(count-count)}>😎Reset</button>
        </div>
    )
}
export default Increment