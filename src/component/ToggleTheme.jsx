import React from'react'
import{useState}from'react'
function ToggleTheme(){
    const [dark,setDark]=useState("dark")
    return(
        <div style={{ background:"dark==="?"back":"white",color:dark==="dark"?"white":"black",height:"100vh"}}>
            <h1>Welcome to KCE</h1>
            <button onClick={()=>setDark(dark==="dark"?"Light":"dark")}>
                {dark==="dark"?"Light Theme":"Dark Theme"}</button>
          
        </div>
    )
}